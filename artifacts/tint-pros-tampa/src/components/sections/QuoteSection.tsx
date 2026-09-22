import { MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { MobileActionBar } from '@/components/common/MobileActionBar';
import { QuickQuote } from '@/components/interactive/QuickQuote';
import { PHONE, SMS, TEL } from '@/data/site';

interface QuoteSectionProps {
  onQuickQuote: () => void;
}

export function QuoteSection({ onQuickQuote }: QuoteSectionProps) {
  return (
    <section id="quote" className="bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-20">
        <div>
          <SectionLabel light>Start with less friction</SectionLabel>
          <h2 className="font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.85] tracking-[-.065em]">Get a<br /><span className="text-cyan-300">fast quote.</span></h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">Tell us what you want to protect, share your ZIP code, and we will take the next step from there. No street address or appointment time upfront.</p>
          <div className="mt-9 space-y-4"><a href={TEL} className="focus-ring flex min-h-11 w-fit items-center gap-3 text-lg font-bold text-white" data-testid="link-quote-call"><Phone className="text-cyan-300" size={20} /> {PHONE}</a><a href={SMS} className="focus-ring flex min-h-11 w-fit items-center gap-3 text-sm font-bold text-amber-300" data-testid="link-quote-text"><MessageSquare size={18} /> Text for a fast quote</a></div>
          <div className="mt-12 flex max-w-sm gap-3 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/50"><ShieldCheck className="shrink-0 text-cyan-300" size={19} /><span>Lifetime transferable warranty on qualifying auto and residential films.</span></div>
        </div>
        <QuickQuote variant="section" />
      </div>
      <div className="mt-8 text-center text-sm text-white/45 lg:hidden">Need help choosing? Call {PHONE} and we will guide you.</div>
      <MobileActionBar onQuote={onQuickQuote} />
    </section>
  );
}