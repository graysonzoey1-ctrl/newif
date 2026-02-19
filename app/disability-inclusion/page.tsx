'use client';

export default function DisabilityInclusion() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Disability Inclusion Program</h1>
        <p className="text-xl text-gray-700 mb-12">Ensuring persons with disabilities have equal access to education, employment, and community participation.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              NEWIF is committed to creating an inclusive society where persons with disabilities have equal opportunities to participate in education, employment, and community life. We work to remove barriers and promote rights-based approaches.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Program Activities</h2>
            <div className="space-y-4">
              {[
                { title: 'Awareness & Advocacy', desc: 'Community awareness campaigns promoting disability rights and inclusion' },
                { title: 'Accessible Education', desc: 'Ensuring schools and training programs are accessible to PWDs' },
                { title: 'Livelihood Skills', desc: 'Vocational training tailored to abilities and aspirations' },
                { title: 'Support Services', desc: 'Assistive devices, mobility aids, and rehabilitation support' },
              ].map((activity, i) => (
                <div key={i} className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{activity.title}</h3>
                  <p className="text-gray-700">{activity.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Impact Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">3,500+</p>
                <p className="text-gray-700">PWDs Supported</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">75%</p>
                <p className="text-gray-700">School Enrollment</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">25+</p>
                <p className="text-gray-700">Organizations Partnered</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
