import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-xs font-semibold tracking-[.16em] ${light ? 'text-cyan-300' : 'text-cyan-700'}`}
    >
      <span className="h-px w-8 bg-current" />
      <span>{children}</span>
    </div>
  );
}