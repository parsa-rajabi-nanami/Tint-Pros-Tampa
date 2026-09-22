import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

const items = ['Block Tampa heat', 'Reduce glare', 'Protect your interior', 'Computer-cut installation', 'Mobile service'];

export function Ticker() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentCount, setSegmentCount] = useState(2);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const segment = segmentRef.current;

    if (!viewport || !segment) return;

    const updateSegmentCount = () => {
      const segmentWidth = segment.getBoundingClientRect().width;

      if (!segmentWidth) return;

      const nextCount = Math.max(2, Math.ceil(viewport.clientWidth / segmentWidth) + 1);
      setSegmentCount((currentCount) => currentCount === nextCount ? currentCount : nextCount);
    };

    updateSegmentCount();

    const resizeObserver = new ResizeObserver(updateSegmentCount);
    resizeObserver.observe(viewport);
    resizeObserver.observe(segment);

    return () => resizeObserver.disconnect();
  }, []);

  const marqueeStyle = {
    '--marquee-shift': `${100 / segmentCount}%`,
  } as CSSProperties;

  return (
    <div ref={viewportRef} className="overflow-hidden border-y border-white/10 bg-slate-900 py-4 text-white" aria-label="Service highlights">
      <div className="marquee-track flex w-max items-center" style={marqueeStyle}>
        {Array.from({ length: segmentCount }, (_, segmentIndex) => (
          <div key={segmentIndex} ref={segmentIndex === 0 ? segmentRef : undefined} className="flex shrink-0 items-center" aria-hidden={segmentIndex > 0}>
            {items.map((item, itemIndex) => (
              <span key={`${item}-${itemIndex}`} className="mx-5 flex items-center gap-5 whitespace-nowrap text-sm font-semibold tracking-[.04em] text-white/75 sm:mx-8">
                {item} <span className="text-cyan-300" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
