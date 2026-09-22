import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  House,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Waves,
  X,
  Zap,
} from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();
const PHONE = '(813) 787-5327';
const TEL = 'tel:+18137875327';
const SMS = 'sms:+18137875327';

type QuoteForm = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  address: string;
  appointment: string;
};

type FormErrors = Partial<Record<keyof QuoteForm, string>>;

const initialForm: QuoteForm = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  address: '',
  appointment: '',
};

const serviceCards = [
  {
    id: 'auto',
    icon: CarFront,
    title: 'Auto window tinting',
    copy: 'We offer mobile auto window tinting installing the best film in Tampa Bay area for the last 22 years. Ask about our ceramic films.',
    image: '/assets/auto-tint.png',
    alt: 'Black sedan with dark ceramic window tint',
    kicker: 'Cooler commutes',
  },
  {
    id: 'residential',
    icon: House,
    title: 'Residential window tinting',
    copy: 'Window tinting your home saves you money on your electric bill, keeping the home cooler and creating privacy.',
    image: '/assets/residential.png',
    alt: 'Home with large tinted arched windows',
    kicker: 'Comfort at home',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial window tinting',
    copy: "Tint Pro's Tampa offers the best and most reliable flat glass window film such as different shades, heat rejection, blackout film, white frost, and decorative films.",
    image: '/assets/commercial.png',
    alt: 'Commercial building with reflective window film',
    kicker: 'Better workspaces',
  },
  {
    id: 'ppf',
    icon: ShieldCheck,
    title: 'Paint protection film',
    copy: "Tint Pro's offers a paint protection film that protects the vehicles paint from every day rocks, road debris, chips, scratches and insects that can leave marks in the paint.",
    image: '/assets/ppf.png',
    alt: 'Installer applying paint protection film to a vehicle',
    kicker: 'Keep the finish',
  },
  {
    id: 'wraps',
    icon: Scissors,
    title: 'Vinyl wraps / color change',
    copy: 'Tint Pros of Tampa Bay specializes in vinyl car wrap designs, advertisements on vehicles, with optional color changes and variations for private or commercial business purposes.',
    image: '/assets/wrap.png',
    alt: 'Purple color-change vinyl wrap on a luxury sedan',
    kicker: 'Make it yours',
  },
  {
    id: 'marine',
    icon: Waves,
    title: 'Marine / boat film application',
    copy: 'Computer Cut System is available for boats, cars, trucks, commercial vans, and box trucks for advertisements.',
    image: '/assets/hero.jpg',
    alt: 'Tint Pros mobile service vehicle at a Tampa Bay home',
    kicker: 'On the water',
  },
];

