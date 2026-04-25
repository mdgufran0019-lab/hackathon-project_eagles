"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpIcon,
  Mic,
  MicOff,
  Globe,
  Shield,
  Search,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Database,
} from "lucide-react";
import { supportedLanguages } from "@/lib/schemes-database";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  schemesFound?: { id: string; name: string; category: string; helpline?: string; website?: string }[];
  ragGrounded?: boolean;
  piiDetected?: boolean;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight?: number }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) { textarea.style.height = `${minHeight}px`; return; }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight ?? Infinity));
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );
  useEffect(() => {
    if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`;
  }, [minHeight]);
  return { textareaRef, adjustHeight };
}

export default function CivicChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isListening, setIsListening] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 48, maxHeight: 150 });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Voice input is not supported in this browser. Please use Chrome.");
      return;
    }
    const SpeechRecognitionAPI = (window as unknown as { SpeechRecognition?: typeof SpeechRecognition; webkitSpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;
    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = true;
    const langMap: Record<string, string> = {
      en: "en-IN", hi: "hi-IN", bn: "bn-IN", ta: "ta-IN", te: "te-IN",
      mr: "mr-IN", gu: "gu-IN", kn: "kn-IN", ml: "ml-IN", pa: "pa-IN", ur: "ur-IN", or: "or-IN",
    };
    recognition.lang = langMap[selectedLang] || "en-IN";
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results).map((result) => result[0].transcript).join("");
      setMessage(transcript);
      adjustHeight();
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
  };

  const stopVoiceInput = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    adjustHeight(true);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, language: selectedLang }),
      });
      const data = await res.json();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
        schemesFound: data.schemesFound,
        ragGrounded: data.ragGrounded,
        piiDetected: data.piiDetected,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "⚠️ Connection error. Please check your internet and try again.",
          timestamp: new Date(),
        },
      ]);
    }
    setIsLoading(false);
  };

  const quickQueries = [
    { icon: <Search className="w-4 h-4" />, label: "Find Schemes", query: "What government schemes am I eligible for?" },
    { icon: <Sparkles className="w-4 h-4" />, label: "Housing Help", query: "Tell me about Pradhan Mantri Awas Yojana" },
    { icon: <Database className="w-4 h-4" />, label: "Farmer Support", query: "What benefits are available for farmers?" },
    { icon: <Shield className="w-4 h-4" />, label: "Health Insurance", query: "How can I get Ayushman Bharat health card?" },
  ];

  const hasMessages = messages.length > 0;

  return (
    <section id="chat" className="relative z-10 w-full flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Chat Header */}
        <div className={cn("text-center transition-all duration-500", hasMessages ? "mb-4" : "mb-8")}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs mb-4">
            <Shield className="w-3 h-3" /> PII Protected · RAG Grounded · Zero Hallucination
          </div>
          <h2 className={cn("font-bold text-white transition-all", hasMessages ? "text-2xl" : "text-4xl md:text-5xl")}>
            {hasMessages ? "NagrikMitra AI" : "नागरिक मित्र"}
          </h2>
          {!hasMessages && (
            <p className="mt-3 text-neutral-300 text-lg">
              Your trusted AI assistant for government schemes & services
            </p>
          )}
        </div>

        {/* Messages Area */}
        {hasMessages && (
          <div className="mb-4 max-h-[50vh] overflow-y-auto space-y-4 pr-2 scrollbar-thin">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                    msg.role === "user"
                      ? "bg-purple-600 text-white rounded-br-md"
                      : "bg-white/10 backdrop-blur-md text-white/90 rounded-bl-md border border-white/10"
                  )}
                >
                  {msg.role === "assistant" && msg.piiDetected && (
                    <div className="flex items-center gap-2 mb-2 text-yellow-400 text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" /> PII Detected & Blocked
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                  {msg.role === "assistant" && msg.schemesFound && msg.schemesFound.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1 text-xs text-green-400 mb-2">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified from {msg.schemesFound.length} scheme(s)</span>
                        {msg.ragGrounded && <span className="ml-1 px-1.5 py-0.5 rounded bg-green-500/20 text-[10px]">RAG Grounded</span>}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.schemesFound.map((s) => (
                          <a
                            key={s.id}
                            href={s.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 hover:bg-white/10 transition-colors"
                          >
                            {s.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-bl-md px-4 py-3 border border-white/10">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Searching verified schemes database...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Box */}
        <div className="relative bg-black/60 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl shadow-purple-500/10">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => { setMessage(e.target.value); adjustHeight(); }}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder={selectedLang === "hi" ? "अपना सवाल यहाँ लिखें..." : "Ask about any government scheme..."}
            className={cn(
              "w-full px-4 py-3 resize-none border-none",
              "bg-transparent text-white text-sm",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-neutral-400 min-h-[48px]"
            )}
            style={{ overflow: "hidden" }}
          />
          <div className="flex items-center justify-between p-3 pt-0">
            <div className="flex items-center gap-1">
              {/* Voice Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={isListening ? stopVoiceInput : startVoiceInput}
                className={cn("text-white hover:bg-white/10 h-8 w-8", isListening && "text-red-400 bg-red-400/20 animate-pulse")}
                title="Voice input"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              {/* Language Picker */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLangPicker(!showLangPicker)}
                  className="text-white hover:bg-white/10 h-8 text-xs gap-1 px-2"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {supportedLanguages.find((l) => l.code === selectedLang)?.nativeName || "English"}
                </Button>
                {showLangPicker && (
                  <div className="absolute bottom-full left-0 mb-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-2 grid grid-cols-3 gap-1 min-w-[280px] z-50">
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setSelectedLang(lang.code); setShowLangPicker(false); }}
                        className={cn(
                          "text-left px-2 py-1.5 rounded text-xs transition-colors",
                          selectedLang === lang.code
                            ? "bg-purple-600 text-white"
                            : "text-white/70 hover:bg-white/10"
                        )}
                      >
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="block text-[10px] opacity-60">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Button
              onClick={sendMessage}
              disabled={!message.trim() || isLoading}
              className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg transition-all h-8",
                message.trim() && !isLoading
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
              )}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpIcon className="w-4 h-4" />}
              <span className="text-xs sr-only md:not-sr-only">Send</span>
            </Button>
          </div>
        </div>

        {/* Quick Actions - only show when no messages */}
        {!hasMessages && (
          <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
            {quickQueries.map((q) => (
              <Button
                key={q.label}
                variant="outline"
                onClick={() => { setMessage(q.query); adjustHeight(); }}
                className="flex items-center gap-2 rounded-full border-white/20 bg-black/40 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
              >
                {q.icon}
                <span className="text-xs">{q.label}</span>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
