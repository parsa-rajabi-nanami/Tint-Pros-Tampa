import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { vltOptions } from '@/data/site';
import { findVltOption } from '@/lib/calculations';

export function VltShadeSimulator() {
  const [vlt, setVlt] = useState(35);
  const selected = findVltOption(vlt, vltOptions);

  return (
    <div className="border border-white/15 bg-[#171717] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#f5d644]">VLT shade simulator</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">Find your shade.</h3></div>
        <span className="bg-[#d22f25] px-3 py-2 font-display text-2xl text-white">{selected.value}%</span>
      </div>
      <div className="mt-8 overflow-hidden border border-white/15 bg-[#0b0b0b]">
        <div className="relative h-40 bg-[url('/assets/auto-tint.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#050505]" style={{ opacity: Math.max(0.12, (100 - selected.value) / 100) }} aria-hidden="true" />
          <div className="absolute bottom-0 left-0 bg-[#f5d644] px-3 py-2 text-xs font-bold uppercase tracking-[.12em] text-[#111]">{selected.label} look</div>
        </div>
      </div>
      <label className="mt-7 block text-sm font-bold" htmlFor="vlt-range">Visible light transmission: {vlt}%</label>
      <input id="vlt-range" type="range" min="5" max="70" step="5" value={vlt} onChange={(event) => setVlt(Number(event.target.value))} className="vlt-range mt-4 w-full accent-[#d22f25]" aria-describedby="vlt-note" />
      <div className="mt-2 flex justify-between text-xs text-white/45"><span>5% darker</span><span>70% lighter</span></div>
      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/15 pt-5"><div><p className="font-display text-3xl text-[#f5d644]">{selected.heatRejection}%</p><p className="mt-1 text-xs uppercase tracking-[.1em] text-white/50">illustrative heat-rejection index</p></div><div><p className="font-display text-3xl">{selected.label}</p><p className="mt-1 text-xs uppercase tracking-[.1em] text-white/50">visual direction</p></div></div>
      <p id="vlt-note" className="mt-5 text-xs leading-relaxed text-white/45"><ShieldCheck size={14} className="mr-1 inline text-[#f5d644]" /> Preview values are illustrative. Glass, film, and installation affect measured VLT and heat performance; confirm the legal shade with your installer.</p>
      <a href="#florida-guide" className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.11em] text-[#f5d644]">Read the Florida guide <ArrowRight size={14} /></a>
    </div>
  );
}
