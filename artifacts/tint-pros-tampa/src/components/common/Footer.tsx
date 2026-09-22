import { BrandMark } from '@/components/common/BrandMark';
import { PHONE, SMS, TEL } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 pb-8 pt-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div><BrandMark light /><p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">Premium mobile window tinting, PPF, wraps, and architectural film for Tampa Bay.</p></div>
          <div><p className="text-sm font-semibold text-cyan-300">Explore</p><div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/60"><a href="#services" className="focus-ring hover:text-white">Services</a><a href="#why" className="focus-ring hover:text-white">Why Tint Pros</a><a href="#tools" className="focus-ring hover:text-white">Shade simulator</a><a href="#service-area" className="focus-ring hover:text-white">Service area</a><a href="#quote" className="focus-ring hover:text-white">Fast quote</a></div></div>
          <div><p className="text-sm font-semibold text-cyan-300">Talk to us</p><div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/60"><a href={TEL} className="focus-ring hover:text-white">{PHONE}</a><a href={SMS} className="focus-ring hover:text-white">Text for a fast quote</a><span>Tampa, Florida 33624</span><span>Monday–Saturday: 9 AM–6 PM<br />Sunday: Closed</span></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Tint Pro's Tampa</span><span>Mobile service across Tampa Bay</span></div>
      </div>
    </footer>
  );
}