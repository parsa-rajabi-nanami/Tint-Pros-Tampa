import { SectionLabel } from '@/components/common/SectionLabel';

export function ProofStrip() {
  return (
    <section className="bg-[#f5d644] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:items-center">
        <div><SectionLabel>Why customers choose us</SectionLabel><h2 className="max-w-md font-display text-3xl leading-[.95] tracking-[-.04em] sm:text-4xl">Customer service and quality. No runaround.</h2></div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">22</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">years tinting cars</p></div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">500+</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">happy reviews</p></div>
        <div className="border-t border-black/20 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="font-display text-4xl tracking-[-.06em]">FREE</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em]">service within Tampa Bay</p></div>
      </div>
    </section>
  );
}
