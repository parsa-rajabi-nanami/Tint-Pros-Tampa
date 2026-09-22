import { SectionLabel } from '@/components/common/SectionLabel';
import { TintSimulator } from '@/components/interactive/TintSimulator';

export function Tools() {
  return (
    <section id="tools" className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel light>Choose your shade</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div><h2 className="font-display text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[.87] tracking-[-.06em]">Comfort is<br /><span className="text-cyan-300">personal.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">Use the visual guide to compare darkness, heat rejection, UV protection, and Florida shade notes before you text us.</p></div>
          <TintSimulator />
        </div>
      </div>
    </section>
  );
}