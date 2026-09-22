import { ArrowRight, Check } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { publicAsset } from '@/lib/assets';

const benefits = [
  ['Less heat', 'Ceramic film can decrease the inside vehicle temperature on hot summer days.'],
  ['Less glare', 'Reduce dangerous glare from the sun and headlights on the road.'],
  ['More protection', 'Help protect your interior from fading, cracking, and deteriorating.'],
  ['Clean cuts', "Our computer-cut technology means we don't cut film on vehicles or paint with a knife."],
];

export function CeramicFeature() {
  return (
    <section id="why" className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
        <div className="relative overflow-hidden">
          <img src={publicAsset('/assets/ceramic.jpg')} alt="Vehicle interior showing a range of window tint shades" width="1035" height="408" loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-[#f5d644] px-5 py-4 text-[#111]"><p className="font-display text-2xl leading-none">NANO CERAMIC</p><p className="mt-1 text-xs font-bold uppercase tracking-[.12em]">The comfort upgrade</p></div>
        </div>
        <div>
          <SectionLabel light>Why ceramic</SectionLabel>
          <h2 className="max-w-xl font-display text-[clamp(2.7rem,5.3vw,5.4rem)] leading-[.88] tracking-[-.06em]">The Florida sun<br /><span className="text-[#d22f25]">does not play.</span></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">NANO CERAMIC WINDOW TINT IS THE BEST QUALITY FILM ON THE MARKET FOR YOUR CAR. IT HAS THE HIGHEST HEAT PROTECTION FOR THE SKIN AND EYES.</p>
          <div className="mt-9 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2">
            {benefits.map(([title, copy]) => <div key={title} className="flex gap-3"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-[#d22f25] text-[#f5d644]"><Check size={14} /></span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/50">{copy}</p></div></div>)}
          </div>
          <a href="#tools" className="focus-ring mt-9 inline-flex items-center gap-3 bg-[#f5d644] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#111] transition-transform hover:-translate-y-1" data-testid="link-ceramic-quote">Explore tint tools <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
