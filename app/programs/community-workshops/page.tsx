export default function CommunityWorkshopsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Community <span className="text-blue-600">Workshops</span>
              </h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Interactive learning experiences that build capacity and foster community development
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Community Workshops bring people together for interactive learning experiences on leadership,
                financial literacy, health awareness, and personal development. These workshops create spaces for
                knowledge sharing, skill building, and community strengthening.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Workshop Topics</h2>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Leadership Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building confident leaders who can drive change in their communities through effective
                    communication, decision-making, and team management skills.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-cyan-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Financial Literacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Practical money management skills including budgeting, saving, investing, and accessing financial
                    services.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-teal-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Health & Wellness</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive health education covering nutrition, reproductive health, mental wellness, and disease
                    prevention.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-indigo-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Personal Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Self-confidence building, goal setting, time management, and life skills training for personal
                    growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Workshops</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Participate in our community workshops and be part of a learning community committed to growth and
                empowerment.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
