'use client';

import Link from 'next/link';

export default function ProgramsOverview() {
  const programs = [
    {
      title: 'Women Empowerment',
      href: '/women-empowerment',
      desc: 'Comprehensive programs designed to empower women through education, skills training, and economic opportunities.'
    },
    {
      title: 'Disability Inclusion',
      href: '/disability-inclusion',
      desc: 'Advocacy and support programs ensuring persons with disabilities have equal access to education and employment.'
    },
    {
      title: 'Child Protection & Education',
      href: '/child-protection-education',
      desc: 'Programs protecting children\'s rights while providing quality education and developmental support.'
    },
    {
      title: 'Community Development',
      href: '/community-development',
      desc: 'Sustainable community-led development initiatives addressing local needs and building resilience.'
    },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Our Programs</h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          NEWIF delivers integrated programs across four core focus areas, all designed to create lasting empowerment and sustainable development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <Link
              key={i}
              href={prog.href}
              className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-accent transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{prog.title}</h2>
              <p className="text-gray-700 mb-4">{prog.desc}</p>
              <span className="text-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
