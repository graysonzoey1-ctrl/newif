import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Building2, Heart } from "lucide-react"

export default function JoinPage() {
  const joinOptions = [
    {
      icon: Users,
      title: "Individual Membership",
      description:
        "Join as an individual member and gain access to exclusive resources, networking opportunities, and professional development programs.",
      benefits: [
        "Access to training programs",
        "Networking opportunities",
        "Quarterly newsletters",
        "Voting rights in AGM",
      ],
      link: "/membership/individual",
      buttonText: "Become a Member",
    },
    {
      icon: Building2,
      title: "Organizational Membership",
      description:
        "Partner with us as an organization to amplify your impact and collaborate on initiatives that empower women and marginalized communities.",
      benefits: ["Partnership opportunities", "Brand visibility", "Collaborative projects", "CSR alignment"],
      link: "/membership/organizational",
      buttonText: "Partner With Us",
    },
    {
      icon: Heart,
      title: "Volunteer",
      description:
        "Contribute your time, skills, and passion to make a direct impact in the lives of women, children, and persons with disabilities.",
      benefits: ["Flexible opportunities", "Skill development", "Community impact", "Recognition certificate"],
      link: "/membership/volunteer",
      buttonText: "Start Volunteering",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Join the Movement</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            Be part of a global network empowering women, children, and persons with disabilities. Choose how you want
            to make a difference.
          </p>
        </div>
      </section>

      {/* Join Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {joinOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{option.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={option.link}>
                    <Button className="w-full gradient-accent text-white hover:opacity-90 transition-opacity">
                      {option.buttonText}
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Want to Support Our Mission?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you're not ready to join but still want to make a difference, consider making a donation to support
                our programs and initiatives.
              </p>
              <Link href="/donate">
                <Button className="gradient-accent text-white hover:opacity-90 transition-opacity px-8">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
