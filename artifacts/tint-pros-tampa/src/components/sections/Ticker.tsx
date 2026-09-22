const items = ['BLOCK HEAT', 'REDUCE GLARE', 'PROTECT YOUR INTERIOR', 'COMPUTER-CUT INSTALLATION', 'MOBILE SERVICE'];

export function Ticker() {
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
