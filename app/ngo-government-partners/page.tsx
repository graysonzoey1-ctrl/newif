'use client';

export default function NGOGovernmentPartners() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">NGO & Government Partners</h1>
        <p className="text-xl text-gray-700 mb-12">Collaborating with civil society and government for systemic change.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              NEWIF works with NGOs and government agencies to coordinate efforts, share resources, and create complementary programs that strengthen entire systems rather than working in silos.
            </p>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
              <p className="text-gray-700">
                We believe that systemic change requires multi-stakeholder collaboration where government provides policy framework, NGOs provide innovation and community connection, and all parties work toward shared goals.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Areas of Collaboration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Policy Advocacy', desc: 'Influencing policies to protect and empower vulnerable groups' },
                { title: 'Program Coordination', desc: 'Aligning efforts to eliminate duplication and maximize coverage' },
                { title: 'Capacity Building', desc: 'Strengthening partners\' institutional and technical capabilities' },
                { title: 'Data Sharing', desc: 'Using evidence to inform joint planning and decisions' },
              ].map((area, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{area.title}</h3>
                  <p className="text-gray-700">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Current Strategic Partnerships</h2>
            <p className="text-gray-700 mb-6">
              We work with over 200 organizations globally, including international NGOs, local grassroots organizations, government ministries, and UN agencies. Our partnership network spans education, health, gender, disability, and development sectors.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
