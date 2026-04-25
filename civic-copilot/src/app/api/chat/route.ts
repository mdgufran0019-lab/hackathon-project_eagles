import { NextRequest, NextResponse } from "next/server";
import { containsPII } from "@/lib/schemes-database";

// 👇 PASTE YOUR GEMINI API KEY HERE 👇
const GEMINI_API_KEY = "AIzaSyCPmkhiZ4Oy0fnjkCmDe0RPBIPcKZ3u-9c";

const SYSTEM_PROMPT = `You are NagrikMitra (नागरिक मित्र), an intelligent Multilingual Civic Services Copilot for Indian citizens.

CRITICAL RULES - YOU MUST FOLLOW THESE:
1. You are the ultimate search engine and knowledge base for Indian government schemes, policies, and civic services. Provide the most accurate, detailed, and helpful solutions based on your extensive training data.
2. NEVER store, repeat, or ask for Personally Identifiable Information (PII) like Aadhaar numbers, PAN numbers, phone numbers, bank account numbers, or email addresses.
3. If a user shares PII, warn them: "⚠️ For your security, please do not share personal identification numbers here. This system does not store any personal data."
4. Always try to cite the specific scheme name and official website when providing information.
5. Respond in the same language the user writes in. You support: English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Urdu, and Odia.
6. Be empathetic, clear, and use simple language that any citizen can understand.
7. For eligibility checks, present criteria as a checklist the user can self-verify.
8. Format responses with proper headings, bullet points, and emojis for clarity.

You are a highly capable AI assistant dedicated to helping Indian citizens navigate complex government services.`;

export async function POST(request: NextRequest) {
  try {
    const { message, language } = await request.json();

    // === VALIDATION LAYER 1: PII Detection ===
    const piiCheck = containsPII(message);
    if (piiCheck.hasPII) {
      return NextResponse.json({
        response: `⚠️ **Security Alert — PII Detected**\n\nI detected what appears to be sensitive personal information (${piiCheck.types.join(", ")}) in your message.\n\n🔒 **For your safety, this information has NOT been stored or logged.**\n\nPlease rephrase your question without including personal identification numbers. I can help you understand scheme eligibility, benefits, and application processes without needing your personal details.\n\n_Your privacy is our top priority._`,
        piiDetected: true,
        piiTypes: piiCheck.types,
        schemesFound: [],
      });
    }

    // === GEMINI SEARCH ENGINE ===
    const languageMap: Record<string, string> = {
      en: "English", hi: "Hindi", bn: "Bengali", ta: "Tamil", te: "Telugu",
      mr: "Marathi", gu: "Gujarati", kn: "Kannada", ml: "Malayalam", pa: "Punjabi",
      ur: "Urdu", or: "Odia"
    };

    const langName = languageMap[language as string] || "English";

    const languageInstruction = `\n\nCRITICAL DIRECTIVE: The user has selected ${langName} as their preferred language. You MUST generate your ENTIRE response exclusively in ${langName}. Do NOT reply in English unless the selected language is English. Your output must strictly match the language chosen by the user.`;

    // If the user hasn't added their key yet, show a helpful message
    if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || !GEMINI_API_KEY) {
      return NextResponse.json({
        response: "⚠️ **Developer Notice:** Please paste your Gemini API key into `src/app/api/chat/route.ts` to enable the search engine.",
        schemesFound: [],
      });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: { text: SYSTEM_PROMPT + languageInstruction }
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 1500,
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API error:", errorData);
      return NextResponse.json(
        {
          response: "I'm experiencing a technical issue connecting to the Gemini service. Please try again in a moment.",
          error: true,
          schemesFound: [],
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response. Please try again.";

    // === VALIDATION LAYER 2: Post-response verification ===
    const responsePiiCheck = containsPII(aiResponse);

    return NextResponse.json({
      response: aiResponse,
      schemesFound: [],
      totalSchemesSearched: "Gemini Database",
      ragGrounded: false,
      responseSafe: !responsePiiCheck.hasPII,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        response: "An error occurred while processing your request. Please try again.",
        error: true,
      },
      { status: 500 }
    );
  }
}
