import { ArrowRight, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { vltOptions } from '@/data/site';
import { publicAsset } from '@/lib/assets';

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
  const overlayOpacity = Math.min(0.62, 0.08 + ((70 - vlt) / 65) * 0.54);

  return (
    <div className="border border-white/10 bg-slate-900 p-5 sm:p-8" data-testid="tint-simulator">
      <div className="flex items-start justify-between gap-5">
        <div><p className="text-sm font-semibold tracking-[.12em] text-cyan-300">Tint shade simulator</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">See the difference.</h3></div>
        <span className="rounded-full bg-cyan-300 px-4 py-2 font-display text-2xl text-slate-950">{selected.value}%</span>
      </div>
      <div className="mt-8 overflow-hidden border border-white/10 bg-slate-950 p-4">
        <div className="relative isolate h-52 overflow-hidden rounded-sm bg-slate-950 sm:h-72">
          <img
            src={publicAsset('/assets/street-view.jpg')}
            alt={`Highway scene through a ${selected.value}% VLT tint preview`}
            width="1035"
            height="408"
            className="absolute inset-0 h-full w-full object-cover object-center transition-[filter] duration-300"
            style={{ filter: `brightness(${1 - overlayOpacity * 0.16}) saturate(${1 - overlayOpacity * 0.1})` }}
          />
          <div
            className="absolute inset-0 bg-slate-950 transition-opacity duration-300"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/25" aria-hidden="true" />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 text-[10px] font-bold tracking-[.14em]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-white/85 backdrop-blur-sm">
              <Eye size={13} className="text-cyan-300" /> LIVE VISUAL
            </span>
            <span className="rounded-full bg-cyan-300 px-3 py-1.5 text-slate-950">{selected.label} shade</span>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-xs font-semibold text-white/75">
            <span>More natural light</span>
            <span>More privacy</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <p className="font-semibold text-white/85">{selectedCompliance.tone}</p>
          <p className="text-xs text-white/45">Illustrative view</p>
        </div>
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
