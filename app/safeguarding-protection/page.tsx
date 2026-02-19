'use client';

export default function SafeguardingProtection() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-12">Safeguarding & Protection</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              NEWIF is deeply committed to creating safe, protective environments for all beneficiaries, particularly children, women, and persons with disabilities. We adhere to the highest safeguarding standards and maintain zero tolerance for abuse, exploitation, or discrimination.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Core Safeguarding Principles</h2>
            <div className="space-y-4">
              {[
                { title: 'Child Protection', desc: 'All children in our programs have their rights protected with strict safeguarding measures' },
                { title: 'Gender-Based Violence Prevention', desc: 'We work to prevent and respond to GBV through awareness and support services' },
                { title: 'Disability Inclusion', desc: 'We ensure persons with disabilities can participate safely and have their rights respected' },
                { title: 'Confidentiality', desc: 'We maintain strict confidentiality for all sensitive information about beneficiaries' },
              ].map((principle, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Reporting Mechanisms</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We have established clear reporting mechanisms for concerns or allegations. All reports are treated confidentially and investigated thoroughly.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">For safeguarding concerns, contact: <span className="font-bold">safeguarding@newif.org</span></p>
              <p className="text-gray-700">Anonymous reports can be submitted through our secure reporting channel.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
