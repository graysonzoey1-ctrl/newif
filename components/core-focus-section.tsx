'use client';

export default function CoreFocusSection() {
  const focusAreas = [
    {
      icon: '👩‍💼',
      title: 'Women Empowerment',
      desc: 'Education, vocational training, and economic opportunities for women.',
    },
    {
      icon: '🤝',
      title: 'Disability Inclusion',
      desc: 'Ensuring persons with disabilities have equal access and opportunities.',
    },
    {
      icon: '👶',
      title: 'Child Protection',
      desc: 'Protecting children\'s rights while providing quality education.',
    },
    {
      icon: '🌱',
      title: 'Community Development',
      desc: 'Sustainable development addressing local needs and building resilience.',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Focus Areas</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We address interconnected challenges through four integrated programs, each designed to create lasting transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <p className="text-6xl mb-4 group-hover:scale-125 transition-transform">{area.icon}</p>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{area.title}</h3>
              <p className="text-gray-700 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
