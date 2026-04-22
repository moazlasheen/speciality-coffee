import React from 'react';

interface FlavorWheelProps {
  profile: {
    acidity: number;
    body: number;
    sweetness: number;
    bitterness: number;
  };
}

export default function FlavorWheel({ profile }: FlavorWheelProps) {
  const attributes = [
    { label: 'Acidity', value: profile.acidity },
    { label: 'Body', value: profile.body },
    { label: 'Sweetness', value: profile.sweetness },
    { label: 'Bitterness', value: profile.bitterness },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium">
        Flavor Profile
      </h4>
      <div className="space-y-3">
        {attributes.map(attr => (
          <div key={attr.label} className="flex items-center gap-4">
            <span className="w-20 text-body-sm font-sans text-roast-400 text-right">{attr.label}</span>
            <div className="flex-1 h-1.5 bg-cream-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-ember-300 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: `${attr.value * 10}%` }}
              />
            </div>
            <span className="w-6 text-body-sm font-sans text-charcoal-200 tabular-nums">{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
