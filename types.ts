
export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: number;
  author: string;
  brand: string;
  title: string;
  content: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
