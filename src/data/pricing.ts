// Internal pricing data - mocked here instead of separate file
// Pricing data changes frequently and is component-specific
// Unlike services data which is reused across multiple components
export const pricing = [
  {
    name: 'Basic',
    price: '$29',
    duration: '/month',
    popular: false,
    features: [
      'Access to gym equipment',
      'Basic workout plans',
      'Mobile app access',
      'Community support',
    ],
  },
  {
    name: 'Premium',
    price: '$59',
    duration: '/month',
    popular: true,
    features: [
      'Everything in Basic',
      'Personal trainer sessions',
      'Nutrition consultations',
      'Priority booking',
      'Custom meal plans',
    ],
  },
  {
    name: 'Elite',
    price: '$99',
    duration: '/month',
    popular: false,
    features: [
      'Everything in Premium',
      '24/7 trainer access',
      'Advanced analytics',
      'Recovery sessions',
      'VIP amenities',
    ],
  },
];
