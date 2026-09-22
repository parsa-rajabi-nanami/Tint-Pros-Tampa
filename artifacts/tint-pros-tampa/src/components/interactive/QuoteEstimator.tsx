import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { PHONE, TEL, serviceLabels } from '@/data/site';
import { calculateEstimate, formatCurrency } from '@/lib/calculations';
import type { QuoteFinish, QuoteSize, ServiceId } from '@/types/site';

const services: ServiceId[] = ['auto', 'residential', 'commercial', 'ppf', 'wraps', 'marine'];
const sizes: Array<{ value: QuoteSize; label: string; copy: string }> = [
  { value: 'small', label: 'Small project', copy: 'Coupe, compact room, or small surface' },
  { value: 'standard', label: 'Standard project', copy: 'Sedan, average room, or regular storefront' },
  { value: 'large', label: 'Large project', copy: 'SUV, whole home, or larger commercial surface' },
];
const finishes: Array<{ value: QuoteFinish; label: string; copy: string }> = [
  { value: 'dyed', label: 'Standard', copy: 'Practical shade and privacy' },
  { value: 'ceramic', label: 'Nano ceramic', copy: 'More heat and glare performance' },
  { value: 'premium', label: 'Premium protection', copy: 'Higher-end material and coverage' },
];

export function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceId>('auto');
  const [size, setSize] = useState<QuoteSize>('standard');
  const [finish, setFinish] = useState<QuoteFinish>('ceramic');
  const estimate = useMemo(() => calculateEstimate(service, size, finish), [service, size, finish]);

  return (
    <div className="bg-[#f5f2eb] p-5 text-[#111] sm:p-8 lg:p-10">
      <div className="flex items-center justify-between border-b border-black/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d22f25]">3-step instant estimate</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">Plan your project.</h3></div><span className="text-sm font-bold text-black/45">{step} / 3</span></div>
      <div className="mt-6 h-1 bg-black/10"><div className="h-full bg-[#d22f25] transition-all" style={{ width: `${(step / 3) * 100}%` }} /></div>
      <div className="mt-8 min-h-[260px]">
        {step === 1 ? <ChoiceStep title="What are you protecting?" options={services.map((value) => ({ value, label: serviceLabels[value] }))} selected={service} onSelect={(value) => setService(value as ServiceId)} /> : null}
        {step === 2 ? <ChoiceStep title="How big is the project?" options={sizes} selected={size} onSelect={(value) => setSize(value as QuoteSize)} /> : null}
        {step === 3 ? <ChoiceStep title="Which finish fits?" options={finishes} selected={finish} onSelect={(value) => setFinish(value as QuoteFinish)} /> : null}
      </div>
      <div className="flex flex-wrap justify-between gap-3 border-t border-black/10 pt-5">
        {step > 1 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="focus-ring inline-flex items-center gap-2 border border-black/20 px-4 py-3 text-sm font-bold"><ArrowLeft size={15} /> Back</button> : <span />}
        {step < 3 ? <button type="button" onClick={() => setStep((current) => current + 1)} className="focus-ring inline-flex items-center gap-2 bg-[#d22f25] px-5 py-3 text-sm font-bold text-white">Next <ArrowRight size={15} /></button> : <a href="#quote" className="focus-ring inline-flex items-center gap-2 bg-[#d22f25] px-5 py-3 text-sm font-bold text-white">Request exact quote <ArrowRight size={15} /></a>}
      </div>
      <div className="mt-7 border-t border-black/10 pt-5"><p className="text-xs font-bold uppercase tracking-[.12em] text-black/45">Planning range for {serviceLabels[service]}</p><p className="mt-1 font-display text-4xl">{formatCurrency(estimate.low)}–{formatCurrency(estimate.high)}</p><p className="mt-2 max-w-lg text-xs leading-relaxed text-black/50">This is a budgetary range generated from project size and finish assumptions, not a binding quote. Vehicle glass, measurements, access, and material selection can change the final price.</p><a href={TEL} className="focus-ring mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#d22f25]"><Phone size={14} /> Call {PHONE}</a></div>
    </div>
  );
}

interface ChoiceOption { value: string; label: string; copy?: string; }
interface ChoiceStepProps { title: string; options: ChoiceOption[]; selected: string; onSelect: (value: string) => void; }

function ChoiceStep({ title, options, selected, onSelect }: ChoiceStepProps) {
  return <div><h4 className="font-display text-2xl tracking-[-.03em]">{title}</h4><div className="mt-5 grid gap-3 sm:grid-cols-2">{options.map((option) => <button key={option.value} type="button" onClick={() => onSelect(option.value)} className={`focus-ring flex items-start gap-3 border p-4 text-left transition-colors ${selected === option.value ? 'border-[#d22f25] bg-white' : 'border-black/10 hover:border-black/30'}`} aria-pressed={selected === option.value}><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${selected === option.value ? 'border-[#d22f25] bg-[#d22f25] text-white' : 'border-black/25'}`}>{selected === option.value ? <Check size={13} /> : null}</span><span><span className="block text-sm font-bold">{option.label}</span>{option.copy ? <span className="mt-1 block text-xs leading-relaxed text-black/55">{option.copy}</span> : null}</span></button>)}</div></div>;
}
