import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="p-6 md:p-8 bg-cream-100 border border-cream-400 rounded-sm">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-terra-300 text-terra-300' : 'text-cream-400'}`}
          />
        ))}
      </div>
      <p className="text-body font-sans text-midnight-400 leading-relaxed mb-5 italic">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-body-sm font-sans font-medium text-midnight-500">{review.name}</p>
          <p className="text-caption text-rose-400 font-sans">on {review.product}</p>
        </div>
        <p className="text-caption text-midnight-200 font-sans">{review.date}</p>
      </div>
    </div>
  );
}
