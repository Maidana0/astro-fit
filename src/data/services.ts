import calendar_clock from '@assets/calendar_clock.svg';
import dining from '@assets/dining.svg';
import exercise from '@assets/exercise.svg';
import type { SvgComponent } from 'astro/types';
// Service interface definition
// Separating data from components in Astro promotes maintainability,
// enables type safety, and allows easy content updates for Argentine market
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: SvgComponent; // Placeholder icon name for future icon system integration
  features: string[]; // List of benefits or included items for each service
}

// Services data array optimized for Argentine PT market
// Focuses on personalized training and nutrition with local terminology
export const services: Service[] = [
  {
    id: 1,
    title: 'Entrenamiento Personalizado',
    description:
      'Rutinas diseñadas específicamente para tus objetivos. Seguimiento constante y ajustes semanales.',
    icon: exercise,
    features: [
      'Rutinas personalizadas',
      'Seguimiento por WhatsApp',
      'Ajustes semanales',
      'Videos explicativos',
    ],
  },
  {
    id: 2,
    title: 'Asesoría Nutricional',
    description:
      'Plan alimentario adaptado a tu estilo de vida y objetivos. Con recetas y lista de compras.',
    icon: dining,
    features: [
      'Plan alimentario personalizado',
      'Recetas fáciles',
      'Lista de compras',
      'Seguimiento semanal',
    ],
  },
  {
    id: 3,
    title: 'Combo Integral',
    description:
      'Entrenamiento + Nutrición + Seguimiento 24/7. La opción más completa para resultados garantizados.',
    icon: calendar_clock,
    features: [
      'Todo incluido',
      'Soporte 24/7',
      'Resultados en 30 días',
      'Descuento especial',
    ],
  },
];
