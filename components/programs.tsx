"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Briefcase, Users, BookOpen, Heart, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Programs() {
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

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description:
        "Comprehensive educational support including literacy programs, scholarships, and academic mentorship for women and children.",
      color: "from-secondary to-pink-400",
      link: "/programs/education",
    },
    {
      icon: Briefcase,
      title: "Vocational Training",
      description:
        "Skills development programs in tailoring, technology, entrepreneurship, and other trades to create economic opportunities.",
      color: "from-accent to-yellow-400",
      link: "/programs/vocational-training",
    },
    {
      icon: Users,
      title: "Community Workshops",
      description:
        "Interactive workshops on leadership, financial literacy, health awareness, and personal development.",
      color: "from-blue-500 to-cyan-400",
      link: "/programs/community-workshops",
    },
    {
      icon: BookOpen,
      title: "Capacity Building",
      description: "Training programs that build organizational capacity and leadership skills within communities.",
      color: "from-purple-500 to-pink-400",
      link: "/programs/capacity-building",
    },
    {
      icon: Heart,
      title: "Support Services",
      description: "Counseling, mentorship, and support networks for women, children, and persons with disabilities.",
      color: "from-red-500 to-pink-400",
      link: "/programs/support-services",
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description:
        "Campaigns and initiatives promoting rights, equality, and social inclusion for marginalized communities.",
      color: "from-green-500 to-teal-400",
      link: "/programs/advocacy-awareness",
    },
  ]

  return (
    <section id="programs" ref={sectionRef} className="py-24 bg-white">
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
                <Link href={program.link} className="text-secondary font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="scroll-reveal text-center mt-16">
            <Link href="/programs">
              <Button
                size="lg"
                className="gradient-accent text-white text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
