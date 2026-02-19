'use client';

export default function ImpactSummary() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-12">Our Impact</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-8 rounded-lg">
                <p className="text-5xl font-bold text-accent mb-2">50,000+</p>
                <p className="text-lg text-primary font-semibold">Direct Beneficiaries</p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-lg">
                <p className="text-5xl font-bold text-primary mb-2">16+</p>
                <p className="text-lg text-primary font-semibold">Countries Operating In</p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-8 rounded-lg">
                <p className="text-5xl font-bold text-accent mb-2">200+</p>
                <p className="text-lg text-primary font-semibold">Partner Organizations</p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-lg">
                <p className="text-5xl font-bold text-primary mb-2">10,000+</p>
                <p className="text-lg text-primary font-semibold">Jobs Created</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">What We've Accomplished</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-2">Educational Access</h3>
                <p className="text-gray-700">Provided quality education to over 15,000 children in disadvantaged communities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-2">Economic Empowerment</h3>
                <p className="text-gray-700">Trained 5,000+ women in vocational skills, with 80% securing sustainable employment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-2">Disability Inclusion</h3>
                <p className="text-gray-700">Supported 3,500+ persons with disabilities in accessing education and livelihood opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-2">Community Development</h3>
                <p className="text-gray-700">Transformed 50+ communities through sustainable development initiatives.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Testimonials</h2>
            <p className="text-gray-700 mb-6">
              Real stories from the communities we serve showcase the transformative power of our programs.
            </p>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-3">"NEWIF gave me the skills and confidence to start my own business. I now earn enough to support my family."</p>
                <p className="font-semibold text-primary">- Sarah, Women Empowerment Beneficiary</p>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-3">"Through the Disability Inclusion Program, my son got enrolled in school. We never thought this was possible."</p>
                <p className="font-semibold text-primary">- Maria, Parent</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
