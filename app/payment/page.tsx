"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock, CheckCircle, Shield } from "lucide-react"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [showSuccess, setShowSuccess] = useState(false)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-4 soft-shadow animate-in zoom-in slide-in-from-bottom-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Payment Successful!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thank you for your payment. You will receive a confirmation email shortly with your receipt and next
                steps.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Secure Payment</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Complete your payment securely with our encrypted payment system
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl soft-shadow p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Payment Details</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card Number */}
                    <div>
                      <Label htmlFor="card-number">Card Number *</Label>
                      <div className="relative">
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                          className="pl-12"
                        />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                      <Label htmlFor="card-name">Cardholder Name *</Label>
                      <Input id="card-name" placeholder="John Doe" required />
                    </div>

                    {/* Expiry and CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date *</Label>
                        <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input id="cvv" placeholder="123" maxLength={4} type="password" required />
                      </div>
                    </div>

                    {/* Billing Information */}
                    <div className="border-t border-border pt-6">
                      <h3 className="text-lg font-semibold mb-4">Billing Information</h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+233 5535 74122" required />
                        </div>

                        <div>
                          <Label htmlFor="address">Billing Address *</Label>
                          <Input id="address" placeholder="Street address" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input id="city" placeholder="Accra" required />
                          </div>
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Input id="country" placeholder="Ghana" required />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full gradient-accent text-white text-lg py-6"
                      disabled={processing}
                    >
                      {processing ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing Payment...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Lock className="w-5 h-5" />
                          Complete Secure Payment
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-2xl soft-shadow p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Item</span>
                      <span className="font-semibold">Membership Fee</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-semibold">$50.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span className="font-semibold">$2.50</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-secondary">$52.50</span>
                    </div>
                  </div>

                  {/* Security Badges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-secondary" />
                      <span>256-bit SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Lock className="w-5 h-5 text-secondary" />
                      <span>PCI DSS Compliant</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>Secure Payment Gateway</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">We accept</p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                <div className="text-2xl font-bold text-muted-foreground">VISA</div>
                <div className="text-2xl font-bold text-muted-foreground">Mastercard</div>
                <div className="text-2xl font-bold text-muted-foreground">AMEX</div>
                <div className="text-2xl font-bold text-muted-foreground">Discover</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
