import {
  Building2,
  CarFront,
  House,
  Scissors,
  ShieldCheck,
  Waves,
} from 'lucide-react';
import type { ServiceCard, ServiceId, VltOption } from '@/types/site';

export const PHONE = '(813) 787-5327';
export const TEL = 'tel:+18137875327';
export const SMS = 'sms:+18137875327';

export const serviceCards: ServiceCard[] = [
  {
    id: 'auto',
    icon: CarFront,
    title: 'Auto window tinting',
    copy: 'We offer mobile auto window tinting installing the best film in Tampa Bay area for the last 22 years. Ask about our ceramic films.',
    image: '/assets/auto-tint.png',
    alt: 'Black sedan with dark ceramic window tint',
    kicker: 'Cooler commutes',
  },
  {
    id: 'residential',
    icon: House,
    title: 'Residential window tinting',
    copy: 'Window tinting your home saves you money on your electric bill, keeping the home cooler and creating privacy.',
    image: '/assets/residential.png',
    alt: 'Home with large tinted arched windows',
    kicker: 'Comfort at home',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial window tinting',
    copy: "Tint Pro's Tampa offers the best and most reliable flat glass window film such as different shades, heat rejection, blackout film, white frost, and decorative films.",
    image: '/assets/commercial.png',
    alt: 'Commercial building with reflective window film',
    kicker: 'Better workspaces',
  },
  {
    id: 'ppf',
    icon: ShieldCheck,
    title: 'Paint protection film',
    copy: "Tint Pro's offers a paint protection film that protects the vehicles paint from every day rocks, road debris, chips, scratches and insects that can leave marks in the paint.",
    image: '/assets/ppf.png',
    alt: 'Installer applying paint protection film to a vehicle',
    kicker: 'Keep the finish',
  },
  {
    id: 'wraps',
    icon: Scissors,
    title: 'Vinyl wraps / color change',
    copy: 'Tint Pros of Tampa Bay specializes in vinyl car wrap designs, advertisements on vehicles, with optional color changes and variations for private or commercial business purposes.',
    image: '/assets/wrap.png',
    alt: 'Purple color-change vinyl wrap on a luxury sedan',
    kicker: 'Make it yours',
  },
  {
    id: 'marine',
    icon: Waves,
    title: 'Marine / boat film application',
    copy: 'Computer Cut System is available for boats, cars, trucks, commercial vans, and box trucks for advertisements.',
    image: '/assets/hero.jpg',
    alt: 'Tint Pros mobile service vehicle at a Tampa Bay home',
    kicker: 'On the water',
  },
];

export const serviceAreas = [
  'Tampa',
  'Brandon',
  'Clearwater',
  'Land O Lakes',
  'Largo',
  'Odessa',
  'New Tampa',
  'Oldsmar',
  'Palm Harbor',
  'Pinellas Park',
  'St.Pete',
  "Town'n'Country",
  'Safety Harbor',
  'Dunedin',
  'Lutz',
  'New Port Richey',
  'Riverview',
  'Temple Terrace',
  'Valrico',
  'Tampa Palms',
  'Wesley Chapel',
  'Tarpon Springs',
];

export const vltOptions: VltOption[] = [
  { value: 5, label: 'Limo', heatRejection: 88 },
  { value: 15, label: 'Dark', heatRejection: 82 },
  { value: 20, label: 'Private', heatRejection: 78 },
  { value: 35, label: 'Balanced', heatRejection: 68 },
  { value: 50, label: 'Light', heatRejection: 56 },
  { value: 70, label: 'Clear', heatRejection: 42 },
];

export const serviceLabels: Record<ServiceId, string> = {
  auto: 'Auto tint',
  residential: 'Home tint',
  commercial: 'Commercial tint',
  ppf: 'PPF',
  wraps: 'Vinyl wrap',
  marine: 'Marine film',
};
