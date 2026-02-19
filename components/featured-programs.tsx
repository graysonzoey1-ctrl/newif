'use client';

import Link from 'next/link';

export default function FeaturedPrograms() {
  const programs = [
    {
      title: 'Women Empowerment',
      desc: 'Comprehensive vocational training and business support for women.',
      href: '/women-empowerment',
      stats: '5,000+ women trained',
      color: 'from-accent/20',
    },
    {
      title: 'Disability Inclusion',
      desc: 'Ensuring persons with disabilities access education and employment.',
      href: '/disability-inclusion',
      stats: '3,500+ PWDs supported',
      color: 'from-primary/20',
    },
    {
      title: 'Child Protection',
      desc: 'Protecting children while providing quality education.',
      href: '/child-protection-education',
      stats: '15,000+ children educated',
      color: 'from-accent/20',
    },
    {
      title: 'Community Development',
      desc: 'Building sustainable, resilient communities.',
      href: '/community-development',
      stats: '50+ communities transformed',
      color: 'from-primary/20',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Programs</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our integrated programs addressing education, employment, and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <Link
              key={i}
              href={prog.href}
              className={`group bg-gradient-to-br ${prog.color} to-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{prog.title}</h3>
              <p className="text-gray-700 mb-4">{prog.desc}</p>
              <p className="text-sm font-semibold text-accent mb-4">{prog.stats}</p>
              <span className="text-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