const serviceAreas = [
  'Tampa',
  'Brandon',
  'Clearwater',
  'Land O Lakes',
  'Largo',
  'Odessa',
  'New Tampa',
  'Oldsmar',
  'Palm Harbor',
  'Pinellas Park',
  'St.Pete',
  "Town'n'Country",
  'Safety Harbor',
  'Dunedin',
  'Lutz',
  'New Port Richey',
  'Riverview',
  'Temple Terrace',
  'Valrico',
  'Tampa Palms',
  'Wesley Chapel',
  'Tarpon Springs',
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`focus-ring flex items-center gap-2 ${light ? 'text-white' : 'text-[#111]'} no-underline`} data-testid="link-logo">
      <span className="font-display text-[1.15rem] leading-none tracking-[-.05em]">TINT PROS</span>
      <span className="mt-0.5 bg-[#d22f25] px-1.5 py-1 font-display text-[.55rem] leading-none tracking-[.12em] text-white">TAMPA</span>
    </a>
  );
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-4 flex items-center gap-3 text-[.7rem] font-bold uppercase tracking-[.2em] ${light ? 'text-[#f5d644]' : 'text-[#d22f25]'}`}>
      <span className="h-px w-8 bg-current" />
      <span>{children}</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ['Services', '#services'],
    ['Why Tint Pros', '#why'],
    ['Service area', '#service-area'],
    ['Quote', '#quote'],
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <BrandMark light />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="focus-ring text-[.74rem] font-bold uppercase tracking-[.12em] text-white/75 transition-colors hover:text-white" data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href={TEL} className="focus-ring flex items-center gap-2 text-sm font-bold text-white" data-testid="link-header-call">
            <Phone size={15} strokeWidth={2.4} /> {PHONE}
          </a>
          <a href="#quote" className="focus-ring flex items-center gap-2 bg-[#f5d644] px-4 py-3 text-[.7rem] font-bold uppercase tracking-[.12em] text-[#111] transition-transform hover:-translate-y-0.5" data-testid="link-header-quote">
            Get a free quote <ArrowUpRight size={15} />
          </a>
        </div>
        <button type="button" onClick={() => setMenuOpen((value) => !value)} className="focus-ring flex h-11 w-11 items-center justify-center border border-white/35 text-white md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mx-4 border border-white/20 bg-[#151515]/95 p-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="focus-ring flex items-center justify-between border-b border-white/10 px-3 py-4 text-sm font-bold uppercase tracking-[.12em] text-white" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>
                {label} <ChevronRight size={16} className="text-[#f5d644]" />
              </a>
            ))}
            <a href={TEL} onClick={() => setMenuOpen(false)} className="focus-ring mt-3 flex items-center justify-center gap-2 bg-[#d22f25] px-3 py-4 text-sm font-bold text-white" data-testid="link-mobile-call">
              <Phone size={16} /> Call {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[710px] overflow-hidden bg-[#111] text-white sm:min-h-[760px]">
      <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-[center_60%] opacity-75" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,.96)_0%,rgba(8,8,8,.75)_39%,rgba(8,8,8,.15)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <Header />
      <div className="relative mx-auto flex min-h-[710px] max-w-[1440px] items-end px-5 pb-16 pt-36 sm:min-h-[760px] sm:px-8 sm:pb-24 lg:px-12">
        <div className="max-w-3xl">
          <div className="reveal-up mb-6 flex flex-wrap items-center gap-3 text-[.7rem] font-bold uppercase tracking-[.18em] text-[#f5d644]">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d22f25]" /> Tampa Bay mobile service</span>
            <span className="text-white/45">/</span>
            <span>Serving drivers, homes & businesses</span>
          </div>
          <h1 className="reveal-up delay-1 max-w-3xl font-display text-[clamp(3.2rem,9vw,7.8rem)] leading-[.87] tracking-[-.07em] text-white">
            Stay cooler.<br /><span className="text-[#f5d644]">Protect more.</span>
          </h1>
          <p className="reveal-up delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            PROFESSIONAL MOBILE window tinting of Tampa bay. STAY COOLER IN MINUTES
          </p>
          <div className="reveal-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={TEL} className="focus-ring inline-flex items-center justify-center gap-3 bg-[#d22f25] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-1" data-testid="link-hero-call">
              <Phone size={17} /> Call or text {PHONE}
            </a>
            <a href="#services" className="focus-ring inline-flex items-center justify-center gap-3 border border-white/45 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition-colors hover:border-white hover:bg-white/10" data-testid="link-hero-services">
              Explore services <ArrowRight size={17} />
            </a>
          </div>
          <div className="reveal-up delay-3 mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[.68rem] font-bold uppercase tracking-[.11em] text-white/75">
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> Lifetime warranty claim</span>
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> Same-day service available</span>
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#f5d644]" /> 500+ happy reviews</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden w-[42%] border-l border-t border-white/15 bg-[#111]/75 px-8 py-7 backdrop-blur-sm lg:block">
        <div className="flex items-start gap-5">
          <Zap className="mt-1 text-[#f5d644]" size={22} />
          <div>
            <p className="font-display text-xl leading-none">AUTO · RESIDENTIAL</p>
            <p className="mt-2 font-display text-xl leading-none text-[#d22f25]">COMMERCIAL · MARINE</p>
            <p className="mt-3 text-sm text-white/60">One mobile team for the places you move through.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ['BLOCK HEAT', 'REDUCE GLARE', 'PROTECT YOUR INTERIOR', 'COMPUTER-CUT INSTALLATION', 'MOBILE SERVICE'];
  return (
    <div className="overflow-hidden bg-[#d22f25] py-4 text-white" aria-label="Service highlights">
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="mx-5 flex items-center gap-5 whitespace-nowrap font-display text-[.74rem] tracking-[.08em] sm:mx-8 sm:text-sm">
            {item} <span className="text-[#f5d644]" aria-hidden="true">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
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
                  <div className="absolute left-4 top-4 flex items-center gap-2 bg-[#111] px-3 py-2 text-[.64rem] font-bold uppercase tracking-[.14em] text-white">
                    <Icon size={14} className="text-[#f5d644]" /> {service.kicker}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl leading-tight tracking-[-.03em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{service.copy}</p>
                  <a href="#quote" className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#d22f25] transition-colors group-hover:text-[#111]" data-testid={`link-service-quote-${service.id}`}>
                    Request a quote <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CeramicFeature() {
  return (
    <section id="why" className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
        <div className="relative overflow-hidden">
          <img src="/assets/ceramic.jpg" alt="Vehicle interior showing a range of window tint shades" width="1024" height="512" loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-[#f5d644] px-5 py-4 text-[#111]">
            <p className="font-display text-2xl leading-none">NANO CERAMIC</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[.12em]">The comfort upgrade</p>
          </div>
        </div>
        <div>
          <SectionLabel light>Why ceramic</SectionLabel>
          <h2 className="max-w-xl font-display text-[clamp(2.7rem,5.3vw,5.4rem)] leading-[.88] tracking-[-.06em]">The Florida sun<br /><span className="text-[#d22f25]">does not play.</span></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            NANO CERAMIC WINDOW TINT IS THE BEST QUALITY FILM ON THE MARKET FOR YOUR CAR. IT HAS THE HIGHEST HEAT PROTECTION FOR THE SKIN AND EYES.
          </p>
          <div className="mt-9 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2">
            {[
              ['Less heat', 'Ceramic film can decrease the inside vehicle temperature on hot summer days.'],
              ['Less glare', 'Reduce dangerous glare from the sun and headlights on the road.'],
              ['More protection', 'Help protect your interior from fading, cracking, and deteriorating.'],
              ['Clean cuts', "Our computer-cut technology means we don't cut film on vehicles or paint with a knife."],
            ].map(([title, copy]) => (
              <div key={title} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-[#d22f25] text-[#f5d644]"><Check size={14} /></span>
                <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/50">{copy}</p></div>
              </div>
            ))}
          </div>
          <a href="#quote" className="focus-ring mt-9 inline-flex items-center gap-3 bg-[#f5d644] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#111] transition-transform hover:-translate-y-1" data-testid="link-ceramic-quote">
            Ask about nano ceramic <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="bg-[#f5d644] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:items-center">
        <div>
          <SectionLabel>Why customers choose us</SectionLabel>
          <h2 className="max-w-md font-display text-3xl leading-[.95] tracking-[-.04em] sm:text-4xl">Customer service and quality. No runaround.</h2>
        </div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">22</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">years tinting cars</p></div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">500+</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">happy reviews</p></div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">FREE</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">service within Tampa Bay</p></div>
      </div>
    </section>
  );
}

function MobileProcess() {
  return (
    <section className="bg-[#e8e4dc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionLabel>Mobile by design</SectionLabel>
          <h2 className="font-display text-[clamp(2.9rem,5.7vw,5.8rem)] leading-[.88] tracking-[-.06em]">The shop<br /><span className="text-[#d22f25]">comes to you.</span></h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/65">
            Convenience = We have mobile service that comes to you at any location. FREE service within Tampa Bay area.
          </p>
          <div className="mt-9 space-y-5">
            {[
              ['01', 'Tell us what needs a cooler, cleaner, or tougher finish.'],
              ['02', 'Pick a time and location that works for your day.'],
              ['03', 'Our team arrives ready with the right film and computer-cut technology.'],
            ].map(([number, copy]) => (
              <div key={number} className="flex items-center gap-5 border-t border-black/15 pt-4">
                <span className="font-display text-2xl text-[#d22f25]">{number}</span>
                <p className="max-w-md text-sm font-semibold leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
          <a href="#quote" className="focus-ring mt-9 inline-flex items-center gap-3 border border-[#111] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#111] transition-colors hover:bg-[#111] hover:text-white" data-testid="link-mobile-quote">
            Schedule an appointment <CalendarClock size={17} />
          </a>
        </div>
        <div className="order-1 relative lg:order-2">
          <div className="absolute -right-2 -top-4 hidden h-32 w-32 border-r-2 border-t-2 border-[#d22f25] sm:block" />
          <img src="/assets/mobile-service.png" alt="Tint Pros installer applying window film inside a vehicle" width="998" height="646" loading="lazy" className="relative z-10 h-auto w-full object-cover grayscale-[15%]" />
          <div className="absolute -bottom-4 -left-4 z-20 bg-[#d22f25] px-5 py-4 text-white sm:-left-6"><p className="font-display text-xl">WE COME TO YOU</p><p className="mt-1 text-[.65rem] font-bold uppercase tracking-[.16em] text-white/75">Tampa Bay area</p></div>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#f5f2eb] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionLabel>Local coverage</SectionLabel>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.7rem)] leading-[.86] tracking-[-.06em]">Tampa Bay,<br /><span className="text-[#d22f25]">we're moving.</span></h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-black/60">
            Tint Pros of Tampa Florida services these surrounding areas and surrounding cities. Not sure if you're in range? Call or text us.
          </p>
          <a href={TEL} className="focus-ring mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[.1em] text-[#d22f25]" data-testid="link-area-call">
            Check your location <Phone size={16} />
          </a>
        </div>
        <div className="border-t border-black/15 pt-7">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3"><MapPin size={20} className="text-[#d22f25]" /><span className="font-display text-xl tracking-[-.03em]">Areas we service</span></div>
            <span className="text-xs font-bold uppercase tracking-[.12em] text-black/45">and surrounding cities</span>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">
            {serviceAreas.map((area) => <span key={area} className="flex items-center gap-2 text-sm font-semibold text-black/70"><span className="h-1.5 w-1.5 bg-[#d22f25]" />{area}</span>)}
          </div>
          <div className="mt-10 border border-black/10 bg-white p-5">
            <div className="flex items-start gap-4"><Clock3 className="mt-0.5 text-[#d22f25]" size={20} /><div><p className="font-bold">Monday - Saturday: 9AM–6PM</p><p className="mt-1 text-sm text-black/55">Sunday: Closed</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof QuoteForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const required: Array<keyof QuoteForm> = ['name', 'email', 'phone', 'address'];
    const nextErrors: FormErrors = {};
    required.forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = 'This field is required.';
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fieldClass = (field: keyof QuoteForm) => `focus-ring mt-2 w-full border bg-white px-4 py-3.5 text-sm text-[#111] outline-none transition-colors placeholder:text-black/35 ${errors[field] ? 'border-[#d22f25]' : 'border-black/15 focus:border-[#d22f25]'}`;

  return (
    <section id="quote" className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionLabel light>Start here</SectionLabel>
          <h2 className="font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.85] tracking-[-.065em]">Get a<br /><span className="text-[#f5d644]">free quote.</span></h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">To set up a window tinting service consultation, please contact us or text us at 813-787-5327 at your convenience. We look forward to hearing from you and meeting you soon.</p>
          <div className="mt-9 space-y-4">
            <a href={TEL} className="focus-ring flex w-fit items-center gap-3 text-lg font-bold text-white" data-testid="link-quote-call"><Phone className="text-[#f5d644]" size={20} /> {PHONE}</a>
            <a href={SMS} className="focus-ring flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[.1em] text-[#f5d644]" data-testid="link-quote-text"><MessageSquare size={18} /> Text for a free quote</a>
          </div>
          <div className="mt-12 flex max-w-sm gap-3 border-t border-white/15 pt-5 text-sm text-white/55"><ShieldCheck className="shrink-0 text-[#d22f25]" size={19} /><span>Lifetime warranty claim on our auto films and residential films.</span></div>
        </div>
        <div className="bg-[#f5f2eb] p-5 text-[#111] sm:p-8 lg:p-10">
          {submitted ? (
            <div className="flex min-h-[430px] flex-col items-start justify-center">
              <div className="flex h-14 w-14 items-center justify-center bg-[#d22f25] text-white"><Check size={28} /></div>
              <h3 className="mt-7 font-display text-4xl leading-none tracking-[-.05em]">You're on the list.</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-black/60">Thanks, {form.name.split(' ')[0] || 'there'}. Your request is ready to review. For the fastest response, call or text {PHONE}.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={TEL} className="focus-ring inline-flex items-center gap-2 bg-[#d22f25] px-5 py-3 text-sm font-bold text-white" data-testid="link-success-call"><Phone size={15} /> Call now</a>
                <button type="button" onClick={() => { setForm(initialForm); setSubmitted(false); }} className="focus-ring border border-black/20 px-5 py-3 text-sm font-bold" data-testid="button-new-quote">Send another request</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-black/10 pb-5">
                <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d22f25]">Schedule an appointment</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">Tell us what you need.</h3></div>
                <Send className="hidden text-[#d22f25] sm:block" size={27} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold uppercase tracking-[.11em]">Name*<input name="Name*" value={form.name} onChange={(event) => updateField('name', event.target.value)} className={fieldClass('name')} placeholder="Your name" aria-invalid={Boolean(errors.name)} data-testid="input-name" />{errors.name && <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-[#d22f25]">{errors.name}</span>}</label>
                <label className="text-xs font-bold uppercase tracking-[.11em]">Email*<input type="email" name="Email*" value={form.email} onChange={(event) => updateField('email', event.target.value)} className={fieldClass('email')} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} data-testid="input-email" />{errors.email && <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-[#d22f25]">{errors.email}</span>}</label>
                <label className="text-xs font-bold uppercase tracking-[.11em]">subject<input name="subject" value={form.subject} onChange={(event) => updateField('subject', event.target.value)} className={fieldClass('subject')} placeholder="Auto tint, PPF, home..." data-testid="input-subject" /></label>
                <label className="text-xs font-bold uppercase tracking-[.11em]">Phone*<input type="tel" name="Phone*" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className={fieldClass('phone')} placeholder="(813) 555-0000" aria-invalid={Boolean(errors.phone)} data-testid="input-phone" />{errors.phone && <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-[#d22f25]">{errors.phone}</span>}</label>
                <label className="text-xs font-bold uppercase tracking-[.11em] sm:col-span-2">Address (Street, City, Zip Code)*<input name="Address (Street, City, Zip Code)*" value={form.address} onChange={(event) => updateField('address', event.target.value)} className={fieldClass('address')} placeholder="Where should we meet you?" aria-invalid={Boolean(errors.address)} data-testid="input-address" />{errors.address && <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-[#d22f25]">{errors.address}</span>}</label>
                <label className="text-xs font-bold uppercase tracking-[.11em] sm:col-span-2">Date and time of appointment<input type="datetime-local" name="Date and time of appointment" value={form.appointment} onChange={(event) => updateField('appointment', event.target.value)} className={fieldClass('appointment')} data-testid="input-appointment" /></label>
              </div>
              <button type="submit" className="focus-ring mt-7 flex w-full items-center justify-center gap-3 bg-[#d22f25] px-6 py-4 text-sm font-bold uppercase tracking-[.1em] text-white transition-transform hover:-translate-y-0.5" data-testid="button-submit-quote">Send <ArrowRight size={17} /></button>
              <p className="mt-3 text-center text-[.7rem] leading-relaxed text-black/45">This request starts the conversation; we’ll confirm timing by phone or text.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div><BrandMark light /><p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">Professional mobile window tinting of Tampa Bay. Auto, residential, commercial, marine, PPF, and vinyl wraps.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#f5d644]">Navigate</p><div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65"><a href="#services" className="focus-ring hover:text-white" data-testid="link-footer-services">Services</a><a href="#why" className="focus-ring hover:text-white" data-testid="link-footer-why">Why Tint Pros</a><a href="#service-area" className="focus-ring hover:text-white" data-testid="link-footer-area">Service area</a><a href="#quote" className="focus-ring hover:text-white" data-testid="link-footer-quote">Get a free quote</a></div></div>
          <div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#f5d644]">Talk to us</p><div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65"><a href={TEL} className="focus-ring hover:text-white" data-testid="link-footer-call">{PHONE}</a><a href={SMS} className="focus-ring hover:text-white" data-testid="link-footer-text">Call or text for service</a><span>Tampa, Florida 33624</span><span>Monday - Saturday: 9AM–6PM<br />Sunday: Closed</span></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[.7rem] uppercase tracking-[.1em] text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Tint Pro's Tampa</span><span>Mobile service across Tampa Bay</span></div>
      </div>
    </footer>
  );
}

function Home() {
  useEffect(() => {
    document.title = "Tint Pros Tampa | Mobile Window Tinting, PPF & Wraps";
    const description = 'Professional mobile window tinting, PPF, and vinyl wraps for auto, residential, commercial, and marine customers across Tampa Bay.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <div className="site-noise min-h-[100dvh] overflow-hidden">
      <main>
        <Hero />
        <Ticker />
        <Services />
        <CeramicFeature />
        <ProofStrip />
        <MobileProcess />
        <ServiceArea />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;