interface BrandMarkProps {
  light?: boolean;
}

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <a
      href="#top"
      className={`focus-ring flex items-center gap-2 no-underline ${light ? 'text-white' : 'text-[#111]'}`}
      data-testid="link-logo"
    >
      <span className="font-display text-[1.15rem] leading-none tracking-[-.05em]">
        TINT PROS
      </span>
      <span className="mt-0.5 bg-[#d22f25] px-1.5 py-1 font-display text-[.55rem] leading-none tracking-[.12em] text-white">
        TAMPA
      </span>
    </a>
  );
}
