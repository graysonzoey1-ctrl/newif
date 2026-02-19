"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { User, Building2, HandHeart, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Membership() {
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

  const options = [
    {
      icon: User,
      title: "Individual Membership",
      description:
        "Join as an individual member and be part of our empowerment movement. Access exclusive events, workshops, and networking opportunities.",
      benefits: [
        "Monthly newsletters and updates",
        "Access to member-only events",
        "Networking opportunities",
        "Volunteer opportunities",
      ],
      link: "/membership/individual",
    },
    {
      icon: Building2,
      title: "Organizational Membership",
      description:
        "Partner with us as an organization to amplify impact. Collaborate on programs and initiatives that create meaningful change.",
      benefits: [
        "Partnership opportunities",
        "Co-branded initiatives",
        "Corporate volunteer programs",
        "Impact reporting",
      ],
      link: "/membership/organizational",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Contribute your time and skills to support our programs. Make a direct impact in the lives of women, children, and persons with disabilities.",
      benefits: [
        "Flexible volunteer schedules",
        "Skills-based opportunities",
        "Training and support",
        "Community impact",
      ],
      link: "/membership/volunteer",
    },
    {
      icon: DollarSign,
      title: "Donate",
      description:
        "Your financial support helps us expand our reach and deepen our impact. Every contribution makes a difference.",
      benefits: [
        "Tax-deductible donations",
        "Transparent fund allocation",
        "Regular impact updates",
        "Recognition opportunities",
      ],
      link: "/donate",
    },
  ]

  return (
    <section id="membership" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get <span className="text-secondary">Involved</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in creating lasting change. There are many ways to support our mission and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {options.map((option, index) => (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl p-8 soft-shadow hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{option.description}</p>
                <ul className="space-y-3 mb-6">
                  {option.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {option.link ? (
                  <Link href={option.link}>
                    <Button className="w-full gradient-accent text-white hover:opacity-90">
                      {option.title === "Donate" ? "Donate Now" : "Learn More"}
                    </Button>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          <div className="scroll-reveal mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of supporters who are creating positive change in communities around the world.
            </p>
            <Link href="/membership/individual">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Join the Movement Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
