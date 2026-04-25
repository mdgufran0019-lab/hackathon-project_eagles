import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(139,92,246,0.15),transparent)]',
        className,
      )}
      {...props}
    >
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="relative grid grid-cols-1 border-x border-white/10 md:grid-cols-4 md:divide-x md:divide-white/10">
          <div>
            <SocialCard title="GitHub" href="#" />
            <LinksGroup
              title="Platform"
              links={[
                { title: 'How It Works', href: '#features' },
                { title: 'Schemes Database', href: '#schemes' },
                { title: 'AI Chat', href: '#chat' },
                { title: 'Voice Input', href: '#chat' },
                { title: 'Languages', href: '#features' },
              ]}
            />
          </div>
          <div>
            <SocialCard title="Documentation" href="#" />
            <LinksGroup
              title="Government"
              links={[
                { title: 'MyScheme Portal', href: 'https://myscheme.gov.in' },
                { title: 'India.gov.in', href: 'https://india.gov.in' },
                { title: 'DigiLocker', href: 'https://digilocker.gov.in' },
                { title: 'UMANG App', href: 'https://umang.gov.in' },
                { title: 'eDistrict', href: '#' },
              ]}
            />
          </div>
          <div>
            <SocialCard title="API Reference" href="#" />
            <LinksGroup
              title="Technology"
              links={[
                { title: 'RAG Architecture', href: '#' },
                { title: 'PII Protection', href: '#' },
                { title: 'OpenAI Integration', href: '#' },
                { title: 'Multilingual NLP', href: '#' },
                { title: 'Voice ASR', href: '#' },
              ]}
            />
          </div>
          <div>
            <SocialCard title="Contact Us" href="#" />
            <LinksGroup
              title="Legal"
              links={[
                { title: 'Privacy Policy', href: '#' },
                { title: 'Terms of Use', href: '#' },
                { title: 'Data Protection', href: '#' },
                { title: 'Accessibility', href: '#' },
                { title: 'Open Source', href: '#' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-white/10 p-3">
        <p className="text-neutral-400 text-xs">
          © {new Date().getFullYear()} NagrikMitra — Multilingual Civic Services Copilot. Built for Hackathon 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

interface LinksGroupProps {
  title: string;
  links: { title: string; href: string }[];
}

function LinksGroup({ title, links }: LinksGroupProps) {
  return (
    <div className="p-2">
      <h3 className="text-white/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.href} className="text-neutral-400 hover:text-white text-xs transition-colors">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialCard({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      className="hover:bg-white/5 flex items-center justify-between border-t border-b border-white/10 p-2 text-sm md:border-t-0 text-white/80 hover:text-white transition-colors"
    >
      <span className="font-medium">{title}</span>
      <ArrowRight className="h-4 w-4 transition-colors" />
    </a>
  );
}
