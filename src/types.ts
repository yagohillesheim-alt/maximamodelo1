export interface TriagemData {
  segmento: string;
  tipologia: string;
  necessidade: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  resolve: string;
  indicatedFor: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface Segment {
  id: string;
  title: string;
  painPoints: string;
  solution: string;
  icon: string;
}
