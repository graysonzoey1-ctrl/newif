"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Briefcase, Users, BookOpen, Heart, Megaphone } from "lucide-react"

export default function ProgramsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description:
        "Comprehensive educational support including literacy programs, scholarships, and academic mentorship for women and children.",
      color: "from-secondary to-pink-400",
    },
    {
      icon: Briefcase,
      title: "Vocational Training",
      description:
        "Skills development programs in tailoring, technology, entrepreneurship, and other trades to create economic opportunities.",
      color: "from-accent to-yellow-400",
    },
    {
      icon: Users,
      title: "Community Workshops",
      description:
        "Interactive workshops on leadership, financial literacy, health awareness, and personal development.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: BookOpen,
      title: "Capacity Building",
      description: "Training programs that build organizational capacity and leadership skills within communities.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Heart,
      title: "Support Services",
      description: "Counseling, mentorship, and support networks for women, children, and persons with disabilities.",
      color: "from-red-500 to-pink-400",
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description:
        "Campaigns and initiatives promoting rights, equality, and social inclusion for marginalized communities.",
      color: "from-green-500 to-teal-400",
    },
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive initiatives designed to empower, educate, and create lasting change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="scroll-reveal group bg-muted rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                <button className="text-secondary font-semibold hover:underline">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
