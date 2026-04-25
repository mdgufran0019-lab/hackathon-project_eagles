import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Shield, Globe, Mic, Brain, Database, Lock } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
  return (
    <section id="features" className="py-16 md:py-32 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl text-white">
            Industry-Grade Architecture
          </h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Built on a Retrieval-Augmented Generation (RAG) paradigm with multiple validation layers
            to ensure zero hallucination in civic service information delivery.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm gap-6 md:max-w-full md:grid-cols-3 md:mt-16">
          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Brain className="size-6 text-purple-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">RAG-Powered Responses</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Every response is grounded in verified government scheme data. No fabricated eligibility
                criteria, benefits, or entitlements — only factual, database-backed answers.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Globe className="size-6 text-blue-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">12+ Indian Languages</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Supports Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam,
                Punjabi, Urdu, Odia, and English — making services accessible to all citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Mic className="size-6 text-green-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">Voice & Text Input</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Speak in your regional language or type your query. Our ASR engine transcribes
                speech accurately, ensuring accessibility for all user groups.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Shield className="size-6 text-yellow-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">Anti-Hallucination Guard</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Secondary classification and rule-based validation layers ensure the AI never
                fabricates policy details. Every claim is cross-verified against the knowledge base.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Lock className="size-6 text-red-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">PII Protection</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Aadhaar numbers, PAN cards, phone numbers, and emails are automatically detected
                and blocked. No personally identifiable information is ever stored or logged.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/5 backdrop-blur-sm shadow-none text-center hover:bg-white/10 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Database className="size-6 text-cyan-400" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-semibold text-white">Verified Scheme Database</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">
                Structured, curated database of 10+ government schemes with eligibility criteria,
                benefits, required documents, and step-by-step application processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-black/50 absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/20">{children}</div>
  </div>
)
