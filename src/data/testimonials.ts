// Testimonial interface definition
// Separating testimonial data enables easy content management and type safety
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

// Testimonials data array with client success stories
// Centralized data can be imported across multiple components
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "AstroFit transformed my approach to fitness. The personalized training and nutrition guidance helped me achieve goals I never thought possible.",
    author: "Sarah Johnson",
    position: "Marketing Manager"
  },
  {
    id: 2,
    quote: "The group classes are incredible! The community support and expert instruction keep me motivated and coming back every week.",
    author: "Mike Chen",
    position: "Software Developer"
  },
  {
    id: 3,
    quote: "After struggling with fitness for years, AstroFit's comprehensive approach finally gave me the results and confidence I was looking for.",
    author: "Emily Rodriguez",
    position: "Teacher"
  }
];