"use client"

import { useEffect, useRef } from "react"

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const partners = [
    "UN Women",
    "World Bank",
    "UNICEF",
    "Global Fund for Women",
    "Ford Foundation",
    "Gates Foundation",
    "Oxfam International",
    "Care International",
  ]

  return (
    <section id="partners" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We collaborate with leading organizations to amplify our impact and reach more communities.
            </p>
          </div>

          <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-lg font-semibold text-foreground text-center">{partner}</span>
              </div>
            ))}
          </div>

          <div className="scroll-reveal bg-gradient-to-br from-secondary to-pink-400 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in creating sustainable change. Partner with NEWIF to expand your impact and reach underserved
              communities.
            </p>
            <button className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
