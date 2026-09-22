const items = ['Block Tampa heat', 'Reduce glare', 'Protect your interior', 'Computer-cut installation', 'Mobile service'];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-slate-900 py-4 text-white" aria-label="Service highlights">
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="mx-5 flex items-center gap-5 whitespace-nowrap text-sm font-semibold tracking-[.04em] text-white/75 sm:mx-8">
            {item} <span className="text-cyan-300" aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}