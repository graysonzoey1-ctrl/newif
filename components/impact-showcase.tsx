'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImpactShowcase() {
  const [stats, setStats] = useState({ women: 0, children: 0, communities: 0, jobs: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let w = 0, c = 0, cm = 0, j = 0;
        const interval = setInterval(() => {
          if (w < 5000) w += 100;
          if (c < 15000) c += 300;
          if (cm < 50) cm += 1;
          if (j < 10000) j += 200;
          setStats({ women: w, children: c, communities: cm, jobs: j });
          if (w === 5000 && c === 15000 && cm === 50 && j === 10000) clearInterval(interval);
        }, 20);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-primary text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-accent mb-2">{stats.women.toLocaleString()}+</p>
            <p className="text-xl font-semibold">Women Trained</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-accent mb-2">{stats.children.toLocaleString()}+</p>
            <p className="text-xl font-semibold">Children Educated</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-accent mb-2">{stats.communities}+</p>
            <p className="text-xl font-semibold">Communities Developed</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-accent mb-2">{stats.jobs.toLocaleString()}+</p>
            <p className="text-xl font-semibold">Jobs Created</p>
          </div>
        </div>
      </div>
    </section>
  );
}
