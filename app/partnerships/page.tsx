'use client';

import Link from 'next/link';

export default function Partnerships() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Our Partnerships</h1>
        <p className="text-xl text-gray-700 mb-12">Collaborating with diverse organizations to amplify our impact and reach.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/corporate-partners" className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <p className="text-3xl mb-3">🏢</p>
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent">Corporate Partners</h3>
                <p className="text-gray-700">Companies supporting our mission through funding, in-kind donations, and CSR programs.</p>
              </Link>
              <Link href="/ngo-government-partners" className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <p className="text-3xl mb-3">🤝</p>
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent">NGO & Government Partners</h3>
                <p className="text-gray-700">Collaborative relationships with civil society and government institutions.</p>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Why Partner With Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Proven Track Record</h4>
                  <p className="text-gray-700">20+ years of demonstrated impact in community development</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Transparent Operations</h4>
                  <p className="text-gray-700">Regular reporting and third-party audits ensure accountability</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Sustainable Impact</h4>
                  <p className="text-gray-700">Programs designed for long-term community benefit</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Community-Led</h4>
                  <p className="text-gray-700">Communities shape priorities and solutions</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Interested in Partnering?</h2>
            <p className="text-gray-700 mb-6">
              We welcome partnerships that align with our mission and values. Explore opportunities to collaborate with us.
            </p>
            <a href="/contact" className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90">
              Get in Touch
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
