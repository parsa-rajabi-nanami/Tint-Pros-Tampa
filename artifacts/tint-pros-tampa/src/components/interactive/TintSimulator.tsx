import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { vltOptions } from '@/data/site';

const vltOrder = [70, 50, 35, 20, 15, 5];

const compliance: Record<number, { front: string; rear: string; tone: string }> = {
  70: { front: 'Clear / street legal', rear: 'Clear / street legal', tone: 'Bright and subtle' },
  50: { front: 'Street legal', rear: 'Street legal', tone: 'Light privacy' },
  35: { front: 'Street legal', rear: 'Street legal', tone: 'Balanced privacy' },
  20: { front: 'Not for front side glass', rear: 'Legal for back windows', tone: 'Private and sporty' },
  15: { front: 'Not for front side glass', rear: 'Legal for back windows', tone: 'Deep privacy' },
  5: { front: 'Limo / off-road / show use', rear: 'Limo / off-road / show use', tone: 'Maximum darkness' },
};

export function TintSimulator() {
  const [vlt, setVlt] = useState(35);
  const selected = vltOptions.find((option) => option.value === vlt) ?? vltOptions[2];
  const selectedCompliance = compliance[vlt];

  return (
    <div className="border border-white/10 bg-slate-900 p-5 sm:p-8" data-testid="tint-simulator">
      <div className="flex items-start justify-between gap-5">
        <div><p className="text-sm font-semibold tracking-[.12em] text-cyan-300">Tint shade simulator</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">See the difference.</h3></div>
        <span className="rounded-full bg-cyan-300 px-4 py-2 font-display text-2xl text-slate-950">{selected.value}%</span>
      </div>
      <div className="mt-8 overflow-hidden border border-white/10 bg-slate-950 p-4">
        <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_20%,rgba(103,232,249,.18),transparent_45%),linear-gradient(160deg,#1e293b,#020617)]">
          <div className="absolute bottom-3 left-1/2 h-2 w-4/5 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-md" />
          <svg viewBox="0 0 560 220" className="relative z-10 h-full w-full max-w-xl" role="img" aria-label={`${selected.value}% visible light transmission tint preview`}>
            <path d="M77 155c8-24 25-39 51-47l38-12 43-44c9-9 20-14 33-14h114c18 0 34 7 46 21l32 37 51 11c25 6 39 21 43 48l4 19H72l5-19Z" fill="#0b1220" stroke="#67e8f9" strokeOpacity=".45" strokeWidth="2" />
            <path d="M220 49h118c13 0 25 5 34 16l24 29H190l28-31c1-2 1-3 2-4Z" fill="#cbd5e1" fillOpacity=".12" stroke="#e2e8f0" strokeOpacity=".35" />
            <path d="M224 53h47v36h-74l27-30Z" fill="#06111e" fillOpacity={Math.max(.2, 1 - selected.value / 100)} />
            <path d="M276 53h58c12 0 22 5 31 15l17 21h-106V53Z" fill="#06111e" fillOpacity={Math.max(.2, 1 - selected.value / 100)} />
            <path d="M113 128h68v30h-83c2-11 7-21 15-30Z" fill="#06111e" fillOpacity={Math.max(.2, 1 - selected.value / 100)} stroke="#67e8f9" strokeOpacity=".25" />
            <path d="M366 128h80c8 8 12 18 14 30h-94v-30Z" fill="#06111e" fillOpacity={Math.max(.2, 1 - selected.value / 100)} stroke="#67e8f9" strokeOpacity=".25" />
            <circle cx="137" cy="174" r="19" fill="#020617" stroke="#94a3b8" strokeWidth="4" /><circle cx="425" cy="174" r="19" fill="#020617" stroke="#94a3b8" strokeWidth="4" />
            <path d="M176 116h190" stroke="#67e8f9" strokeOpacity=".55" strokeWidth="2" />
          </svg>
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-white/70">{selectedCompliance.tone}</p>
      </div>
      <div className="mt-7 grid grid-cols-3 gap-2" role="group" aria-label="Choose tint darkness">
        {vltOrder.map((value) => (
          <button key={value} type="button" onClick={() => setVlt(value)} className={`focus-ring min-h-11 rounded-full border px-2 text-sm font-bold transition-colors ${value === vlt ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/15 text-white/65 hover:border-cyan-300/60 hover:text-white'}`} aria-pressed={value === vlt} data-testid={`button-vlt-${value}`}>
            {value}%{value === 5 ? ' Limo' : ''}
          </button>
        ))}
      </div>
      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
        <div><p className="font-display text-3xl text-cyan-300">{selected.heatRejection}%+</p><p className="mt-1 text-xs text-white/50">heat rejection</p></div>
        <div><p className="font-display text-3xl">99.9%</p><p className="mt-1 text-xs text-white/50">UV protection</p></div>
        <div className="col-span-2 sm:col-span-1"><p className="font-display text-xl text-white">{selectedCompliance.front}</p><p className="mt-1 text-xs text-white/50">front side glass</p></div>
      </div>
      <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-white/50"><ShieldCheck size={15} className="mt-0.5 shrink-0 text-cyan-300" /><span>{selectedCompliance.rear} for rear glass. Florida compliance depends on measured glass, vehicle class, and existing factory tint.</span></div>
      <a href="sms:8137875327" className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5" data-testid="link-simulator-text">Book this shade via text <ArrowRight size={16} /></a>
      <p className="mt-4 inline-flex items-center gap-2 text-xs text-white/45"><CheckCircle2 size={14} className="text-cyan-300" /> Performance values are illustrative by film family.</p>
    </div>
  );
}

