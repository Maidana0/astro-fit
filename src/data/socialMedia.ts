// Social media posts data for content authority
// Instagram posts showcase for fitness tips and engagement

export interface SocialPost {
  title: string;
  description: string;
  gradient: string;
  slug: string;
}

export const socialPosts: SocialPost[] = [
  {
    title: 'Rutina de Piernas',
    description: '5 ejercicios para fortalecer tus piernas en casa',
    gradient: 'from-violet-400 to-purple-500',
    slug: 'rutina-piernas'
  },
  {
    title: 'Nutrición Pre-Entreno',
    description: 'Qué comer antes de entrenar para máximo rendimiento',
    gradient: 'from-purple-400 to-indigo-500',
    slug: 'nutricion-pre-entreno'
  },
  {
    title: 'Core Fuerte',
    description: 'Rutina de 10 minutos para fortalecer tu abdomen',
    gradient: 'from-indigo-400 to-blue-500',
    slug: 'ejercicios-core'
  },
  {
    title: 'Hidratación Correcta',
    description: 'Cuánta agua tomar según tu tipo de entrenamiento',
    gradient: 'from-blue-400 to-cyan-500',
    slug: 'hidratacion-fitness'
  },
  {
    title: 'Descanso Activo',
    description: 'La importancia del descanso en tu transformación',
    gradient: 'from-cyan-400 to-teal-500',
    slug: 'descanso-recuperacion'
  },
  {
    title: 'Mantené la Motivación',
    description: '5 estrategias para no abandonar tus objetivos',
    gradient: 'from-teal-400 to-green-500',
    slug: 'motivacion-fitness'
  }
];