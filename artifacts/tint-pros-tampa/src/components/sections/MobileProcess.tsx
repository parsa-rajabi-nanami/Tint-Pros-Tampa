import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { publicAsset } from '@/lib/assets';

const steps = [
  ['01', 'Tell us what you want to protect.'],
  ['02', 'Text your vehicle or project details.'],
  ['03', 'We bring the right film to your home or office.'],
];

export function MobileProcess() {
  return (
    <section className="bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionLabel light>Mobile by design</SectionLabel>
          <h2 className="font-display text-[clamp(2.9rem,5.7vw,5.8rem)] leading-[.88] tracking-[-.06em]">The shop<br /><span className="text-cyan-300">comes to you.</span></h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/60">No waiting room. No hauling a finished project across town. We install across Tampa Bay at a location that works for you.</p>
          <div className="mt-9 space-y-5">{steps.map(([number, copy]) => <div key={number} className="flex items-center gap-5 border-t border-white/15 pt-4"><span className="font-display text-2xl text-cyan-300">{number}</span><p className="max-w-md text-sm font-semibold leading-relaxed">{copy}</p></div>)}</div>
          <a href="#quote" className="focus-ring mt-9 inline-flex min-h-11 items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5" data-testid="link-mobile-quote">Start with a fast quote <ArrowRight size={17} /></a>
        </div>
        <div className="relative">
          <div className="absolute -right-2 -top-4 hidden h-32 w-32 border-r-2 border-t-2 border-cyan-300 sm:block" />
          <img src={publicAsset('/assets/mobile-service.png')} alt="Tint Pros installer applying window film inside a vehicle" width="998" height="642" loading="lazy" className="relative z-10 h-auto w-full border border-white/10 object-cover" />
          <div className="absolute -bottom-4 -left-4 z-20 border border-cyan-300/50 bg-slate-950 px-5 py-4 sm:-left-6"><p className="font-display text-xl text-cyan-300">We come to you</p><p className="mt-1 text-sm text-white/60">Tampa Bay area</p></div>
        </div>
      </div>
    </section>
  );
}