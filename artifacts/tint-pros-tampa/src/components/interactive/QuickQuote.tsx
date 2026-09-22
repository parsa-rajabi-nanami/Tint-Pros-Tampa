import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { PHONE, TEL } from '@/data/site';

type QuoteIntent = 'vehicle' | 'home' | 'office' | 'protection';

interface QuickQuoteProps {
  initialIntent?: QuoteIntent;
  variant?: 'section' | 'modal';
}

const intents: Array<{ id: QuoteIntent; label: string; copy: string }> = [
  { id: 'vehicle', label: 'Car / SUV / Truck', copy: 'Tint, comfort, and exterior protection' },
  { id: 'home', label: 'Residential home', copy: 'Cooler rooms and less fading' },
  { id: 'office', label: 'Commercial office', copy: 'Solar, decorative, and security film' },
  { id: 'protection', label: 'PPF / Wrap', copy: 'Paint armor or a new visual identity' },
];

export function QuickQuote({ initialIntent = 'vehicle', variant = 'section' }: QuickQuoteProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [intent, setIntent] = useState<QuoteIntent>(initialIntent);
  const [details, setDetails] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedIntent = intents.find((item) => item.id === intent) ?? intents[0];
  const isVehicle = intent === 'vehicle' || intent === 'protection';
  const detailsLabel = isVehicle ? (intent === 'vehicle' ? 'Year / make / model' : 'Vehicle or project details') : 'Approximate square footage';
  const detailsPlaceholder = isVehicle ? 'Example: 2024 Porsche 911, front + sides' : 'Example: 1,800 sq ft';

  function continueToDetails() {
    setStep(2);
    setError('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!details.trim() || !phone.trim() || !zip.trim()) {
      setError('Add your project details, phone number, and ZIP code so we know how to respond.');
      return;
    }
    if (!/^[0-9+().\s-]{7,}$/.test(phone.trim())) {
      setError('Enter a valid phone number for the text estimate.');
      return;
    }
    if (!/^\d{5}(-\d{4})?$/.test(zip.trim())) {
      setError('Enter a valid ZIP code for mobile coverage.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={variant === 'modal' ? 'p-6 sm:p-8' : 'bg-slate-900 p-6 sm:p-10'} data-testid="quote-success">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-slate-950"><CheckCircle2 size={27} /></div>
        <h3 className="mt-6 font-display text-4xl leading-none tracking-[-.05em] text-white">You are one text away.</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">We have your {selectedIntent.label.toLowerCase()} request for ZIP {zip}. For the fastest response, text or call {PHONE} with the details you entered.</p>
        <div className="mt-7 flex flex-wrap gap-3"><a href="sms:8137875327" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950"><MessageSquare size={16} /> Text now</a><a href={TEL} className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white"><Phone size={16} /> Call instead</a></div>
        <p className="mt-5 text-xs text-white/40">This front-end confirmation does not transmit or store lead data yet.</p>
      </div>
    );
  }

  return (
    <div className={variant === 'modal' ? 'p-6 sm:p-8' : 'bg-slate-900 p-6 sm:p-10'} data-testid="quick-quote">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5"><div><p className="text-sm font-semibold tracking-[.12em] text-cyan-300">Fast quote</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em] text-white">{step === 1 ? 'What are you looking to protect?' : 'Where should we text your estimate?'}</h3></div><span className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-bold text-white/60">{step} / 2</span></div>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300 transition-all" style={{ width: `${step * 50}%` }} /></div>
      {step === 1 ? <div className="mt-7 grid gap-3 sm:grid-cols-2">{intents.map((item) => <button key={item.id} type="button" onClick={() => setIntent(item.id)} className={`focus-ring min-h-20 rounded-lg border p-4 text-left transition-colors ${intent === item.id ? 'border-cyan-300 bg-cyan-300/10' : 'border-white/10 bg-slate-950 hover:border-white/30'}`} aria-pressed={intent === item.id} data-testid={`quote-intent-${item.id}`}><span className="block font-bold text-white">{item.label}</span><span className="mt-1 block text-sm text-white/50">{item.copy}</span></button>)}</div> : <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5"><label className="block text-sm font-semibold text-white">{detailsLabel}<input value={details} onChange={(event) => setDetails(event.target.value)} className="focus-ring mt-2 min-h-12 w-full rounded-md border border-white/15 bg-slate-950 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300" placeholder={detailsPlaceholder} data-testid="quote-details" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold text-white">Phone number*<input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="focus-ring mt-2 min-h-12 w-full rounded-md border border-white/15 bg-slate-950 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300" placeholder="(813) 555-0000" data-testid="quote-phone" /></label><label className="block text-sm font-semibold text-white">ZIP code*<input inputMode="numeric" value={zip} onChange={(event) => setZip(event.target.value)} className="focus-ring mt-2 min-h-12 w-full rounded-md border border-white/15 bg-slate-950 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300" placeholder="33624" data-testid="quote-zip" /></label></div>{error ? <p className="text-sm font-semibold text-amber-300" role="alert">{error}</p> : null}<button type="submit" className="focus-ring flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5" data-testid="quote-submit">Text my estimate <ArrowRight size={17} /></button><p className="text-xs leading-relaxed text-white/40">No street address or appointment time required. We confirm coverage and timing after the first conversation.</p></form>}
      {step === 1 ? <button type="button" onClick={continueToDetails} className="focus-ring mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5" data-testid="quote-continue">Continue to details <ArrowRight size={17} /></button> : <button type="button" onClick={() => { setStep(1); setError(''); }} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/60 hover:text-white" data-testid="quote-back"><ArrowLeft size={16} /> Change project type</button>}
      <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/45"><ShieldCheck size={15} className="text-cyan-300" /> Low-friction start. Your full address can wait.</div>
    </div>
  );
}

