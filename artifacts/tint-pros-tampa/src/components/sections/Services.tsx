import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { serviceCards } from '@/data/site';

export function Services() {
  return (
    <section id="services" className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel light>Five ways to protect more</SectionLabel>
            <h2 className="max-w-xl font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[.88] tracking-[-.06em]">One mobile team.<br /><span className="text-cyan-300">Every surface.</span></h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/60 lg:justify-self-end">From your daily driver to a design-forward office, we bring premium film and finish work to the places that get the most Florida sun.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.id} className={`service-card group overflow-hidden border border-white/10 bg-slate-900 ${index === 0 ? 'lg:col-span-2' : ''}`} data-testid={`card-service-${service.id}`}>
                <div className={`relative overflow-hidden bg-slate-800 ${index === 0 ? 'h-64' : 'h-52'}`}>
                  <img src={service.image} alt={service.alt} width="900" height="600" loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2 text-sm font-semibold text-white"><Icon size={17} className="text-cyan-300" /> {service.kicker}</div>
                </div>
                <div className="flex min-h-52 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight tracking-[-.03em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{service.copy}</p>
                  <a href="#quote" className="focus-ring mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-6 text-sm font-bold text-cyan-300 transition-colors group-hover:text-white" data-testid={`link-service-quote-${service.id}`}>Get a project plan <ArrowUpRight size={15} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}