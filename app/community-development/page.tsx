'use client';

export default function CommunityDevelopment() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Community Development Program</h1>
        <p className="text-xl text-gray-700 mb-12">Building sustainable, resilient communities through participatory development initiatives.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We work with communities to identify local priorities and co-create solutions that address root causes of poverty, inequality, and underdevelopment.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Program Components</h2>
            <div className="space-y-4">
              {[
                { title: 'WASH & Health', desc: 'Water, sanitation, and healthcare improvement projects' },
                { title: 'Agricultural Development', desc: 'Sustainable farming techniques and income generation' },
                { title: 'Infrastructure Development', desc: 'Community-owned infrastructure for improved livelihoods' },
                { title: 'Environmental Conservation', desc: 'Protecting natural resources and promoting sustainability' },
              ].map((component, i) => (
                <div key={i} className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{component.title}</h3>
                  <p className="text-gray-700">{component.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-gray-700">Communities Transformed</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">100,000+</p>
                <p className="text-gray-700">People Reached</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">40%</p>
                <p className="text-gray-700">Income Increase</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
