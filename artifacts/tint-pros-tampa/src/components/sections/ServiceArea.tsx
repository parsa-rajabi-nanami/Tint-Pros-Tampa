import { ChevronDown, MapPin, Phone } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { PHONE, TEL, serviceAreas, serviceZipCodes } from '@/data/site';

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><SectionLabel light>Local coverage</SectionLabel><h2 className="font-display text-[clamp(2.8rem,6vw,5.7rem)] leading-[.86] tracking-[-.06em]">Tampa Bay,<br /><span className="text-cyan-300">we move.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">Mobile installation is available across Hillsborough and Pinellas County. Tell us your ZIP code and we will confirm coverage before we plan the job.</p><a href={TEL} className="focus-ring mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-bold text-cyan-300" data-testid="link-area-call"><Phone size={17} /> Call {PHONE}</a></div>
        <div className="border-t border-white/15 pt-7"><div className="mb-8 flex items-center gap-3"><MapPin size={20} className="text-cyan-300" /><div><h3 className="font-display text-2xl tracking-[-.03em]">Areas we serve</h3><p className="mt-1 text-sm text-white/50">And nearby cities across Tampa Bay</p></div></div><div className="flex flex-wrap gap-2">{serviceAreas.map((area) => <span key={area} className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/75">{area}</span>)}</div><details className="mt-8 border border-white/10 bg-slate-950 p-5"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-white marker:hidden"><span>View Hillsborough and Pinellas ZIP codes, 33601–33694</span><ChevronDown size={18} className="text-cyan-300 transition-transform" /></summary><div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">{serviceZipCodes.map((zip) => <span key={zip} className="rounded-full border border-cyan-300/25 bg-cyan-300/5 px-3 py-2 text-xs font-semibold text-cyan-100">{zip}</span>)}</div></details></div>
      </div>
    </section>
  );
}