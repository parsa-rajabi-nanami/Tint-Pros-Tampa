import {
  Building2,
  Scissors,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';
import { publicAsset } from '@/lib/assets';
import type { ServiceCard, VltOption } from '@/types/site';

export const PHONE = '(813) 787-5327';
export const TEL = 'tel:8137875327';
export const SMS = 'sms:8137875327';

export const serviceCards: ServiceCard[] = [
  {
    id: 'auto',
    icon: Sparkles,
    title: 'Auto nano-ceramic window tinting',
    copy: 'Maximum heat reduction, glare control, and UV protection for daily drivers, Teslas, Porsches, BMWs, and everything in between.',
    image: publicAsset('/assets/auto-tint.jpg'),
    alt: 'Black sedan with dark ceramic window tint',
    kicker: 'Cooler commutes',
  },
  {
    id: 'ppf',
    icon: ShieldCheck,
    title: 'Paint protection film (PPF / clear bra)',
    copy: 'Self-healing rock-chip armor for the panels that take the most abuse, available in high-gloss or satin finishes.',
    image: publicAsset('/assets/ppf.jpg'),
    alt: 'Installer applying paint protection film to a vehicle',
    kicker: 'Keep the finish',
  },
  {
    id: 'residential',
    icon: Sun,
    title: 'Residential window film',
    copy: 'Cut cooling costs, soften glare, and help protect floors, furniture, and artwork from Tampa sun without losing the view.',
    image: publicAsset('/assets/residential.jpg'),
    alt: 'Home with large tinted arched windows',
    kicker: 'Comfort at home',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial and architectural tint',
    copy: 'Solar control, frosted decorative glass, and security films for offices, storefronts, and architectural spaces.',
    image: publicAsset('/assets/commercial.jpg'),
    alt: 'Commercial building with reflective window film',
    kicker: 'Better workspaces',
  },
  {
    id: 'wraps',
    icon: Scissors,
    title: 'Vehicle wraps and fleet graphics',
    copy: 'Color changes, commercial vans, box trucks, and boat or marine wraps with clean lines and a finish built to be seen.',
    image: publicAsset('/assets/wrap.jpg'),
    alt: 'Purple color-change vinyl wrap on a luxury sedan',
    kicker: 'Make it yours',
  },
];

export const serviceAreas = [
  'Tampa',
  'Brandon',
  'Clearwater',
  'St. Petersburg',
  'Riverview',
  'Lutz',
  'Wesley Chapel',
  "Land O' Lakes",
  'Palm Harbor',
  'Oldsmar',
  'Valrico',
];

export const serviceZipCodes = [
  '33601', '33602', '33603', '33604', '33605', '33606', '33607', '33609',
  '33610', '33611', '33612', '33613', '33614', '33615', '33616', '33617',
  '33618', '33619', '33620', '33621', '33622', '33624', '33625', '33626',
  '33629', '33634', '33635', '33637', '33647', '33674', '33675', '33677',
  '33679', '33680', '33681', '33682', '33684', '33685', '33686', '33687',
  '33688', '33689', '33694',
];

export const vltOptions: VltOption[] = [
  { value: 70, label: 'Clear', heatRejection: 50 },
  { value: 50, label: 'Light', heatRejection: 58 },
  { value: 35, label: 'Balanced', heatRejection: 70 },
  { value: 20, label: 'Private', heatRejection: 80 },
  { value: 15, label: 'Dark', heatRejection: 85 },
  { value: 5, label: 'Limo', heatRejection: 90 },
];