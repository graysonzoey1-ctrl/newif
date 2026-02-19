'use client';

export default function Fundraise() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Fundraise For Us</h1>
        <p className="text-xl text-gray-700 mb-12">Mobilize your network to support NEWIF's mission.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Fundraising Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Personal Fundraiser', desc: 'Set up a personal campaign on GoFundMe or similar platforms' },
                { title: 'Event Fundraiser', desc: 'Organize a community event - concert, sports tournament, dinner' },
                { title: 'Corporate Drive', desc: 'Engage your workplace with a fundraising campaign' },
                { title: 'Social Media Campaign', desc: 'Create buzz on social media with a viral campaign' },
              ].map((idea, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{idea.title}</h3>
                  <p className="text-gray-700">{idea.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">We'll Support You</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-accent mr-3 text-lg">•</span> Marketing materials and graphics</li>
                <li className="flex items-start"><span className="text-accent mr-3 text-lg">•</span> Social media templates and messaging</li>
                <li className="flex items-start"><span className="text-accent mr-3 text-lg">•</span> Stories and testimonials to share</li>
                <li className="flex items-start"><span className="text-accent mr-3 text-lg">•</span> Tax documentation for donors</li>
              </ul>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Get Started Today</h2>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Our Team
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
