"use client"

export default function WhoWeArePage() {
  return (
    <div>
      {/* PAGE TITLE SECTION - Navy with Gold & Pink Accents */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32" style={{ backgroundColor: '#0B1C2D' }}>
        {/* Decorative gradient accent from pink to gold */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full" style={{ background: 'radial-gradient(circle, #E91E63 0%, #D4AF37 100%)' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-wide">
              WHO WE ARE
            </h1>
            
            {/* Gold and Pink Accent Line */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-1 flex-grow" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E91E63' }} />
              <div className="h-1 flex-grow" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
            </div>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 leading-relaxed mb-8 max-w-4xl mx-auto">
              A Global Institutional Initiative Advancing Disability Inclusion, Women's Empowerment, and Sustainable Community Impact.
            </h2>

            {/* Description Paragraph */}
            <p className="text-lg text-gray-200 leading-relaxed mx-auto max-w-3xl">
              Network Empowerment for Women International Force (NEWIF) is a registered nonprofit organization creating measurable pathways that expand opportunity and strengthen marginalized communities through structured education, advocacy, and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION - Cream Background with Navy Accents */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F8F5F2' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
              {/* Left Column: Title with Gold and Pink Accent */}
              <div>
                <h2 className="text-5xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#0B1C2D' }}>
                  Our Story
                </h2>
                <div className="flex gap-2 mb-8">
                  <div className="h-1 w-12" style={{ backgroundColor: '#D4AF37' }} />
                  <div className="h-1 w-6" style={{ backgroundColor: '#E91E63' }} />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  NEWIF was established to respond to persistent inequalities affecting women, children, and persons with disabilities. What began as a focused community initiative has grown into a structured empowerment movement delivering educational support, vocational training, advocacy programs, and community-based interventions.
                </p>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Our team of professionals and volunteers brings together expertise in education, social development, leadership, and disability advocacy to drive measurable, long-term impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, PURPOSE - Soft Pink/Navy Blend Background */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #FAF3F0 0%, #F0F4F9 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {/* Mission */}
              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: '#0B1C2D' }}>
                  Mission
                </h3>
                <div className="flex gap-1.5 mb-6">
                  <div className="h-1 w-8" style={{ backgroundColor: '#D4AF37' }} />
                  <div className="h-1 w-4" style={{ backgroundColor: '#E91E63' }} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  To empower women, children, and persons with disabilities through comprehensive education, vocational training, and advocacy programs that create sustainable change and opportunity.
                </p>
              </div>

              {/* Vision */}
              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: '#0B1C2D' }}>
                  Vision
                </h3>
                <div className="flex gap-1.5 mb-6">
                  <div className="h-1 w-8" style={{ backgroundColor: '#D4AF37' }} />
                  <div className="h-1 w-4" style={{ backgroundColor: '#E91E63' }} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  A world where every woman, child, and person with disabilities has equal access to opportunities, resources, and the power to shape their own future.
                </p>
              </div>

              {/* Purpose */}
              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: '#0B1C2D' }}>
                  Purpose
                </h3>
                <div className="flex gap-1.5 mb-6">
                  <div className="h-1 w-8" style={{ backgroundColor: '#D4AF37' }} />
                  <div className="h-1 w-4" style={{ backgroundColor: '#E91E63' }} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Building inclusive communities through education, training, and action. We believe in creating pathways to empowerment that transform lives and strengthen societies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OBJECTIVES - Navy Background with Gold & Pink Design Elements */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0B1C2D' }}>
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-80 h-80 opacity-5 rounded-full" style={{ background: 'radial-gradient(circle, #E91E63 0%, #D4AF37 100%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Objectives
              </h2>
              
              {/* Centered Gold and Pink Accent */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 flex-grow max-w-xs" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E91E63' }} />
                <div className="h-1 flex-grow max-w-xs" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Provide quality education and vocational training programs",
                "Advocate for the rights of women, children, and persons with disabilities",
                "Create sustainable economic opportunities through skills development",
                "Build strong community networks and support systems",
                "Promote gender equality and social inclusion",
                "Partner with organizations to amplify our impact",
              ].map((objective, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-5 p-7 rounded-lg border-l-4 transition-all duration-300 hover:translate-x-2"
                  style={{
                    backgroundColor: 'rgba(232, 201, 87, 0.06)',
                    borderLeftColor: index % 2 === 0 ? '#D4AF37' : '#E91E63'
                  }}
                >
                  <div 
                    className="w-3 h-3 mt-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: index % 2 === 0 ? '#D4AF37' : '#E91E63' }}
                  />
                  <p className="text-base text-gray-100 leading-relaxed">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
