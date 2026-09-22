import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, Check, MessageSquare, Phone, Send, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { PHONE, SMS, TEL } from '@/data/site';
import type { QuoteRequest } from '@/types/site';

type FormErrors = Partial<Record<keyof QuoteRequest, string>>;
const initialForm: QuoteRequest = { name: '', email: '', subject: '', phone: '', address: '', appointment: '' };

export function QuoteSection() {
  const [form, setForm] = useState<QuoteRequest>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const updateField = (field: keyof QuoteRequest, value: string) => { setForm((current) => ({ ...current, [field]: value })); if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined })); };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const required: Array<keyof QuoteRequest> = ['name', 'email', 'phone', 'address'];
    const nextErrors: FormErrors = {};
    required.forEach((field) => { if (!form[field].trim()) nextErrors[field] = 'This field is required.'; });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); setSubmitted(false); return; }
    setErrors({}); setSubmitted(true);
  };
  const fieldClass = (field: keyof QuoteRequest) => `focus-ring mt-2 w-full border bg-white px-4 py-3.5 text-sm text-[#111] outline-none transition-colors placeholder:text-black/35 ${errors[field] ? 'border-[#d22f25]' : 'border-black/15 focus:border-[#d22f25]'}`;

  return (
    <section id="quote" className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><SectionLabel light>Start here</SectionLabel><h2 className="font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.85] tracking-[-.065em]">Get a<br /><span className="text-[#f5d644]">free quote.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">To set up a window tinting service consultation, please contact us or text us at 813-787-5327 at your convenience. We look forward to hearing from you and meeting you soon.</p><div className="mt-9 space-y-4"><a href={TEL} className="focus-ring flex w-fit items-center gap-3 text-lg font-bold text-white" data-testid="link-quote-call"><Phone className="text-[#f5d644]" size={20} /> {PHONE}</a><a href={SMS} className="focus-ring flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[.1em] text-[#f5d644]" data-testid="link-quote-text"><MessageSquare size={18} /> Text for a free quote</a></div><div className="mt-12 flex max-w-sm gap-3 border-t border-white/15 pt-5 text-sm text-white/55"><ShieldCheck className="shrink-0 text-[#d22f25]" size={19} /><span>Lifetime warranty claim on our auto films and residential films.</span></div></div>
        <div className="bg-[#f5f2eb] p-5 text-[#111] sm:p-8 lg:p-10">
          {submitted ? <div className="flex min-h-[430px] flex-col items-start justify-center"><div className="flex h-14 w-14 items-center justify-center bg-[#d22f25] text-white"><Check size={28} /></div><h3 className="mt-7 font-display text-4xl leading-none tracking-[-.05em]">You're on the list.</h3><p className="mt-4 max-w-md text-base leading-relaxed text-black/60">Thanks, {form.name.split(' ')[0] || 'there'}. Your request is ready to review. For the fastest response, call or text {PHONE}.</p><div className="mt-7 flex flex-wrap gap-3"><a href={TEL} className="focus-ring inline-flex items-center gap-2 bg-[#d22f25] px-5 py-3 text-sm font-bold text-white" data-testid="link-success-call"><Phone size={15} /> Call now</a><button type="button" onClick={() => { setForm(initialForm); setSubmitted(false); }} className="focus-ring border border-black/20 px-5 py-3 text-sm font-bold" data-testid="button-new-quote">Send another request</button></div></div> : <form onSubmit={handleSubmit} noValidate><div className="mb-8 flex items-end justify-between gap-4 border-b border-black/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d22f25]">Schedule an appointment</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em]">Tell us what you need.</h3></div><Send className="hidden text-[#d22f25] sm:block" size={27} /></div><div className="grid gap-5 sm:grid-cols-2"><FormField label="Name*" field="name" value={form.name} error={errors.name} placeholder="Your name" onChange={updateField} /><FormField label="Email*" field="email" type="email" value={form.email} error={errors.email} placeholder="you@example.com" onChange={updateField} /><FormField label="Subject" field="subject" value={form.subject} placeholder="Auto tint, PPF, home..." onChange={updateField} /><FormField label="Phone*" field="phone" type="tel" value={form.phone} error={errors.phone} placeholder="(813) 555-0000" onChange={updateField} /><FormField label="Address (Street, City, Zip Code)*" field="address" value={form.address} error={errors.address} placeholder="Where should we meet you?" onChange={updateField} wide /><FormField label="Date and time of appointment" field="appointment" type="datetime-local" value={form.appointment} onChange={updateField} wide /></div><button type="submit" className="focus-ring mt-7 flex w-full items-center justify-center gap-3 bg-[#d22f25] px-6 py-4 text-sm font-bold uppercase tracking-[.1em] text-white transition-transform hover:-translate-y-0.5" data-testid="button-submit-quote">Send <ArrowRight size={17} /></button><p className="mt-3 text-center text-[.7rem] leading-relaxed text-black/45">This request starts the conversation; we’ll confirm timing by phone or text.</p></form>}
        </div>
      </div>
    </section>
  );

  function FormField({ label, field, type = 'text', value, error, placeholder, onChange, wide = false }: { label: string; field: keyof QuoteRequest; type?: string; value: string; error?: string; placeholder?: string; onChange: (field: keyof QuoteRequest, value: string) => void; wide?: boolean }) {
    return <label className={`text-xs font-bold uppercase tracking-[.11em] ${wide ? 'sm:col-span-2' : ''}`}>{label}<input type={type} name={field} value={value} onChange={(event) => onChange(field, event.target.value)} className={fieldClass(field)} placeholder={placeholder} aria-invalid={Boolean(error)} data-testid={`input-${field}`} />{error ? <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-[#d22f25]">{error}</span> : null}</label>;
  }
}
