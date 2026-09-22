import { BrandMark } from '@/components/common/BrandMark';
import { PHONE, SMS, TEL } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <BrandMark light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Professional mobile window tinting of Tampa Bay. Auto, residential, commercial, marine, PPF, and vinyl wraps.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[#f5d644]">Navigate</p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">
              <a href="#services" className="focus-ring hover:text-white">Services</a>
              <a href="#why" className="focus-ring hover:text-white">Why Tint Pros</a>
              <a href="#tools" className="focus-ring hover:text-white">Tools</a>
              <a href="#service-area" className="focus-ring hover:text-white">Service area</a>
              <a href="#quote" className="focus-ring hover:text-white">Get a free quote</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[#f5d644]">Talk to us</p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">
              <a href={TEL} className="focus-ring hover:text-white">{PHONE}</a>
              <a href={SMS} className="focus-ring hover:text-white">Call or text for service</a>
              <span>Tampa, Florida 33624</span>
              <span>Monday - Saturday: 9AM–6PM<br />Sunday: Closed</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[.7rem] uppercase tracking-[.1em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Tint Pro's Tampa</span>
          <span>Mobile service across Tampa Bay</span>
        </div>
      </div>
    </footer>
  );
}
