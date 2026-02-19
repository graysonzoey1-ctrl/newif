'use client';

export default function WomenEmpowerment() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Women Empowerment Program</h1>
        <p className="text-xl text-gray-700 mb-12">Empowering women through education, vocational skills, and economic opportunities.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Program Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Women Empowerment Program is designed to unlock the potential of women in disadvantaged communities through comprehensive education, vocational training, and entrepreneurship support.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Key Components</h2>
            <div className="space-y-4">
              {[
                { title: 'Financial Literacy Training', desc: 'Teaching women about saving, investing, and financial management' },
                { title: 'Vocational Skills Training', desc: 'Practical skills in various trades and professions' },
                { title: 'Entrepreneurship Support', desc: 'Business development and startup support for aspiring entrepreneurs' },
                { title: 'Leadership Development', desc: 'Building confidence and leadership skills for community engagement' },
              ].map((component, i) => (
                <div key={i} className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{component.title}</h3>
                  <p className="text-gray-700">{component.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">5,000+</p>
                <p className="text-gray-700">Women Trained</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">80%</p>
                <p className="text-gray-700">Employment Rate</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-4xl font-bold text-accent mb-2">2,000+</p>
                <p className="text-gray-700">Businesses Started</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
