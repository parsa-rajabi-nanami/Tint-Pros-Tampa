import { CheckCircle2, Clock3, ShieldCheck, Smartphone } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';

const proof = [
  [Smartphone, '100% mobile service', 'We come to your home or office.'],
  [CheckCircle2, '22+ years local', 'Tampa Bay experience you can call on.'],
  [ShieldCheck, 'Lifetime warranty', 'Transferable coverage on qualifying films.'],
  [Clock3, '500+ five-star reviews', 'A finish worth telling your friends about.'],
] as const;

export function ProofStrip() {
  return (
    <section className="border-b border-white/10 bg-slate-900 px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel light>Why Tint Pros</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([Icon, title, copy]) => (
            <div key={title} className="border-t border-white/15 pt-5">
              <Icon size={20} className="text-cyan-300" />
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}