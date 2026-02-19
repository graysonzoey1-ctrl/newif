export default function CapacityBuildingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Capacity <span className="text-purple-600">Building</span>
              </h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strengthening organizational capacity and leadership skills within communities
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Capacity Building programs focus on strengthening the skills, competencies, and abilities of
                individuals and organizations to perform effectively and sustainably. We work with community groups,
                local organizations, and leaders to build their capacity for long-term impact.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Organizational Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic planning, governance, resource mobilization, and organizational management training.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Leadership Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing transformational leaders who can inspire change and drive community development
                    initiatives.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Project Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Planning, implementation, monitoring, and evaluation skills for effective project delivery.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Advocacy Skills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Training in policy advocacy, community mobilization, and stakeholder engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Partner With Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strengthen your organization's capacity through our comprehensive training and support programs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
