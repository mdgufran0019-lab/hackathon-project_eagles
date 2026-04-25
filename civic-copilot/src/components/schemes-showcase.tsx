"use client";
import { useState } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { schemesDatabase, GovernmentScheme } from "@/lib/schemes-database";
import {
  Home, Wallet, Wheat, HeartPulse, Shield, Briefcase,
  Flame, Baby, CloudRain, GraduationCap, Phone, ExternalLink, ChevronDown
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Housing: <Home className="w-5 h-5 text-orange-400" />,
  "Financial Inclusion": <Wallet className="w-5 h-5 text-blue-400" />,
  Agriculture: <Wheat className="w-5 h-5 text-green-400" />,
  Healthcare: <HeartPulse className="w-5 h-5 text-red-400" />,
  Insurance: <Shield className="w-5 h-5 text-yellow-400" />,
  Entrepreneurship: <Briefcase className="w-5 h-5 text-purple-400" />,
  Energy: <Flame className="w-5 h-5 text-amber-400" />,
  "Savings & Girl Child": <Baby className="w-5 h-5 text-pink-400" />,
  "Agriculture (Crop Insurance)": <CloudRain className="w-5 h-5 text-cyan-400" />,
  Education: <GraduationCap className="w-5 h-5 text-indigo-400" />,
};

const categoryColors: Record<string, string> = {
  Housing: "border-orange-500/30 hover:border-orange-500/60",
  "Financial Inclusion": "border-blue-500/30 hover:border-blue-500/60",
  Agriculture: "border-green-500/30 hover:border-green-500/60",
  Healthcare: "border-red-500/30 hover:border-red-500/60",
  Insurance: "border-yellow-500/30 hover:border-yellow-500/60",
  Entrepreneurship: "border-purple-500/30 hover:border-purple-500/60",
  Energy: "border-amber-500/30 hover:border-amber-500/60",
  "Savings & Girl Child": "border-pink-500/30 hover:border-pink-500/60",
  Education: "border-indigo-500/30 hover:border-indigo-500/60",
};

export function SchemesShowcase() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(schemesDatabase.map((s) => s.category)))];
  const filtered = filter === "All" ? schemesDatabase : schemesDatabase.filter((s) => s.category === filter);

  return (
    <section id="schemes" className="relative z-10 py-16 md:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs mb-4">
            <Shield className="w-3 h-3" /> Verified Government Database · {schemesDatabase.length} Schemes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Government Schemes
          </h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Browse our verified database of government welfare schemes. All information is sourced
            directly from official government portals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
                filter === cat
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "border-white/20 text-neutral-400 hover:text-white hover:border-white/40 bg-black/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              expanded={expanded === scheme.id}
              onToggle={() => setExpanded(expanded === scheme.id ? null : scheme.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SchemeCard({
  scheme,
  expanded,
  onToggle,
}: {
  scheme: GovernmentScheme;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <GlowCard
      glowColor="purple"
      className={`border transition-all duration-300 cursor-pointer ${
        categoryColors[scheme.category] || "border-white/20 hover:border-white/40"
      } ${expanded ? "lg:col-span-1" : ""}`}
    >
      <div onClick={onToggle}>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white/10">
              {categoryIcons[scheme.category] || <Shield className="w-5 h-5 text-purple-400" />}
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                {scheme.category}
              </span>
              <h3 className="text-sm font-semibold text-white leading-tight">{scheme.name}</h3>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-neutral-400 shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>

        {/* Hindi Name */}
        <p className="text-xs text-purple-300 mb-2">{scheme.nameHi}</p>

        {/* Description */}
        <p className="text-xs text-neutral-300 line-clamp-2 mb-3">{scheme.description}</p>

        {/* Top Benefit */}
        <div className="text-xs bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 text-green-300 mb-3">
          ✓ {scheme.benefits[0]}
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-white/10 pt-3 mt-1 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Key Eligibility</p>
            <ul className="space-y-1">
              {scheme.eligibility.slice(0, 3).map((e, i) => (
                <li key={i} className="text-xs text-neutral-300 flex gap-1.5">
                  <span className="text-purple-400 shrink-0">•</span> {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Documents Needed</p>
            <div className="flex flex-wrap gap-1">
              {scheme.documents.slice(0, 4).map((d, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={scheme.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" /> Official Site
            </a>
            <span className="flex items-center gap-1 text-[10px] text-neutral-400">
              <Phone className="w-3 h-3" /> {scheme.helpline}
            </span>
          </div>
        </div>
      )}
    </GlowCard>
  );
}
