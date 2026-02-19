import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import SidebarNavigation from "@/components/sidebar-navigation"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NEWIF - Network Empowerment for Women International Force",
  description: "Empowering women, children, and persons with disabilities through education, training, and action.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <SidebarNavigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
