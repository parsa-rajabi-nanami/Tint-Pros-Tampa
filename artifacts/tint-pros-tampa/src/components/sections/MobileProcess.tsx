import { CalendarClock } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { publicAsset } from '@/lib/assets';

const steps = [
  ['01', 'Tell us what needs a cooler, cleaner, or tougher finish.'],
  ['02', 'Pick a time and location that works for your day.'],
  ['03', 'Our team arrives ready with the right film and computer-cut technology.'],
];

export function MobileProcess() {
  return (
    <section className="bg-[#e8e4dc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionLabel>Mobile by design</SectionLabel>
          <h2 className="font-display text-[clamp(2.9rem,5.7vw,5.8rem)] leading-[.88] tracking-[-.06em]">The shop<br /><span className="text-[#d22f25]">comes to you.</span></h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/65">Convenience = We have mobile service that comes to you at any location. FREE service within Tampa Bay area.</p>
          <div className="mt-9 space-y-5">{steps.map(([number, copy]) => <div key={number} className="flex items-center gap-5 border-t border-black/15 pt-4"><span className="font-display text-2xl text-[#d22f25]">{number}</span><p className="max-w-md text-sm font-semibold leading-relaxed">{copy}</p></div>)}</div>
          <a href="#quote" className="focus-ring mt-9 inline-flex items-center gap-3 border border-[#111] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#111] transition-colors hover:bg-[#111] hover:text-white" data-testid="link-mobile-quote">Schedule an appointment <CalendarClock size={17} /></a>
        </div>
        <div className="order-1 relative lg:order-2">
          <div className="absolute -right-2 -top-4 hidden h-32 w-32 border-r-2 border-t-2 border-[#d22f25] sm:block" />
          <img src={publicAsset('/assets/mobile-service.png')} alt="Tint Pros installer applying window film inside a vehicle" width="998" height="642" loading="lazy" className="relative z-10 h-auto w-full object-cover grayscale-[15%]" />
          <div className="absolute -bottom-4 -left-4 z-20 bg-[#d22f25] px-5 py-4 text-white sm:-left-6"><p className="font-display text-xl">WE COME TO YOU</p><p className="mt-1 text-[.65rem] font-bold uppercase tracking-[.16em] text-white/75">Tampa Bay area</p></div>
        </div>
      </div>
    </section>
  );
}
