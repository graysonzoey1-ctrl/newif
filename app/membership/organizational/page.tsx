"use client"

import type React from "react"
import Link from "next/link"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Building, Globe } from "lucide-react"
import { useState } from "react"

export default function OrganizationalMembership() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Organizational Membership</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Partner with us to amplify impact and create meaningful change together
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Partnership <span className="text-secondary">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Strategic partnership opportunities",
                "Co-branded initiatives and programs",
                "Corporate volunteer programs for your team",
                "Quarterly impact reporting and analytics",
                "Recognition on our website and materials",
                "Exclusive networking events with other partners",
                "Custom CSR program development",
                "Media coverage and PR opportunities",
                "Employee engagement opportunities",
                "Access to our network and resources",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
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

      {/* Fees Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Partnership <span className="text-secondary">Tiers</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 soft-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-2">Bronze</h3>
                <div className="text-4xl font-bold text-primary mb-4">$500</div>
                <div className="text-muted-foreground mb-6">per year</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Logo on website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quarterly reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Social media recognition</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 text-white shadow-xl transform md:scale-105">
                <h3 className="text-2xl font-bold mb-2">Silver</h3>
                <div className="text-4xl font-bold mb-4">$1,500</div>
                <div className="text-white/90 mb-6">per year</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All Bronze benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-branded programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Volunteer opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Event sponsorship</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 soft-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-2">Gold</h3>
                <div className="text-4xl font-bold text-accent mb-4">$5,000</div>
                <div className="text-muted-foreground mb-6">per year</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All Silver benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom CSR programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Executive networking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Media opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Methods */}
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Payment <span className="text-secondary">Methods</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Bank Transfer</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Bank:</strong> Standard Bank
                  </p>
                  <p>
                    <strong>Account Name:</strong> NEWIF
                  </p>
                  <p>
                    <strong>Account Number:</strong> 1234567890
                  </p>
                  <p>
                    <strong>Swift Code:</strong> SBICUGKX
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Online Payment</h4>
                <p className="text-muted-foreground mb-4">
                  Pay securely online using credit card or bank transfer through our payment portal.
                </p>
                <Link href="/payment">
                  <Button className="w-full gradient-accent text-white">Pay Online</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Partnership <span className="text-secondary">Application</span>
            </h2>
            <div className="bg-muted rounded-2xl p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Organization Name *</label>
                  <Input placeholder="Enter your organization name" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                    <Input placeholder="Full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Job Title *</label>
                    <Input placeholder="Your position" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input type="email" placeholder="organization@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+256 700 000 000" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Organization Website</label>
                  <Input type="url" placeholder="https://www.yourorganization.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Partnership Tier *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                    <option>Bronze - $500/year</option>
                    <option>Silver - $1,500/year</option>
                    <option>Gold - $5,000/year</option>
                    <option>Custom Partnership (Contact Us)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Areas of Interest</label>
                  <Textarea
                    placeholder="Tell us about your organization's CSR goals and how you'd like to partner with NEWIF..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-accent text-white text-lg">
                  Submit Application
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Our team will review your application and contact you within 3-5 business days.
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
              Your partnership application has been received. We're thrilled about the possibility of working together!
              Our team will review your application and be in touch soon.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
