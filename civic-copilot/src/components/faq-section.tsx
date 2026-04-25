"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question: "What is NagrikMitra and how does it work?",
    answer:
      "NagrikMitra is an AI-powered Multilingual Civic Services Copilot. It uses Retrieval-Augmented Generation (RAG) — meaning every response is grounded in a verified database of government schemes. When you ask a question, the system first retrieves relevant scheme data, then generates a response based ONLY on that verified data. This eliminates hallucination — the AI cannot fabricate eligibility criteria or benefits.",
  },
  {
    id: "2",
    question: "Is my personal information safe? Will my data be stored?",
    answer:
      "Absolutely. NagrikMitra has a built-in PII (Personally Identifiable Information) detection layer that automatically detects and blocks Aadhaar numbers, PAN cards, phone numbers, bank account details, and email addresses. No personal data is ever stored or logged. The system flags and warns you immediately if you accidentally share personal information in your query.",
  },
  {
    id: "3",
    question: "Which Indian languages are supported?",
    answer:
      "NagrikMitra supports 12 Indian languages: English, Hindi (हिन्दी), Bengali (বাংলা), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), Gujarati (ગુજરાતી), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Punjabi (ਪੰਜਾਬੀ), Urdu (اردو), and Odia (ଓଡ଼ିଆ). You can also use voice input in your preferred language — just select your language before clicking the microphone button.",
  },
  {
    id: "4",
    question: "How accurate is the information? Can the AI make mistakes?",
    answer:
      "We've implemented multiple validation layers to ensure accuracy: (1) RAG Grounding — responses are based only on retrieved verified data; (2) Anti-hallucination prompting — the AI is strictly instructed never to fabricate policy details; (3) Low temperature setting (0.3) for consistent, factual outputs; (4) If the AI cannot find relevant data, it explicitly says so and directs you to official portals. For critical decisions, always verify with official government websites or helplines.",
  },
  {
    id: "5",
    question: "How do I check my eligibility for a scheme?",
    answer:
      "Simply type or speak your question in your language, such as 'Am I eligible for PM-KISAN?' or 'What schemes are available for women entrepreneurs?' The AI will retrieve the relevant scheme information and present the eligibility criteria as a checklist you can verify against your situation. You can also browse all schemes in the 'Schemes' section and click on any card for detailed eligibility information.",
  },
  {
    id: "6",
    question: "What is the difference between text and voice input?",
    answer:
      "Both modes work equally well. Text input lets you type your query in any supported language. Voice input uses your browser's speech recognition (best on Chrome) — click the microphone icon, speak your question, and the text is automatically transcribed. Select your language from the language picker before using voice input for best accuracy with regional languages.",
  },
  {
    id: "7",
    question: "How many government schemes are in the database?",
    answer:
      "Currently, our database contains 10 major central government schemes covering Housing (PMAY), Financial Inclusion (PMJDY), Agriculture (PM-KISAN, PMFBY), Healthcare (Ayushman Bharat), Insurance (PMSBY), Entrepreneurship (MUDRA), Energy (Ujjwala), Savings/Girl Child (Sukanya Samriddhi), and Education (National Scholarship Portal). We continuously update and expand the database with new schemes.",
  },
  {
    id: "8",
    question: "Can I apply for schemes directly through NagrikMitra?",
    answer:
      "NagrikMitra is an information and guidance platform — it helps you understand schemes, check eligibility, and know what documents are needed. For actual applications, it provides links to official government portals (like pmkisan.gov.in, pmjdy.gov.in) and helpline numbers. Direct application submission is handled by the respective government portals to ensure security and authenticity.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative z-10 py-16 md:py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-300">
            Everything you need to know about the NagrikMitra Civic Services Copilot.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {faqItems.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-white hover:text-purple-300 hover:no-underline text-left text-sm font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-300 text-sm leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
