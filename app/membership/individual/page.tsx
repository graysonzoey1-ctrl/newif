"use client"

import type React from "react"
import Link from "next/link"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, CreditCard, Building, Smartphone } from "lucide-react"
import { useState } from "react"

export default function IndividualMembership() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Individual Membership</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join our community of changemakers and be part of the empowerment movement
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Membership <span className="text-secondary">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Monthly newsletters and updates on our programs",
                "Access to member-only events and workshops",
                "Networking opportunities with like-minded individuals",
                "Volunteer opportunities in various programs",
                "Exclusive resources and training materials",
                "Certificate of membership",
                "Voting rights in annual general meetings",
                "Priority registration for NEWIF events",
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
              Membership <span className="text-secondary">Fees</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 soft-shadow mb-12">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary mb-2">$50</div>
                <div className="text-xl text-muted-foreground">Annual Membership Fee</div>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  Your membership fee supports our programs and helps us expand our reach to empower more women,
                  children, and persons with disabilities.
                </p>
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
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Mobile Money</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>MTN Mobile Money:</strong> +256 700 123 456
                  </p>
                  <p>
                    <strong>Airtel Money:</strong> +256 750 123 456
                  </p>
                  <p className="text-sm pt-2">Send payment and reference "Individual Membership + Your Name"</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Credit/Debit Card</h4>
                <p className="text-muted-foreground mb-4">
                  Pay securely online using your credit or debit card through our payment portal.
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
              Registration <span className="text-secondary">Form</span>
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
                  <label className="block text-sm font-medium text-foreground mb-2">Country *</label>
                  <Input placeholder="Enter your country" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Payment Method *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                    <option>Bank Transfer</option>
                    <option>Mobile Money</option>
                    <option>Credit/Debit Card</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Payment Reference Number</label>
                  <Input placeholder="Enter transaction reference (if already paid)" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Information</label>
                  <Textarea placeholder="Tell us why you want to join NEWIF..." rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-accent text-white text-lg">
                  Submit Registration
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  After submitting, you will receive a confirmation email with further instructions.
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
              Your registration has been received. We're excited to have you join the NEWIF community! You'll receive a
              confirmation email shortly.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
