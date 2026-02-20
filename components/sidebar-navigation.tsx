"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* ── Brand palette ─────────────────────────────────────── */
const NAVY = "#0B1F3A"
const GOLD = "#D4AF37"
const PINK = "#E91E63"

/* ── Navigation data ───────────────────────────────────── */
interface NavItem {
  label: string
  href: string
}

interface NavGroup {
  sectionLabel: string
  items: NavItem[]
}

const navigation: (NavItem | NavGroup)[] = [
  { label: "Home", href: "/" },
  {
    sectionLabel: "WHO WE ARE",
    items: [
      { label: "About NEWIF", href: "/about-newif" },
      { label: "Vision, Mission & Values", href: "/vision-mission-values" },
      { label: "Leadership", href: "/leadership" },
      { label: "Our Team", href: "/our-team" },
      { label: "Governance", href: "/governance" },
    ],
  },
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
]

/* ── Type guard ────────────────────────────────────────── */
function isGroup(entry: NavItem | NavGroup): entry is NavGroup {
  return "sectionLabel" in entry
}

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
        <span className="block w-6 h-0.5 rounded-full transition-all duration-300" style={{
          backgroundColor: open ? GOLD : NAVY,
          transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
        }} />
        <span className="block w-6 h-0.5 rounded-full transition-all duration-300" style={{
          backgroundColor: open ? GOLD : NAVY,
          opacity: open ? 0 : 1,
        }} />
        <span className="block w-6 h-0.5 rounded-full transition-all duration-300" style={{
          backgroundColor: open ? GOLD : NAVY,
          transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
        }} />
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
        {/* Logo area */}
        <div className="px-6 pt-20 pb-6 border-b" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
          <Link href="/" onClick={close} className="text-xl font-bold tracking-wider" style={{ color: GOLD }}>
            NEWIF
          </Link>
        </div>

        {/* Nav items */}
        <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
          {navigation.map((entry, gi) => {
            if (isGroup(entry)) {
              return (
                <li key={`grp-${gi}`} className="pt-5 pb-1">
                  {/* Non-clickable section label */}
                  <span
                    className="block px-4 py-2 text-xs font-bold tracking-widest uppercase select-none"
                    style={{ color: GOLD, opacity: 0.7 }}
                  >
                    {entry.sectionLabel}
                  </span>
                  <ul className="space-y-0.5">
                    {entry.items.map((child, ci) => {
                      const active = pathname === child.href
                      return (
                        <li key={`nav-${child.href}-${gi}-${ci}`}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200"
                            style={{
                              color: active ? GOLD : "rgba(255,255,255,0.8)",
                              backgroundColor: active ? "rgba(212,175,55,0.1)" : "transparent",
                              fontWeight: active ? 600 : 400,
                              paddingLeft: "2rem",
                            }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }

            const active = pathname === entry.href
            return (
              <li key={`nav-${entry.href}-${gi}`}>
                <Link
                  href={entry.href}
                  onClick={close}
                  className="block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200"
                  style={{
                    color: active ? GOLD : "rgba(255,255,255,0.8)",
                    backgroundColor: active ? "rgba(212,175,55,0.1)" : "transparent",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {entry.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
