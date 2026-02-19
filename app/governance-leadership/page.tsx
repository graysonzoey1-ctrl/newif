'use client';

export default function GovernanceLeadership() {
  const leaders = [
    { name: 'Founder & Executive Director', title: 'Leading organizational strategy and vision' },
    { name: 'Board of Directors', title: 'Strategic governance and oversight' },
    { name: 'Program Directors', title: 'Leading implementation of core programs' },
    { name: 'Finance & Operations Team', title: 'Ensuring financial integrity and efficient operations' },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-12">Leadership & Governance</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Organizational Structure</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              NEWIF operates under a transparent governance structure with clear accountability mechanisms, ensuring effective decision-making and resource management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
                  <p className="text-gray-700">{leader.title}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Board of Directors</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Board comprises experienced professionals committed to advancing NEWIF's mission of empowerment and community development. Board members bring diverse expertise in education, development, finance, and governance.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Governance Principles</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Transparent and accountable decision-making</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Regular financial audits and reporting</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Stakeholder engagement and feedback mechanisms</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Clear conflict of interest policies</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Compliance with international standards</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
