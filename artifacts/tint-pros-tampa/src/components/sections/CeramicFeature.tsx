import { ArrowRight, CheckCircle2, ShieldCheck, Sun } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { publicAsset } from '@/lib/assets';

const benefits = [
  ['Heat control', 'Ceramic film helps turn Tampa sun into a cooler, calmer cabin.'],
  ['UV protection', 'Help protect skin, eyes, dashboards, leather, and upholstery.'],
  ['Glare reduction', 'See the road and your screens more comfortably during bright drives.'],
  ['Clean installation', 'Computer-cut patterns keep blades away from your vehicle paint and glass.'],
];

export function CeramicFeature() {
  return (
    <section id="why" className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
        <div className="relative overflow-hidden border border-white/10 bg-slate-900">
          <img src={publicAsset('/assets/ceramic.jpg')} alt="Vehicle interior showing a range of window tint shades" width="1035" height="408" loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6"><p className="font-display text-3xl leading-none text-cyan-300">Nano ceramic</p><p className="mt-2 text-sm text-white/70">The comfort upgrade for Florida roads</p></div>
        </div>
        <div>
          <SectionLabel light>Protection that feels different</SectionLabel>
          <h2 className="max-w-xl font-display text-[clamp(2.8rem,5.3vw,5.5rem)] leading-[.88] tracking-[-.06em]">The Florida sun<br /><span className="text-cyan-300">does not play.</span></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">Our nano-ceramic films are built for drivers who care about comfort, clarity, and the finish of the vehicle they worked hard to own.</p>
          <div className="mt-9 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2">
            {benefits.map(([title, copy]) => <div key={title} className="flex gap-3"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-slate-950"><CheckCircle2 size={14} /></span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/50">{copy}</p></div></div>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-4 text-sm font-semibold text-white/70"><span className="inline-flex items-center gap-2"><Sun size={16} className="text-amber-300" /> 99.9% UV protection</span><span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-amber-300" /> Transferable warranty</span></div>
          <a href="#tools" className="focus-ring mt-9 inline-flex min-h-11 items-center gap-3 rounded-full border border-cyan-300/60 px-6 py-3 text-sm font-bold text-cyan-200 transition-colors hover:bg-cyan-300 hover:text-slate-950" data-testid="link-ceramic-tools">Compare tint shades <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}