import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-[.7rem] font-bold uppercase tracking-[.2em] ${light ? 'text-[#f5d644]' : 'text-[#d22f25]'}`}
    >
      <span className="h-px w-8 bg-current" />
      <span>{children}</span>
    </div>
  );
}
