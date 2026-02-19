"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Show thank you message
    setShowThankYou(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Hide message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Message Received!</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Thank you for reaching out to NEWIF. Your message has been successfully received.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We'll review your inquiry and get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-secondary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions or want to learn more? We'd love to hear from you. Reach out and let's start a
              conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-reveal space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">newifworld25@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+233 5535 74122</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Kwabenya, ACP Estates
                        <br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h4 className="font-bold text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-accent text-white hover:opacity-90">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
