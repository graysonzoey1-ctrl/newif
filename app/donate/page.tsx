"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Users, GraduationCap, Briefcase, CreditCard, Smartphone, CheckCircle } from "lucide-react"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
    }, 5000)
  }

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Support literacy programs, vocational training, and skills development workshops",
      impact: "$100 provides training materials for 10 women",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Fund community outreach programs and support groups for women and children",
      impact: "$250 supports a community workshop for 50 participants",
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Enable entrepreneurship programs and microfinance initiatives",
      impact: "$500 helps launch a small business for a woman entrepreneur",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Provide health education, wellness programs, and support services",
      impact: "$150 covers health workshops for 30 women",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-4 soft-shadow animate-in zoom-in slide-in-from-bottom-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Thank You!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your generous donation will help empower women, children, and persons with disabilities. Together, we
                are creating lasting change.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Make a <span className="text-accent">Difference</span> Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Your donation empowers women, children, and persons with disabilities to build brighter futures through
              education, training, and advocacy.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">10,000+</div>
                <div className="text-white/80">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-white/80">Programs Running</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">15+</div>
                <div className="text-white/80">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl soft-shadow p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Choose Your Donation</h2>

              {/* Donation Type */}
              <div className="mb-8">
                <Label className="text-lg font-semibold mb-4 block">Donation Type</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType} className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
                    <Label
                      htmlFor="one-time"
                      className="flex items-center justify-center p-6 border-2 border-border rounded-xl cursor-pointer peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/5 transition-all"
                    >
                      <span className="text-lg font-semibold">One-Time Donation</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                    <Label
                      htmlFor="monthly"
                      className="flex items-center justify-center p-6 border-2 border-border rounded-xl cursor-pointer peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/5 transition-all"
                    >
                      <span className="text-lg font-semibold">Monthly Donation</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <Label className="text-lg font-semibold mb-4 block">Select Amount (USD)</Label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setAmount(amt)
                        setCustomAmount("")
                      }}
                      className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                        amount === amt
                          ? "border-secondary bg-secondary/5 text-secondary"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount" className="text-sm mb-2 block">
                    Or enter custom amount
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setAmount("")
                    }}
                    className="text-lg"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input id="first-name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-border rounded-xl p-6 hover:border-secondary/50 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="w-6 h-6 text-secondary" />
                      <h4 className="font-semibold">Credit/Debit Card</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                  </div>
                  <div className="border-2 border-border rounded-xl p-6 hover:border-secondary/50 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Smartphone className="w-6 h-6 text-secondary" />
                      <h4 className="font-semibold">Mobile Money</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">MTN, Airtel, Vodafone</p>
                  </div>
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="bg-muted rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-3">Bank Transfer Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank Name:</span>
                    <span className="font-semibold">NEWIF International Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-semibold">NEWIF Foundation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-semibold">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SWIFT Code:</span>
                    <span className="font-semibold">NEWIFXXX</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full gradient-accent text-white text-lg py-6">
                Complete Donation of ${customAmount || amount || "0"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Your <span className="text-secondary">Impact</span>
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how your donation creates real change in communities around the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 soft-shadow hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                  <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="text-sm font-semibold text-secondary">{area.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Transparent & Accountable</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are committed to transparency in how we use your donations. Every contribution is tracked and reported,
              ensuring your generosity creates maximum impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                <p className="text-muted-foreground">Goes directly to programs</p>
              </div>
              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="text-4xl font-bold text-secondary mb-2">10%</div>
                <p className="text-muted-foreground">Administrative costs</p>
              </div>
              <div className="bg-white rounded-xl p-6 soft-shadow">
                <div className="text-4xl font-bold text-secondary mb-2">5%</div>
                <p className="text-muted-foreground">Fundraising expenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
