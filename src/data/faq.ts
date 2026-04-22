import { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: 'When is my coffee roasted?',
    answer: 'We roast to order. Your coffee is roasted within 24-48 hours of your order being placed, ensuring maximum freshness. Each bag is stamped with the exact roast date.',
    category: 'freshness',
  },
  {
    question: 'How should I store my coffee?',
    answer: 'Store your coffee in the resealable bag it arrives in, at room temperature, away from direct sunlight. Avoid the refrigerator or freezer for daily-use coffee. For best flavor, consume within 4 weeks of the roast date.',
    category: 'freshness',
  },
  {
    question: 'What grind size should I choose?',
    answer: 'We offer whole bean (recommended for freshest flavor), coarse (French press, cold brew), medium (drip, pour over), and fine (espresso, Moka pot). If unsure, whole bean with a burr grinder gives you the most control.',
    category: 'brewing',
  },
  {
    question: 'How does the subscription work?',
    answer: 'Choose your preferred coffee (or let us surprise you), select your frequency (weekly, bi-weekly, or monthly), and your grind preference. You can pause, skip, swap coffees, or cancel anytime from your account dashboard. Subscribers save 15% on every bag.',
    category: 'subscription',
  },
  {
    question: 'Can I change or cancel my subscription?',
    answer: 'Absolutely. There are no contracts or commitments. Log into your account to change your coffee selection, adjust frequency, pause deliveries, or cancel entirely. Changes made before noon will apply to your next shipment.',
    category: 'subscription',
  },
  {
    question: 'Where do you source your coffee?',
    answer: 'We source directly from smallholder farmers and cooperatives in Ethiopia, Colombia, Guatemala, Kenya, Brazil, Sumatra, Costa Rica, and Rwanda. We visit origin at least twice a year and pay 30-50% above commodity market prices.',
    category: 'sourcing',
  },
  {
    question: 'What does "direct trade" mean?',
    answer: 'Direct trade means we buy directly from producers, cutting out middlemen. This ensures farmers receive a larger share of the final price, and we can verify quality and working conditions firsthand. It\'s more rigorous than Fair Trade certification.',
    category: 'sourcing',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes — all orders over $40 ship free within the continental US. Subscription orders always ship free regardless of size. Standard shipping is a flat $5.95 for orders under $40.',
    category: 'shipping',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Orders are roasted and shipped within 1-2 business days. Standard delivery takes 3-5 business days. Expedited (1-2 day) shipping is available at checkout for an additional fee.',
    category: 'shipping',
  },
  {
    question: 'Are your bags recyclable?',
    answer: 'Our bags are made from kraft paper with a plant-based lining and are fully compostable in commercial composting facilities. The one-way valve is also compostable. We\'re committed to eliminating single-use plastics from our packaging by 2026.',
    category: 'sustainability',
  },
];
