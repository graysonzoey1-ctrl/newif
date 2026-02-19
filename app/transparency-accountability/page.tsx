'use client';

export default function TransparencyAccountability() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-12">Transparency & Accountability</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment to Transparency</h2>
            <p className="text-gray-700 leading-relaxed">
              NEWIF believes that transparency and accountability are fundamental to building trust with our stakeholders, beneficiaries, and partners. We are committed to operating with integrity and providing clear information about our operations, finances, and impact.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Financial Accountability</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-2">Annual Audits</h3>
                <p className="text-gray-700">Independent external audits are conducted annually and made publicly available.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-2">Financial Reporting</h3>
                <p className="text-gray-700">Detailed financial reports are published quarterly showing income, expenses, and fund allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-2">Donor Funding</h3>
                <p className="text-gray-700">We maintain clear records of all funding sources and how donor contributions are utilized.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Impact Reporting</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We regularly report on our programmatic impact using both quantitative and qualitative data:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Quarterly program performance reports</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Annual impact assessment and evaluation studies</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Beneficiary testimonials and case studies</li>
              <li className="flex items-start"><span className="text-accent mr-3">•</span> Long-term outcome tracking and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Feedback & Complaints</h2>
            <p className="text-gray-700 leading-relaxed">
              We value feedback from all stakeholders. Our feedback mechanisms ensure that concerns are heard, documented, and addressed promptly with appropriate follow-up and resolution.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
