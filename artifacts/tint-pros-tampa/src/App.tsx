import { useEffect } from 'react';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { Footer } from '@/components/common/Footer';
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

const pageDescription = 'Professional mobile window tinting, PPF, and vinyl wraps for auto, residential, commercial, and marine customers across Tampa Bay.';

function Home() {
  useEffect(() => {
    document.title = 'Tint Pros Tampa | Ceramic Window Tinting & Protection Specialists';
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  }, []);

  return (
    <div className="site-noise min-h-[100dvh] overflow-hidden">
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
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Home />;
}
