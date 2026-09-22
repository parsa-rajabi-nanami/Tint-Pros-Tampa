import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Footer } from '@/components/common/Footer';
import { QuickQuote } from '@/components/interactive/QuickQuote';
import { CeramicFeature } from '@/components/sections/CeramicFeature';
import { FloridaTintGuide } from '@/components/sections/FloridaTintGuide';
import { Hero } from '@/components/sections/Hero';
import { MobileProcess } from '@/components/sections/MobileProcess';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { Services } from '@/components/sections/Services';
import { Ticker } from '@/components/sections/Ticker';
import { Tools } from '@/components/sections/Tools';

const pageDescription = 'Premium mobile window tinting, PPF, wraps, and architectural film for drivers, homeowners, and businesses across Tampa Bay.';

function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.title = 'Tint Pros Tampa | Ceramic Window Tinting & Protection Specialists';
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  }, []);

  useEffect(() => {
    document.body.style.overflow = quoteOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [quoteOpen]);

  return (
    <div className="site-noise min-h-[100dvh] overflow-x-clip">
      <main>
        <Hero />
        <Ticker />
        <Services />
        <CeramicFeature />
        <ProofStrip />
        <MobileProcess />
        <Tools />
        <FloridaTintGuide />
        <ServiceArea />
        <QuoteSection onQuickQuote={() => setQuoteOpen(true)} />
      </main>
      <Footer />
      {quoteOpen ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="quick-quote-title">
          <div className="relative max-h-[92dvh] w-full max-w-xl overflow-y-auto border border-white/15 bg-slate-900 shadow-2xl">
            <div className="flex justify-end px-5 pt-5"><button type="button" onClick={() => setQuoteOpen(false)} className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white" aria-label="Close quick quote"><X size={20} /></button></div>
            <div id="quick-quote-title" className="sr-only">Quick quote</div>
            <QuickQuote variant="modal" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function App() {
  return <Home />;
}