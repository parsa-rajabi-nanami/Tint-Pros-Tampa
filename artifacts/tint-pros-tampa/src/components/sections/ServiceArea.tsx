import { Clock3, MapPin, Phone } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { serviceAreas, TEL } from '@/data/site';

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#f5f2eb] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><SectionLabel>Local coverage</SectionLabel><h2 className="font-display text-[clamp(2.8rem,6vw,5.7rem)] leading-[.86] tracking-[-.06em]">Tampa Bay,<br /><span className="text-[#d22f25]">we're moving.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-black/60">Tint Pros of Tampa Florida services these surrounding areas and surrounding cities. Not sure if you're in range? Call or text us.</p><a href={TEL} className="focus-ring mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[.1em] text-[#d22f25]" data-testid="link-area-call">Check your location <Phone size={16} /></a></div>
        <div className="border-t border-black/15 pt-7"><div className="mb-8 flex items-center justify-between"><div className="flex items-center gap-3"><MapPin size={20} className="text-[#d22f25]" /><span className="font-display text-xl tracking-[-.03em]">Areas we service</span></div><span className="text-xs font-bold uppercase tracking-[.12em] text-black/45">and surrounding cities</span></div><div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">{serviceAreas.map((area) => <span key={area} className="flex items-center gap-2 text-sm font-semibold text-black/70"><span className="h-1.5 w-1.5 bg-[#d22f25]" />{area}</span>)}</div><div className="mt-10 border border-black/10 bg-white p-5"><div className="flex items-start gap-4"><Clock3 className="mt-0.5 text-[#d22f25]" size={20} /><div><p className="font-bold">Monday - Saturday: 9AM–6PM</p><p className="mt-1 text-sm text-black/55">Sunday: Closed</p></div></div></div></div>
      </div>
    </section>
  );
}
