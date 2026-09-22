import type { LucideIcon } from 'lucide-react';

export type ServiceId =
  | 'auto'
  | 'residential'
  | 'commercial'
  | 'ppf'
  | 'wraps';

export interface ServiceCard {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  copy: string;
  image: string;
  alt: string;
  kicker: string;
}

export type VltOption = {
  value: number;
  label: string;
  heatRejection: number;
};