'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      text: 'NEWIF gave me the skills and confidence to start my own business. I now employ 5 women and earn enough to support my family.',
      author: 'Sarah Boateng',
      role: 'Women Empowerment Program',
    },
    {
      text: 'Thanks to the Disability Inclusion Program, my son got enrolled in school. We never thought this was possible.',
      author: 'Maria Owusu',
      role: 'Parent',
    },
    {
      text: 'I completed secondary school with NEWIF scholarship and now study nursing. I want to give back to my community.',
      author: 'Rebecca Mensah',
      role: 'Scholarship Beneficiary',
    },
    {
      text: 'Our village now has clean water, improved roads, and a health clinic. NEWIF helped us build a sustainable future.',
      author: 'Chief Kwame',
      role: 'Community Leader',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Stories That Inspire</h2>

        <div className="bg-white p-12 rounded-lg shadow-lg">
          <p className="text-6xl text-accent mb-6">❝</p>
          <p className="text-2xl text-gray-700 mb-8 italic leading-relaxed">{testimonials[current].text}</p>
          <p className="text-lg font-bold text-primary mb-1">{testimonials[current].author}</p>
          <p className="text-gray-600 mb-8">{testimonials[current].role}</p>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-accent w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
