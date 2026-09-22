import { CheckCircle2, ExternalLink, Scale, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';

const statuteUrl = 'https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.2953.html';

export function FloridaTintGuide() {
  return (
    <section id="florida-guide" className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div><SectionLabel light>Florida shade guide</SectionLabel><h2 className="font-display text-[clamp(2.8rem,5.5vw,5.7rem)] leading-[.87] tracking-[-.06em]">Shade is<br /><span className="text-cyan-300">not one-size-fits-all.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">Use the simulator as a starting point, then let the installer confirm the measured glass, film, and correct placement for your vehicle.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <GuideCard icon={Scale} title="Front side windows" copy="Florida's front-side limit is 28% VLT. In practice, 35% and 50% are the popular street-legal starting points for a balanced look." />
          <GuideCard icon={ShieldCheck} title="Rear windows" copy="Rear glass has different rules. 15% and 20% are commonly selected for back-window privacy, subject to vehicle class and measured glass." />
          <div className="border border-white/10 bg-slate-900 p-6 sm:col-span-2"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={19} /><div><p className="font-bold">5% is limo, off-road, and show use.</p><p className="mt-2 text-sm leading-relaxed text-white/55">This guide is general information, not legal advice. Factory glass, existing tint, reflectance, exemptions, and statute updates can affect compliance. Ask us to measure the specific glass before installation.</p><a href={statuteUrl} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-300">Read Florida Statute 316.2953 <ExternalLink size={14} /></a></div></div></div>
        </div>
      </div>
    </section>
  );
}

function GuideCard({ icon: Icon, title, copy }: { icon: typeof Scale; title: string; copy: string }) {
  return <article className="border border-white/10 bg-slate-900 p-6"><Icon size={24} className="text-cyan-300" /><h3 className="mt-7 font-display text-2xl tracking-[-.03em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{copy}</p></article>;
}