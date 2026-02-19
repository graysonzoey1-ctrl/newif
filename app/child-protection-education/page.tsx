'use client';

export default function ChildProtectionEducation() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Child Protection & Education Program</h1>
        <p className="text-xl text-gray-700 mb-12">Protecting children's rights while providing quality education and holistic development support.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Program Goals</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting children from abuse, exploitation, and harm while ensuring they have access to quality education and opportunities for healthy development.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Key Initiatives</h2>
            <div className="space-y-4">
              {[
                { title: 'Child Protection Committees', desc: 'Community-based mechanisms to prevent and respond to child abuse' },
                { title: 'School Feeding Programs', desc: 'Nutritional support to improve school attendance and learning' },
                { title: 'Scholarship Programs', desc: 'Financial support for vulnerable children to attend school' },
                { title: 'Psychosocial Support', desc: 'Counseling and mental health support for traumatized children' },
              ].map((initiative, i) => (
                <div key={i} className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{initiative.title}</h3>
                  <p className="text-gray-700">{initiative.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">8,000+</p>
                <p className="text-gray-700">Children in School</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">95%</p>
                <p className="text-gray-700">Retention Rate</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-gray-700">Schools Supported</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
