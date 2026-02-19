'use client';

export default function VisionMissionValues() {
  const values = [
    { title: 'Empowerment', desc: 'We believe in unlocking potential and fostering independence in all individuals.', color: '#D4AF37' },
    { title: 'Inclusivity', desc: 'We ensure no one is left behind, particularly vulnerable and marginalized groups.', color: '#E91E63' },
    { title: 'Integrity', desc: 'We maintain transparency and accountability in all our operations and partnerships.', color: '#0B1F3A' },
    { title: 'Innovation', desc: 'We continuously seek new and sustainable solutions to development challenges.', color: '#D4AF37' },
    { title: 'Collaboration', desc: 'We work with partners, communities, and stakeholders to achieve greater impact.', color: '#E91E63' },
    { title: 'Respect', desc: 'We honor the dignity, rights, and cultural context of every individual and community.', color: '#0B1F3A' },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO SECTION - Deep Navy to Royal Blue Gradient */}
      <section className="py-32 md:py-48" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a52 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-end text-right">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-3xl">
                Vision, Mission & Values
              </h1>
              <div className="w-24 h-0.5 mb-16" style={{ backgroundColor: '#D4AF37' }} />
              
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
                  Our Vision
                </h2>
                <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                  A world where women, children, and persons with disabilities are empowered to reach their full potential, contribute meaningfully to their communities, and live with dignity, security, and equal opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION - Clean White Background */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-end text-right">
              <div className="w-12 h-0.5 mb-8" style={{ backgroundColor: '#E91E63' }} />
              <h2 className="text-5xl md:text-5xl font-bold mb-12 max-w-2xl" style={{ color: '#0B1F3A' }}>
                Our Mission
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light max-w-2xl" style={{ color: '#333333' }}>
                To empower women, children, and persons with disabilities through comprehensive education, vocational training, advocacy, and action-oriented development programs that create sustainable pathways for socio-economic growth and community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION - Light Cream Background */}
      <section className="py-32 md:py-48" style={{ backgroundColor: '#FAF7F4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex flex-col items-end text-right mb-8">
                <h2 className="text-5xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
                  Our Core Values
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#333333' }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
