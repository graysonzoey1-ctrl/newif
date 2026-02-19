import Link from "next/link"
import { Users, Building2, Heart, Hand } from "lucide-react"

export default function GetInvolvedPage() {
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
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Organizational Membership",
      description:
        "Partner with us as an organization to amplify your impact and collaborate on initiatives that empower women and marginalized communities.",
      benefits: ["Partnership opportunities", "Brand visibility", "Collaborative projects", "CSR alignment"],
      link: "/membership/organizational",
      buttonText: "Partner With Us",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Volunteer",
      description:
        "Contribute your time, skills, and passion to make a direct impact in the lives of women, children, and persons with disabilities.",
      benefits: ["Flexible opportunities", "Skill development", "Community impact", "Recognition certificate"],
      link: "/membership/volunteer",
      buttonText: "Start Volunteering",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Hand,
      title: "Make a Donation",
      description:
        "Support our mission by making a financial contribution. Every donation directly supports our programs and helps us reach more communities.",
      benefits: ["Tax deductible", "Flexible amounts", "Monthly options", "Transparent reporting"],
      link: "/donate",
      buttonText: "Donate Now",
      color: "from-green-500 to-emerald-600"
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get Involved</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be part of a global network empowering women, children, and persons with disabilities. Choose how you want
            to make a difference.
          </p>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {joinOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{option.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{option.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-3 font-bold">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={option.link}>
                    <button className={`w-full bg-gradient-to-r ${option.color} text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                      {option.buttonText}
                    </button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Get Involved?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Make Impact",
                description: "Your involvement directly improves lives and strengthens communities across Africa."
              },
              {
                title: "Personal Growth",
                description: "Develop new skills, build meaningful connections, and grow as a professional and person."
              },
              {
                title: "Global Network",
                description: "Join a community of passionate individuals committed to empowerment and social change."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
