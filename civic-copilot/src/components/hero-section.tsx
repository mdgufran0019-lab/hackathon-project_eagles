"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mic, Globe2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection({ onScrollToChat }: { onScrollToChat: () => void }) {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs mb-8 backdrop-blur-sm"
      >
        <Zap className="w-3 h-3" />
        <span>Powered by OpenAI GPT-4o + RAG Architecture</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
      >
        <span className="block">नागरिक मित्र</span>
        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-3xl md:text-5xl mt-2">
          Your Civic Services Copilot
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-lg text-neutral-300 mb-10 leading-relaxed"
      >
        Navigate complex government schemes in your language. Ask in{" "}
        <span className="text-purple-300 font-medium">Hindi, Tamil, Bengali</span> or any Indian
        language — by voice or text. Get{" "}
        <span className="text-green-300 font-medium">verified, hallucination-free</span> answers
        grounded in official government data.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <Button
          onClick={onScrollToChat}
          id="hero-chat-btn"
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
        >
          <Mic className="w-5 h-5 mr-2" /> Start Chatting — It&apos;s Free
        </Button>
        <Button
          variant="outline"
          onClick={() => document.getElementById("schemes")?.scrollIntoView({ behavior: "smooth" })}
          className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base rounded-xl backdrop-blur-sm"
        >
          <Globe2 className="w-5 h-5 mr-2" /> Browse All Schemes
        </Button>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full max-w-3xl"
      >
        {[
          { value: "10+", label: "Verified Schemes", icon: <Shield className="w-4 h-4 text-green-400" /> },
          { value: "12", label: "Indian Languages", icon: <Globe2 className="w-4 h-4 text-blue-400" /> },
          { value: "100%", label: "PII Protected", icon: <Shield className="w-4 h-4 text-yellow-400" /> },
          { value: "0", label: "Hallucinations", icon: <Zap className="w-4 h-4 text-purple-400" /> },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-center gap-1 mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-neutral-400 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScrollToChat}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="text-neutral-400 hover:text-white transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs">Scroll to chat</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
