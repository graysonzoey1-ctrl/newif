export default function SupportServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Support <span className="text-red-600">Services</span>
              </h1>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive support networks for women, children, and persons with disabilities
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Support Services provide holistic care and assistance to individuals facing various challenges. We
                offer counseling, mentorship, and create strong support networks that help people overcome obstacles and
                thrive in their communities.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Services</h2>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Counseling Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional counseling for trauma, domestic violence, mental health, and personal challenges in a
                    safe and confidential environment.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-pink-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Mentorship Programs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connecting individuals with experienced mentors who provide guidance, support, and encouragement for
                    personal and professional growth.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-rose-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Support Networks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building peer support groups and community networks where individuals can share experiences, find
                    solidarity, and access resources.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Disability Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized services and advocacy for persons with disabilities, including accessibility support and
                    inclusive programming.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Access Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reach out to access our support services. All services are confidential and provided with compassion and
                respect.
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
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
