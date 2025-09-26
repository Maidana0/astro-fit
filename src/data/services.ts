// Service interface definition
// Separating data from components in Astro promotes maintainability,
// enables type safety, and allows easy content updates without touching component logic
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Placeholder icon name for future icon system integration
  features: string[]; // List of benefits or included items for each service
}

// Services data array with complete fitness service information
// This centralized data can be imported across multiple Astro components
export const services: Service[] = [
  {
    id: 1,
    title: 'Personal Training',
    description:
      'One-on-one fitness coaching tailored to your specific goals and fitness level.',
    icon: 'dumbbell',
    features: [
      'Customized workout plans',
      'Progress tracking',
      'Nutrition guidance',
      '24/7 support',
    ],
  },
  {
    id: 2,
    title: 'Nutrition Plans',
    description:
      'Customized meal plans and nutritional guidance to support your fitness journey.',
    icon: 'nutrition',
    features: [
      'Personalized meal plans',
      'Macro tracking',
      'Recipe suggestions',
      'Weekly check-ins',
    ],
  },
  {
    id: 3,
    title: 'Group Classes',
    description:
      'High-energy group fitness sessions including HIIT, yoga, and strength training.',
    icon: 'group',
    features: [
      'Multiple class types',
      'All skill levels',
      'Community support',
      'Flexible scheduling',
    ],
  },
];
