import type { LucideIcon } from 'lucide-react';

export type ServiceId =
  | 'auto'
  | 'residential'
  | 'commercial'
  | 'ppf'
  | 'wraps'
  | 'marine';

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

export type QuoteSize = 'small' | 'standard' | 'large';
export type QuoteFinish = 'dyed' | 'ceramic' | 'premium';

export interface QuoteEstimate {
  low: number;
  high: number;
}

export interface QuoteRequest {
  name: string;
  email: string;
  subject: string;
  phone: string;
  address: string;
  appointment: string;
}
