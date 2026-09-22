import { ArrowRight, CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/common/Header';
import { PHONE, SMS, TEL } from '@/data/site';
import { publicAsset } from '@/lib/assets';

const proofPoints = [
  '100% mobile service',
  'Computer-cut precision',
  '22+ years in Tampa Bay',
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-slate-950 text-white sm:min-h-[820px]">
      <div className="absolute inset-0 bg-cover bg-[center_45%] opacity-70" style={{ backgroundImage: `url("${publicAsset('/assets/hero.jpg')}")` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,.98)_0%,rgba(2,6,12,.82)_42%,rgba(2,6,12,.18)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-20" />
      <Header />
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 sm:min-h-[820px] sm:px-8 sm:pb-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="reveal-up mb-6 flex items-center gap-3 text-sm font-semibold tracking-[.12em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-300" />
            Tampa Bay mobile protection
          </div>
          <h1 className="reveal-up delay-1 max-w-3xl font-display text-[clamp(3.4rem,9vw,7.8rem)] leading-[.88] tracking-[-.075em] text-white">
            Protect the view.<br /><span className="text-cyan-300">Upgrade the drive.</span>
          </h1>
          <p className="reveal-up delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Luxury-grade window tint, PPF, wraps, and architectural film — installed at your home, office, or garage across Tampa Bay.
          </p>
          <div className="reveal-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={SMS} className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-4 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-1" data-testid="link-hero-text">
              <MessageSquare size={18} /> Text for a fast quote
            </a>
            <a href={TEL} className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200" data-testid="link-hero-call">
              <Phone size={17} /> Call {PHONE}
            </a>
          </div>
          <div className="reveal-up delay-3 mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/75">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" /> {point}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-slate-950/80 backdrop-blur-md before:pointer-events-none before:absolute before:inset-x-0 before:-top-32 before:h-32 before:bg-gradient-to-t before:from-slate-950/90 before:to-transparent before:content-[''] sm:before:hidden">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-5 text-sm text-white/70 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          <span className="inline-flex items-center gap-3"><ShieldCheck size={18} className="text-cyan-300" /> Lifetime transferable warranty</span>
          <span className="inline-flex items-center gap-3"><CheckCircle2 size={18} className="text-cyan-300" /> 500+ five-star reviews</span>
          <span className="hidden items-center gap-3 lg:inline-flex"><CheckCircle2 size={18} className="text-cyan-300" /> Zero razor blades on paint or glass</span>
          <a href="#services" className="focus-ring inline-flex items-center gap-2 font-semibold text-white hover:text-cyan-200">See every service <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
