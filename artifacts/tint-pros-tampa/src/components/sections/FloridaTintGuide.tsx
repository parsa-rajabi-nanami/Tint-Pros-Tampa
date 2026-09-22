import { ExternalLink, Scale, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';

const statuteUrl = 'https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.2953.html';

export function FloridaTintGuide() {
  return (
    <section id="florida-guide" className="bg-[#e8e4dc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div><SectionLabel>Florida tint guide</SectionLabel><h2 className="font-display text-[clamp(2.8rem,5.5vw,5.7rem)] leading-[.87] tracking-[-.06em]">Shade is<br /><span className="text-[#d22f25]">not one-size-fits-all.</span></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-black/60">Use the simulator for a visual starting point, then let the installer confirm the measured glass and the correct film for your vehicle.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <GuideCard icon={Scale} title="Front side windows" copy="Florida Statute §316.2953 states that authorized sunscreening material on the side windows forward of or adjacent to the driver must allow at least 28% visible light transmittance and limits reflectance to 25%." />
          <GuideCard icon={ShieldCheck} title="Windows behind the driver" copy="Section §316.2954 sets different requirements behind the driver, including 15% minimum light transmittance for film on a rear window, with a 6% provision for multipurpose passenger vehicles." />
          <div className="border border-black/15 bg-white p-6 sm:col-span-2"><p className="text-sm font-bold">Important: this is general information, not legal advice.</p><p className="mt-2 text-sm leading-relaxed text-black/60">Vehicle glass, existing factory tint, exemptions, and statutory updates can affect compliance. Ask Tint Pros to measure the specific glass and review the current law before installation.</p><a href={statuteUrl} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#d22f25]">Read Florida Statute §316.2953 <ExternalLink size={14} /></a></div>
        </div>
      </div>
    </section>
  );
}

function GuideCard({ icon: Icon, title, copy }: { icon: typeof Scale; title: string; copy: string }) {
  return <article className="border border-black/15 bg-white p-6"><Icon size={24} className="text-[#d22f25]" /><h3 className="mt-7 font-display text-2xl tracking-[-.03em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-black/60">{copy}</p></article>;
}
