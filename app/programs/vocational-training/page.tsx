export default function VocationalTrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Vocational <span className="text-accent">Training</span>
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building skills and creating economic opportunities through practical training programs
              </p>
            </div>

            {/* Overview */}
            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Vocational Training programs equip women with practical skills that lead to sustainable income
                generation and economic independence. We focus on market-driven skills that create real employment
                opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From tailoring and crafts to technology and entrepreneurship, our comprehensive training programs
                combine hands-on learning with business development support to ensure participants can successfully
                launch and grow their own enterprises.
              </p>
            </div>

            {/* Training Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Training Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Tailoring & Fashion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional sewing, pattern making, and fashion design training with modern equipment and
                    techniques.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Technology Skills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Computer literacy, digital marketing, graphic design, and basic programming courses.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Entrepreneurship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Business planning, financial management, marketing, and customer service training.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Artisan Crafts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beadwork, jewelry making, soap production, and other income-generating crafts.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-accent/10 to-yellow-100 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">300+</div>
                  <p className="text-muted-foreground">Women Trained</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">120+</div>
                  <p className="text-muted-foreground">Businesses Started</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-muted-foreground">Employment Rate</p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Get Involved</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Support our Vocational Training programs and help women build sustainable livelihoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Donate Now
                </a>
                <a
                  href="/membership/volunteer"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
