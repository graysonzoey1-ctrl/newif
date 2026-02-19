export default function EducationProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Education <span className="text-secondary">Programs</span>
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering women and children through comprehensive educational support and opportunities
              </p>
            </div>

            {/* Overview */}
            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Education Programs are designed to break down barriers to learning and create pathways to success
                for women and children. We believe that education is the foundation for empowerment and sustainable
                development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through scholarships, literacy programs, and academic mentorship, we provide comprehensive support that
                addresses the unique challenges faced by marginalized communities in accessing quality education.
              </p>
            </div>

            {/* Key Components */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-secondary rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Literacy Programs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Basic and advanced literacy training for women and children who have limited access to formal
                    education. Our programs focus on reading, writing, and numeracy skills essential for daily life and
                    further learning.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-accent rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Scholarship Programs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Financial support for deserving students to pursue primary, secondary, and tertiary education. We
                    cover tuition fees, books, uniforms, and other educational materials to ensure no child is left
                    behind due to financial constraints.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Academic Mentorship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One-on-one and group mentorship programs connecting students with experienced educators and
                    professionals. Our mentors provide guidance, tutoring, and career counseling to help students
                    achieve their academic goals.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Digital Literacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Computer and technology training to prepare students for the digital age. We provide access to
                    computers, internet, and training in essential software and online tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-secondary/10 to-pink-100 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <p className="text-muted-foreground">Students Supported</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">150+</div>
                  <p className="text-muted-foreground">Scholarships Awarded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <p className="text-muted-foreground">Completion Rate</p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Get Involved</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Support our Education Programs through donations, volunteering, or sponsoring a student. Together, we
                can create lasting change through education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Donate Now
                </a>
                <a
                  href="/membership/volunteer"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
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
