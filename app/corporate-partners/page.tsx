'use client';

export default function CorporatePartners() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Corporate Partners</h1>
        <p className="text-xl text-gray-700 mb-12">Working with businesses to create shared value and community impact.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Partnership Models</h2>
            <div className="space-y-4">
              {[
                { title: 'Financial Support', desc: 'Direct funding for programs and operations' },
                { title: 'In-Kind Donations', desc: 'Goods, services, and materials for communities' },
                { title: 'Employee Engagement', desc: 'Volunteer opportunities for corporate staff' },
                { title: 'Technical Expertise', desc: 'Specialized skills and knowledge transfer' },
              ].map((model, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{model.title}</h3>
                  <p className="text-gray-700">{model.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Corporate Social Responsibility</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Companies partnering with NEWIF gain opportunities to demonstrate corporate social responsibility while contributing to sustainable development. Our programs align with SDGs and international development standards.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><span className="font-bold">Tax Benefits:</span> Check local regulations for tax deductions on charitable contributions</p>
              <p className="text-gray-700"><span className="font-bold">Reporting:</span> We provide detailed reports on fund utilization and impact metrics</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
