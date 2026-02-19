'use client';

import Link from 'next/link';

export default function DonationHighlight() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary via-primary/90 to-accent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Support the Movement</h2>
        <p className="text-xl text-gray-100 mb-8 leading-relaxed">
          Your donation directly transforms lives. 100% of donations support our programs in education, vocational training, and community development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-accent mb-2">$50</p>
            <p className="text-sm">Trains one person in digital skills</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-accent mb-2">$100</p>
            <p className="text-sm">Scholarships for one child for a month</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-accent mb-2">$500</p>
            <p className="text-sm">Supports a community development project</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Donate Now
          </Link>
          <Link
            href="/impact-statistics"
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            See Our Impact
          </Link>
        </div>

        <p className="text-sm text-gray-200 mt-8">
          Tax-deductible donations · Transparent reporting · Your trust matters
        </p>
      </div>
    </section>
  );
}
