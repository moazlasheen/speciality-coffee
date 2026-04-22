export interface Product {
  id: string;
  name: string;
  origin: string;
  region: string;
  roastLevel: 'light' | 'medium' | 'medium-dark' | 'dark';
  price: number;
  weight: string;
  tastingNotes: string[];
  description: string;
  longDescription: string;
  altitude: string;
  process: string;
  variety: string;
  brewMethods: string[];
  image: string;
  badge?: string;
  inStock: boolean;
  formats: ('whole-bean' | 'ground' | 'pods')[];
  flavorProfile: {
    acidity: number;
    body: number;
    sweetness: number;
    bitterness: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'brewing' | 'origin' | 'education' | 'recipes';
  image: string;
  date: string;
  readTime: string;
  author: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  grind: string;
  format: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  bags: number;
  pricePerBag: number;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
