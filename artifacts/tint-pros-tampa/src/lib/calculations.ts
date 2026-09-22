import type { QuoteEstimate, QuoteFinish, QuoteSize, ServiceId, VltOption } from '@/types/site';

const estimateBases: Record<ServiceId, QuoteEstimate> = {
  auto: { low: 275, high: 525 },
  residential: { low: 650, high: 1_250 },
  commercial: { low: 900, high: 2_000 },
  ppf: { low: 850, high: 1_800 },
  wraps: { low: 1_400, high: 2_800 },
  marine: { low: 700, high: 1_600 },
};

const sizeMultipliers: Record<QuoteSize, number> = {
  small: 0.8,
  standard: 1,
  large: 1.35,
};

const finishMultipliers: Record<QuoteFinish, number> = {
  dyed: 0.9,
  ceramic: 1.15,
  premium: 1.35,
};

export function calculateEstimate(
  service: ServiceId,
  size: QuoteSize,
  finish: QuoteFinish,
): QuoteEstimate {
  const base = estimateBases[service];
  const multiplier = sizeMultipliers[size] * finishMultipliers[finish];

  return {
    low: Math.round((base.low * multiplier) / 25) * 25,
    high: Math.round((base.high * multiplier) / 25) * 25,
  };
}

export function findVltOption(value: number, options: VltOption[]): VltOption {
  return options.reduce((closest, option) =>
    Math.abs(option.value - value) < Math.abs(closest.value - value)
      ? option
      : closest,
  );
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
