export default function AdvocacyAwarenessPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Advocacy & <span className="text-green-600">Awareness</span>
              </h1>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Amplifying voices and promoting rights, equality, and social inclusion
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Advocacy and Awareness programs work to create systemic change by promoting rights, challenging
                discrimination, and raising awareness about issues affecting marginalized communities. We amplify voices
                that are often unheard and advocate for policies that promote equality and inclusion.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Campaign Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Women's Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advocating for gender equality, women's empowerment, and ending violence against women and girls.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Children's Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promoting child protection, education access, and creating safe environments for children to thrive.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Disability Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advocating for accessibility, inclusion, and equal opportunities for persons with disabilities.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">Social Inclusion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promoting inclusive policies and practices that ensure everyone can participate fully in society.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Community mobilization and grassroots advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Policy research and evidence-based advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Public awareness campaigns and media engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Strategic partnerships with government and civil society</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Advocacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Be part of the movement for change. Support our advocacy campaigns and help create a more just and
                inclusive society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Join Us
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
