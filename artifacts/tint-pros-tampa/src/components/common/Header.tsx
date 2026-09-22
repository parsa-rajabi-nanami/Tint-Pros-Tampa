import { useState } from 'react';
import { ArrowUpRight, ChevronRight, Menu, Phone, X } from 'lucide-react';
import { BrandMark } from '@/components/common/BrandMark';
import { PHONE, TEL } from '@/data/site';

const navItems = [
  ['Services', '#services'],
  ['Why Tint Pros', '#why'],
  ['Tools', '#tools'],
  ['Service area', '#service-area'],
  ['Quote', '#quote'],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <BrandMark light />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring text-[.74rem] font-bold uppercase tracking-[.12em] text-white/75 transition-colors hover:text-white"
              data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}
            >
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
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="focus-ring flex h-11 w-11 items-center justify-center border border-white/35 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen ? (
        <div className="mx-4 border border-white/20 bg-[#151515]/95 p-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring flex items-center justify-between border-b border-white/10 px-3 py-4 text-sm font-bold uppercase tracking-[.12em] text-white"
                data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {label} <ChevronRight size={16} className="text-[#f5d644]" />
              </a>
            ))}
            <a href={TEL} onClick={() => setMenuOpen(false)} className="focus-ring mt-3 flex items-center justify-center gap-2 bg-[#d22f25] px-3 py-4 text-sm font-bold text-white" data-testid="link-mobile-call">
              <Phone size={16} /> Call {PHONE}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
