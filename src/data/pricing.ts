// Pricing interface definition for Argentine PT market
// Includes local currency and market-specific features
export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
  description: string;
}

// Pricing plans optimized for Buenos Aires market
// Uses ARS currency and local payment preferences
export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Plan Básico",
    price: "ARS $15.000",
    duration: "/mes",
    popular: false,
    description: "Ideal para comenzar tu transformación",
    features: [
      "Rutina personalizada",
      "Seguimiento semanal",
      "Acceso a videos",
      "Soporte por WhatsApp"
    ]
  },
  {
    id: 2,
    name: "Plan Premium",
    price: "ARS $25.000",
    duration: "/mes",
    popular: true,
    description: "La opción más elegida por nuestros clientes",
    features: [
      "Todo del Plan Básico",
      "Asesoría nutricional completa",
      "Ajustes bi-semanales",
      "Llamadas de seguimiento",
      "Plan alimentario personalizado"
    ]
  },
  {
    id: 3,
    name: "Plan Elite",
    price: "ARS $35.000",
    duration: "/mes",
    popular: false,
    description: "Transformación completa con resultados garantizados",
    features: [
      "Todo del Plan Premium",
      "Soporte 24/7",
      "Sesiones de coaching",
      "Análisis corporal mensual",
      "Acceso prioritario",
      "Garantía de resultados"
    ]
  }
];