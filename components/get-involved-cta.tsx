'use client';

import Link from 'next/link';

export default function GetInvolvedCTA() {
  const options = [
    {
      icon: '💼',
      title: 'Become a Member',
      desc: 'Join our growing community of changemakers and get exclusive member benefits.',
      href: '/membership',
      color: 'from-accent/20 to-primary/20',
    },
    {
      icon: '🤲',
      title: 'Volunteer',
      desc: 'Donate your time and skills to make a direct impact in communities.',
      href: '/volunteer',
      color: 'from-primary/20 to-accent/20',
    },
    {
      icon: '❤️',
      title: 'Donate',
      desc: 'Your financial support fuels our programs and changes lives.',
      href: '/donate',
      color: 'from-accent/20 to-primary/20',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Be Part of the Change</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            There are multiple ways to support NEWIF's mission. Choose how you want to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <Link
              key={i}
              href={option.href}
              className={`group bg-gradient-to-br ${option.color} p-8 rounded-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <p className="text-6xl mb-4 group-hover:scale-150 transition-transform">{option.icon}</p>
              <h3 className="text-2xl font-bold text-primary mb-3">{option.title}</h3>
              <p className="text-gray-700 mb-6">{option.desc}</p>
              <span className="text-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
