import React from 'react';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-px bg-ember-300" />
      <span className="text-caption uppercase tracking-[0.2em] text-ember-300 font-sans font-medium">
        {label}
      </span>
    </div>
  );
}
