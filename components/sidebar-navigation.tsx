"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

/* ── Brand palette ─────────────────────────────────────── */
const NAVY = "#0B1F3A"
const GOLD = "#D4AF37"

/* ── Flat navigation list — every item is a direct link ── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About NEWIF", href: "/about-newif" },
  { label: "Vision, Mission & Values", href: "/vision-mission-values" },
  { label: "Leadership", href: "/leadership" },
  { label: "Our Team", href: "/our-team" },
  { label: "Governance", href: "/governance" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Impact", href: "/our-impact" },
  { label: "Programs", href: "/programs" },
  { label: "News & Blog", href: "/news" },
  { label: "Media & Events", href: "/media-events" },
  { label: "Transparency & Accountability", href: "/transparency-accountability" },
  { label: "Safeguarding", href: "/safeguarding-protection" },
  { label: "Membership", href: "/membership" },
  { label: "Partnership & Collaboration", href: "/partnership-collaboration" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const

/* ── Component ─────────────────────────────────────────── */
export default function SidebarNavigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function close() {
    setOpen(false)
  }

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 flex flex-col gap-1.5 p-2 rounded-lg transition-colors duration-200"
        style={{ backgroundColor: open ? NAVY : "transparent" }}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className="block w-6 h-0.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: open ? GOLD : NAVY,
            transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: open ? GOLD : NAVY,
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: open ? GOLD : NAVY,
            transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Sidebar drawer */}
      <nav
        className="fixed left-0 top-0 z-40 h-full w-72 flex flex-col transition-transform duration-300 shadow-2xl"
        style={{
          backgroundColor: NAVY,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Logo area — centered image linking to homepage */}
        <div
          className="flex items-center justify-center px-6 pt-20 pb-6 border-b"
          style={{ borderColor: "rgba(212,175,55,0.15)" }}
        >
          <Link
            href="/"
            onClick={close}
            className="block transition-all duration-200 hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
          >
            <Image
              src="/newif-official-logo.png"
              alt="NEWIF Logo"
              width={140}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Flat nav links — no section headers, all unique keys */}
        <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
          {navLinks.map((item, index) => {
            const active = pathname === item.href
            return (
              <li key={`sidebar-${item.href}-${index}`}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200"
                  style={{
                    color: active ? GOLD : "rgba(255,255,255,0.8)",
                    backgroundColor: active ? "rgba(212,175,55,0.1)" : "transparent",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Join Now button */}
        <div className="px-6 py-6 border-t" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
          <Link
            href="/membership"
            onClick={close}
            className="block w-full py-3 rounded-lg text-center text-sm font-semibold tracking-wide transition-colors duration-200"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
            }}
          >
            Join Now
          </Link>
        </div>
      </nav>
    </>
  )
}
