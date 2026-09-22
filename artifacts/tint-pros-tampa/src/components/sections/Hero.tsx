import { ArrowRight, Check, Phone, Zap } from 'lucide-react';
import { Header } from '@/components/common/Header';
import { PHONE, TEL } from '@/data/site';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[710px] overflow-hidden bg-[#111] text-white sm:min-h-[760px]">
      <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-[center_60%] opacity-75" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,.96)_0%,rgba(8,8,8,.75)_39%,rgba(8,8,8,.15)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <Header />
      <div className="relative mx-auto flex min-h-[710px] max-w-[1440px] items-end px-5 pb-16 pt-36 sm:min-h-[760px] sm:px-8 sm:pb-24 lg:px-12">
        <div className="max-w-3xl">
          <div className="reveal-up mb-6 flex flex-wrap items-center gap-3 text-[.7rem] font-bold uppercase tracking-[.18em] text-[#f5d644]">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d22f25]" /> Tampa Bay mobile service</span>
            <span className="text-white/45">/</span>
            <span>Serving drivers, homes & businesses</span>
          </div>
          <h1 className="reveal-up delay-1 max-w-3xl font-display text-[clamp(3.2rem,9vw,7.8rem)] leading-[.87] tracking-[-.07em] text-white">
            Stay cooler.<br /><span className="text-[#f5d644]">Protect more.</span>
          </h1>
          <p className="reveal-up delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            PROFESSIONAL MOBILE window tinting of Tampa bay. STAY COOLER IN MINUTES
          </p>
          <div className="reveal-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={TEL} className="focus-ring inline-flex items-center justify-center gap-3 bg-[#d22f25] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-1" data-testid="link-hero-call">
              <Phone size={17} /> Call or text {PHONE}
            </a>
            <a href="#services" className="focus-ring inline-flex items-center justify-center gap-3 border border-white/45 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition-colors hover:border-white hover:bg-white/10" data-testid="link-hero-services">
              Explore services <ArrowRight size={17} />
            </a>
          </div>
          <div className="reveal-up delay-3 mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[.68rem] font-bold uppercase tracking-[.11em] text-white/75">
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> Lifetime warranty claim</span>
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> Same-day service available</span>
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> 500+ happy reviews</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden w-[42%] border-l border-t border-white/15 bg-[#111]/75 px-8 py-7 backdrop-blur-sm lg:block">
        <div className="flex items-start gap-5">
          <Zap className="mt-1 text-[#f5d644]" size={22} />
          <div>
            <p className="font-display text-xl leading-none">AUTO · RESIDENTIAL</p>
            <p className="mt-2 font-display text-xl leading-none text-[#d22f25]">COMMERCIAL · MARINE</p>
            <p className="mt-3 text-sm text-white/60">One mobile team for the places you move through.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
