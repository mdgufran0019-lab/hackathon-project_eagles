import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NagrikMitra — Multilingual Civic Services Copilot",
  description:
    "AI-powered multilingual copilot for Indian citizens to navigate government schemes. Supports 12 Indian languages, voice input, RAG-grounded responses, and PII protection. Find eligibility for PMAY, PM-KISAN, Ayushman Bharat, and more.",
  keywords: [
    "government schemes india",
    "multilingual civic services",
    "RAG chatbot",
    "PM-KISAN eligibility",
    "Ayushman Bharat",
    "PMAY housing scheme",
    "nagrik mitra",
    "hindi government schemes",
    "indian language AI",
    "civic copilot",
  ],
  openGraph: {
    title: "NagrikMitra — Multilingual Civic Services Copilot",
    description: "Navigate Indian government schemes in your language. AI-powered, PII-safe, zero hallucination.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
