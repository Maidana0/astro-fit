// Value proposition data for Argentine PT market
// Structured data for professional credentials and differentiators
import ElectricBolt from '@assets/electric_bolt.svg';
import School from '@assets/school.svg';
import Chat from '@assets/chat.svg';
import type { JSX } from 'astro/jsx-runtime';

export interface ValuePropItem {
  icon: JSX.Element | string;
  title: string;
  description: string;
}

export const valuePropositions: ValuePropItem[] = [
  {
    icon: School,
    title: 'Profesional Certificado',
    description:
      'Estudiante avanzado de Educación Física con certificaciones en entrenamiento funcional y nutrición deportiva.',
  },
  {
    icon: Chat,
    title: 'Seguimiento por WhatsApp',
    description:
      'Comunicación directa y constante. Resolvemos dudas al instante y ajustamos tu plan según tu progreso.',
  },
  {
    icon: ElectricBolt,
    title: 'Rutinas Flexibles',
    description:
      'Adaptamos los entrenamientos a tu horario, espacio disponible y nivel de experiencia. Casa o gimnasio.',
  },
];
