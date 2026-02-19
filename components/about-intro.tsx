'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AboutIntro() {
  const [counters, setCounters] = useState({ regions: 0, reach: 0, programs: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let r = 0, re = 0, p = 0;
        const interval = setInterval(() => {
          if (r < 16) r++;
          if (re < 50) re += 5;
          if (p < 4) p++;
          setCounters({ regions: r, reach: re, programs: p });
          if (r === 16 && re === 50 && p === 4) clearInterval(interval);
        }, 50);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About NEWIF</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Network Empowerment for Women International Force is a pan-African organization dedicated to transforming lives through education, vocational training, and action-oriented advocacy.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe that when women are empowered, communities thrive. Our holistic approach addresses education gaps, economic barriers, and social inequalities.
            </p>
            <Link
              href="/about-newif"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          <div ref={ref} className="grid grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-lg border-l-4 border-accent shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-accent mb-2">{counters.regions}+</p>
              <p className="text-gray-700 font-semibold">Regions Across Africa</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-primary mb-2">{counters.reach * 1000}+</p>
              <p className="text-gray-700 font-semibold">Beneficiaries Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-accent shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-accent mb-2">{counters.programs}</p>
              <p className="text-gray-700 font-semibold">Core Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
