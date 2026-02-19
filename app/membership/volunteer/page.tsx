"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Heart, Users, BookOpen, Briefcase } from "lucide-react"
import { useState } from "react"

export default function VolunteerPage() {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Volunteer With Us</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Make a direct impact by contributing your time, skills, and passion to empower communities
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Volunteer <span className="text-secondary">Opportunities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Education & Training</h3>
                <p className="text-muted-foreground mb-4">
                  Help teach digital literacy, vocational skills, or provide tutoring to women and children.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Computer skills training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Language tutoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Vocational training</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community Outreach</h3>
                <p className="text-muted-foreground mb-4">
                  Engage with communities, organize events, and help spread awareness about our programs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Event coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Community mobilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Awareness campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Professional Services</h3>
                <p className="text-muted-foreground mb-4">
                  Offer your professional expertise in areas like legal aid, healthcare, or business mentorship.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Legal consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Business mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Healthcare services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Administrative Support</h3>
                <p className="text-muted-foreground mb-4">
                  Help with office tasks, data entry, social media management, or fundraising activities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Social media management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Fundraising support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Data management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why <span className="text-secondary">Volunteer?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Make a tangible difference in people's lives",
                "Develop new skills and gain experience",
                "Build your professional network",
                "Receive volunteer certificates and references",
                "Flexible schedules to fit your availability",
                "Training and ongoing support provided",
                "Be part of a passionate community",
                "Personal growth and fulfillment",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Fees Section */}
      <section className="py-12 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Volunteering is FREE!</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              There are no fees to volunteer with NEWIF. We welcome anyone who wants to contribute their time and skills
              to make a positive impact in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Volunteer <span className="text-secondary">Application</span>
            </h2>
            <div className="bg-muted rounded-2xl p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+256 700 000 000" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location *</label>
                  <Input placeholder="City, Country" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Area of Interest *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                    <option>Education & Training</option>
                    <option>Community Outreach</option>
                    <option>Professional Services</option>
                    <option>Administrative Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Availability *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Both Weekdays and Weekends</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Hours per Week</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                    <option>1-5 hours</option>
                    <option>5-10 hours</option>
                    <option>10-20 hours</option>
                    <option>20+ hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Skills & Experience</label>
                  <Textarea
                    placeholder="Tell us about your relevant skills, experience, and why you want to volunteer with NEWIF..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-accent text-white text-lg">
                  Submit Application
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll review your application and contact you within 5-7 business days to discuss next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message Overlay */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your volunteer application has been received. We're grateful for your willingness to make a difference!
              We'll be in touch soon to discuss opportunities.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
