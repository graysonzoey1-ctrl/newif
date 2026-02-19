"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function EventsPage() {
  const [filter, setFilter] = useState("all")
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

  const allEvents = [
    {
      title: "Women in Leadership Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, Accra",
      description:
        "Join us for a full-day summit featuring inspiring speakers, workshops, and networking opportunities for women leaders.",
      image: "/women-leadership-conference.png",
      category: "summit",
    },
    {
      title: "Vocational Training Workshop",
      date: "April 8, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "NEWIF Training Center",
      description:
        "Hands-on workshop covering digital skills, entrepreneurship, and business development for aspiring entrepreneurs.",
      image: "/vocational-training-workshop.jpg",
      category: "workshop",
    },
    {
      title: "Community Empowerment Fair",
      date: "May 20, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "City Park, Kumasi",
      description:
        "A community celebration featuring health screenings, educational resources, entertainment, and family activities.",
      image: "/community-fair-celebration.jpg",
      category: "community",
    },
    {
      title: "Digital Literacy Training",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "NEWIF Training Center",
      description:
        "Learn essential digital skills including computer basics, internet safety, and online communication tools.",
      image: "/digital-literacy-training-classroom.jpg",
      category: "workshop",
    },
    {
      title: "Women Entrepreneurs Networking Event",
      date: "April 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Business Hub, Accra",
      description:
        "Connect with fellow women entrepreneurs, share experiences, and build valuable business relationships.",
      image: "/women-business-networking-event.jpg",
      category: "networking",
    },
    {
      title: "Health & Wellness Workshop",
      date: "April 28, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Community Health Center",
      description:
        "Free health screenings, wellness education, and mental health awareness sessions for women and families.",
      image: "/health-wellness-workshop-women.jpg",
      category: "workshop",
    },
    {
      title: "Youth Empowerment Conference",
      date: "May 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "University Campus, Kumasi",
      description: "Inspiring young people through mentorship, career guidance, and leadership development programs.",
      image: "/youth-empowerment-conference.jpg",
      category: "summit",
    },
    {
      title: "Financial Literacy Seminar",
      date: "May 12, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "NEWIF Training Center",
      description:
        "Learn about budgeting, saving, investing, and building financial independence for you and your family.",
      image: "/financial-literacy-seminar.jpg",
      category: "workshop",
    },
    {
      title: "Disability Rights Advocacy Forum",
      date: "June 2, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Conference Hall, Accra",
      description:
        "Join advocates, policymakers, and community members to discuss disability rights and inclusive policies.",
      image: "/disability-rights-advocacy-forum.jpg",
      category: "summit",
    },
    {
      title: "Artisan Skills Training",
      date: "June 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "NEWIF Training Center",
      description:
        "Hands-on training in traditional crafts, modern artisan techniques, and small business development.",
      image: "/artisan-crafts-training-workshop.jpg",
      category: "workshop",
    },
    {
      title: "Annual Fundraising Gala",
      date: "June 25, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom, Accra",
      description:
        "An elegant evening of celebration, entertainment, and fundraising to support NEWIF's mission and programs.",
      image: "/elegant-fundraising-gala-event.jpg",
      category: "community",
    },
    {
      title: "Back-to-School Supply Drive",
      date: "July 15, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Multiple Locations",
      description:
        "Help us collect and distribute school supplies to children in need. Volunteer opportunities available.",
      image: "/school-supplies-donation-drive.jpg",
      category: "community",
    },
  ]

  const categories = [
    { value: "all", label: "All Events" },
    { value: "summit", label: "Summits & Conferences" },
    { value: "workshop", label: "Workshops & Training" },
    { value: "networking", label: "Networking" },
    { value: "community", label: "Community Events" },
  ]

  const filteredEvents = filter === "all" ? allEvents : allEvents.filter((event) => event.category === filter)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Upcoming <span className="text-secondary">Events</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-white/90 leading-relaxed text-pretty">
              Join us at our events and be part of the movement empowering women, children, and persons with
              disabilities across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                variant={filter === category.value ? "default" : "outline"}
                className={
                  filter === category.value
                    ? "gradient-accent text-white"
                    : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-background" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="scroll-reveal bg-white rounded-2xl overflow-hidden soft-shadow hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {event.description}
                    </p>
                    <Button className="w-full gradient-accent text-white hover:opacity-90">Register Now</Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See What You're Looking For?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contact us to learn about upcoming events or to discuss hosting a custom workshop for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/#membership">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
