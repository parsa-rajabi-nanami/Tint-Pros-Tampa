import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { serviceCards } from '@/data/site';

export function Services() {
  return (
    <section id="services" className="bg-[#f5f2eb] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="max-w-lg font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[.88] tracking-[-.06em]">Built for Florida<br /><span className="text-[#d22f25]">living.</span></h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-black/65 lg:justify-self-end">
            From your daily driver to your storefront, Tint Pros brings practical protection and a cleaner finish to the places that take the most sun. Mobile service comes to you throughout Tampa Bay.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.id} className={`service-card group overflow-hidden border border-black/10 bg-white ${index === 0 ? 'lg:translate-y-8' : index === 4 ? 'lg:-translate-y-4' : ''}`} data-testid={`card-service-${service.id}`}>
                <div className="relative h-56 overflow-hidden bg-[#d6d1c7]">
                  <img src={service.image} alt={service.alt} width="900" height="600" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 bg-[#111] px-3 py-2 text-[.64rem] font-bold uppercase tracking-[.14em] text-white"><Icon size={14} className="text-[#f5d644]" /> {service.kicker}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl leading-tight tracking-[-.03em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{service.copy}</p>
                  <a href="#quote" className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#d22f25] transition-colors group-hover:text-[#111]" data-testid={`link-service-quote-${service.id}`}>Request a quote <ArrowUpRight size={15} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
