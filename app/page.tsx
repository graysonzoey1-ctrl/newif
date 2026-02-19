import Hero from '@/components/hero';
import ImpactStatisticsStrip from '@/components/impact-statistics-strip';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Impact Statistics */}
      <ImpactStatisticsStrip />

      {/* Multiple Operational Regions */}
      <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 mt-5 uppercase tracking-wider" style={{ color: '#D4AF37' }}>Multiple Operational Regions</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            NEWIF operates across multiple regions, advancing inclusive empowerment initiatives that create measurable, community-centered impact.
          </p>
        </div>
      </section>

      {/* Institutional Identity Snapshot */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 mt-5 uppercase tracking-wider" style={{ color: '#D4AF37' }}>Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Network Empowerment for Women International Force (NEWIF) is a legally registered, disability-inclusive women's empowerment organization based in Ghana. We advance economic independence, leadership development, education, and sustainable livelihoods for women — particularly women with disabilities and those in vulnerable communities. Our work is rooted in equity, inclusion, and long-term community transformation.
          </p>
          <Link href="/who-we-are" className="inline-block px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
            Learn More About NEWIF
          </Link>
        </div>
      </section>

      {/* Strategic Pillars Summary */}
      <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center mt-5 uppercase tracking-wider" style={{ color: '#D4AF37' }}>What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="text-lg font-bold text-primary mb-2">Women's Economic Empowerment</h3>
              <p className="text-gray-600 text-sm">Business formalization, entrepreneurship training, financial literacy, and income-generation strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="text-lg font-bold text-primary mb-2">Disability Inclusion</h3>
              <p className="text-gray-600 text-sm">Equitable access initiatives, advocacy, and economic participation for women with disabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="text-lg font-bold text-primary mb-2">Education & Skills</h3>
              <p className="text-gray-600 text-sm">Vocational training, digital literacy, and structured capacity-building programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="text-lg font-bold text-primary mb-2">Community Resilience</h3>
              <p className="text-gray-600 text-sm">Rural enterprise development, leadership strengthening, and sustainable livelihood systems.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/programs" className="inline-block px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Governance & Oversight Snapshot */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t-4 border-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 mt-5 uppercase tracking-wider" style={{ color: '#D4AF37' }}>Our Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            NEWIF maintains transparent governance, measurable program outcomes, and compliance with Ghana's nonprofit regulatory framework. Our impact reflects structured empowerment initiatives, legal compliance, and accountable leadership.
          </p>
          <Link href="/governance-leadership" className="inline-block px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
            Learn About Our Governance
          </Link>
        </div>
      </section>

      {/* Transparency & Safeguarding Snapshot */}
      <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 mt-5 uppercase tracking-wider" style={{ color: '#D4AF37' }}>Legal</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            NEWIF operates under Ghana's legal and regulatory framework. We uphold child protection policies, gender-based violence prevention standards, financial accountability systems, and transparent reporting mechanisms.
          </p>
          <Link href="/transparency-accountability" className="inline-block px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
            Learn More
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-24 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Be Part of the Movement</h2>
          <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Join NEWIF in advancing disability-inclusive women's empowerment, education access, economic independence, and community resilience.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/membership" className="px-6 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg text-center" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
              Become a Member
            </Link>
            <Link href="/volunteer" className="px-6 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg text-center">
              Volunteer
            </Link>
            <Link href="/partnerships" className="px-6 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg text-center" style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}>
              Partner With Us
            </Link>
            <Link href="/donate" className="px-6 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center">
              Support Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
