"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Events() {
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

  const events = [
    {
      title: "Women in Leadership Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, Accra",
      description:
        "Join us for a full-day summit featuring inspiring speakers, workshops, and networking opportunities for women leaders.",
      image: "/women-leadership-conference.png",
    },
    {
      title: "Vocational Training Workshop",
      date: "April 8, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "NEWIF Training Center",
      description:
        "Hands-on workshop covering digital skills, entrepreneurship, and business development for aspiring entrepreneurs.",
      image: "/vocational-training-workshop.jpg",
    },
    {
      title: "Community Empowerment Fair",
      date: "May 20, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "City Park, Kumasi",
      description:
        "A community celebration featuring health screenings, educational resources, entertainment, and family activities.",
      image: "/community-fair-celebration.jpg",
    },
  ]

  return (
    <section id="events" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming <span className="text-secondary">Events</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us at our upcoming events and be part of the change you want to see in the world.
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl overflow-hidden soft-shadow hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-secondary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                    <Button className="gradient-accent text-white hover:opacity-90">Register Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
