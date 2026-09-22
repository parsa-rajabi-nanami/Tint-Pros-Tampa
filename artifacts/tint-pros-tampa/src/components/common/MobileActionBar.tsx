import { MessageSquare, Phone, Zap } from 'lucide-react';
import { PHONE, SMS, TEL } from '@/data/site';

interface MobileActionBarProps {
  onQuote: () => void;
}

export function MobileActionBar({ onQuote }: MobileActionBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-slate-950/95 p-3 shadow-[0_-12px_30px_rgba(0,0,0,.35)] backdrop-blur-lg md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={TEL} className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg border border-white/15 text-[11px] font-bold text-white" data-testid="mobile-call"><Phone size={17} /> Call us</a>
        <a href={SMS} className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg bg-amber-300 text-[11px] font-bold text-slate-950" data-testid="mobile-text"><MessageSquare size={17} /> Text for fast quote</a>
        <button type="button" onClick={onQuote} className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg border border-cyan-300/50 text-[11px] font-bold text-cyan-200" data-testid="mobile-quick-quote"><Zap size={17} /> Quick quote</button>
      </div>
      <span className="sr-only">Call {PHONE}, text {PHONE}, or open the instant quote.</span>
    </div>
  );
}

