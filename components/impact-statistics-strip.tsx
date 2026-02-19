'use client';

import { useEffect, useState } from 'react';

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: '90+', label: 'Individuals Reached (2024)' },
  { number: '3', label: 'Structured Empowerment Initiatives' },
  { number: 'Multiple Operational Regions', label: 'Inclusive Impact' },
];

export default function ImpactStatisticsStrip() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-sm sm:text-base text-primary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
