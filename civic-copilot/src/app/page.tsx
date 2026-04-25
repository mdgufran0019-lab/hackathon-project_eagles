"use client";
import ShaderBackground from "@/components/ui/shader-background";
import NavHeader from "@/components/ui/nav-header";
import { HeroSection } from "@/components/hero-section";
import CivicChat from "@/components/civic-chat";
import { SchemesShowcase } from "@/components/schemes-showcase";
import { Features } from "@/components/ui/features";
import { FAQ } from "@/components/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* WebGL Shader Background */}
      <ShaderBackground />

      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-black/30 -z-10 pointer-events-none" />

      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
            नम
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block">NagrikMitra</span>
        </div>
        <NavHeader onNavigate={scrollToSection} />
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium hidden sm:block">AI Online</span>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-16">
        {/* Hero */}
        <HeroSection onScrollToChat={() => scrollToSection("chat")} />

        {/* AI Chat */}
        <CivicChat />

        {/* Schemes Browser */}
        <SchemesShowcase />

        {/* Features */}
        <Features />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
