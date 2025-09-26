// Testimonial interface definition
// Separating testimonial data enables easy content management for Argentine market
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

// Testimonials data array optimized for Argentine PT market
// Local names and cultural context for better connection
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "En 3 meses bajé 15 kilos y gané mucha fuerza. El seguimiento por WhatsApp fue clave, siempre estaba ahí para resolver mis dudas.",
    author: "María González",
    position: "Contadora"
  },
  {
    id: 2,
    quote: "Nunca pensé que podía entrenar en casa y tener resultados tan buenos. Las rutinas son super claras y el plan nutricional es fácil de seguir.",
    author: "Carlos Mendoza",
    position: "Ingeniero"
  },
  {
    id: 3,
    quote: "Después de años sin hacer ejercicio, finalmente encontré un método que funciona. La atención personalizada marca la diferencia.",
    author: "Ana Martínez",
    position: "Profesora"
  }
];