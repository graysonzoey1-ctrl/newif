"use client"

import { useEffect, useRef } from "react"
import { Target, Eye, Lightbulb, Zap } from "lucide-react"

export default function About() {
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

  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "To empower women, children, and persons with disabilities through comprehensive education, vocational training, and advocacy programs that create sustainable change and opportunity.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      content:
        "A world where every woman, child, and person with disabilities has equal access to opportunities, resources, and the power to shape their own future.",
    },
    {
      icon: Lightbulb,
      title: "Our Purpose",
      content:
        "Building inclusive communities through education, training, and action. We believe in creating pathways to empowerment that transform lives and strengthen societies.",
    },
    {
      icon: Zap,
      title: "Power in Action",
      content:
        'NEWIF represents more than an organization—it\'s a movement. "Power in Action" means turning vision into reality through concrete programs, partnerships, and community engagement.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-secondary">NEWIF</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Network Empowerment for Women International Force is dedicated to creating meaningful change through
              education, advocacy, and action.
            </p>
          </div>

          {/* Who We Are */}
          <div className="scroll-reveal bg-white rounded-2xl p-8 md:p-12 soft-shadow mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">Who We Are</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEWIF is a registered non-profit organization committed to empowering marginalized communities through
              comprehensive support programs. We work at the intersection of education, economic empowerment, and social
              advocacy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of dedicated professionals and volunteers brings together expertise in education, social work,
              vocational training, and community development to create lasting impact.
            </p>
          </div>

          {/* Mission, Vision, Purpose Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl p-8 soft-shadow hover:shadow-xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <div className="scroll-reveal mt-12 bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Our Objectives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Provide quality education and vocational training programs",
                "Advocate for the rights of women, children, and persons with disabilities",
                "Create sustainable economic opportunities through skills development",
                "Build strong community networks and support systems",
                "Promote gender equality and social inclusion",
                "Partner with organizations to amplify our impact",
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/90 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
