'use client';

export default function ImpactStatistics() {
  const stats = [
    { label: 'Women Trained', value: '5,000+', icon: '👩' },
    { label: 'Children Educated', value: '15,000+', icon: '🎓' },
    { label: 'PWDs Supported', value: '3,500+', icon: '🤝' },
    { label: 'Communities Developed', value: '50+', icon: '🏘' },
    { label: 'Jobs Created', value: '10,000+', icon: '💼' },
    { label: 'Partner Organizations', value: '200+', icon: '🤲' },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Impact Statistics</h1>
        <p className="text-xl text-gray-700 mb-12">Measurable outcomes from our integrated programs across Africa.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <p className="text-5xl mb-3">{stat.icon}</p>
              <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Key Performance Indicators</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <span className="text-gray-700 font-semibold">Program Completion Rate</span>
              <span className="text-2xl font-bold text-primary">87%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <span className="text-gray-700 font-semibold">Employment Success Rate</span>
              <span className="text-2xl font-bold text-primary">80%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <span className="text-gray-700 font-semibold">Income Improvement</span>
              <span className="text-2xl font-bold text-primary">45%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700 font-semibold">Community Satisfaction</span>
              <span className="text-2xl font-bold text-primary">92%</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
