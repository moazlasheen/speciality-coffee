import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'explorer',
    name: 'The Explorer',
    frequency: 'monthly',
    bags: 1,
    pricePerBag: 18.70,
    description: 'One bag of our roaster\'s choice each month. Perfect for the curious drinker who wants to taste the world.',
  },
  {
    id: 'ritual',
    name: 'The Ritual',
    frequency: 'biweekly',
    bags: 1,
    pricePerBag: 17.85,
    description: 'A fresh bag every two weeks. For the daily brewer who never wants to run out of great coffee.',
  },
  {
    id: 'devoted',
    name: 'The Devoted',
    frequency: 'weekly',
    bags: 1,
    pricePerBag: 16.95,
    description: 'Weekly deliveries for the serious coffee household. Maximum freshness, maximum savings.',
  },
];
