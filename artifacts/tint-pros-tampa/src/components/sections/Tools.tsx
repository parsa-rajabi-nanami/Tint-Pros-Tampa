import { SectionLabel } from '@/components/common/SectionLabel';
import { QuoteEstimator } from '@/components/interactive/QuoteEstimator';
import { VltShadeSimulator } from '@/components/interactive/VltShadeSimulator';

export function Tools() {
  return (
    <section id="tools" className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel light>Tools before you book</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div><h2 className="font-display text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[.87] tracking-[-.06em]">Make the<br /><span className="text-[#f5d644]">right call.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">Preview a shade and build a budget range before you call. The final recommendation and price always come from measured glass and an in-person conversation.</p></div>
          <div className="grid gap-5 xl:grid-cols-[.88fr_1.12fr]"><VltShadeSimulator /><QuoteEstimator /></div>
        </div>
      </div>
    </section>
  );
}
