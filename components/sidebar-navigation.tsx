'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

/* ── Brand Palette ────────────────────────────────────── */
const SIDEBAR_BG = '#0B1C2D';
const ACCENT_GOLD = '#D4AF37';

/* ── Navigation Data ──────────────────────────────────── */
interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  /** Non-clickable section header. Omit for standalone items. */
  groupLabel?: string;
  children: NavChild[];
}

const navigation: NavGroup[] = [
  {
    children: [{ label: 'Home', href: '/' }],
  },
  {
    groupLabel: 'WHO WE ARE',
    children: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'About NEWIF', href: '/about-newif' },
      { label: 'Vision, Mission & Values', href: '/vision-mission-values' },
      { label: 'Leadership & Governance', href: '/governance-leadership' },
      { label: 'Our Team', href: '/our-team' },
    ],
  },
  {
    children: [{ label: 'What We Do', href: '/programs-overview' }],
  },
  {
    children: [{ label: 'Our Impact', href: '/impact-statistics' }],
  },
  {
    children: [{ label: 'Programs', href: '/programs-overview' }],
  },
  {
    children: [{ label: 'Media & Events', href: '/news' }],
  },
  {
    children: [
      { label: 'Transparency & Accountability', href: '/transparency-accountability' },
    ],
  },
  {
    children: [{ label: 'Safeguarding', href: '/safeguarding-protection' }],
  },
  {
    children: [{ label: 'Membership', href: '/membership' }],
  },
  {
    children: [
      { label: 'Partnership & Collaboration', href: '/corporate-partners' },
    ],
  },
  {
    children: [{ label: 'Volunteer', href: '/volunteer' }],
  },
  {
    children: [{ label: 'Donate', href: '/donate' }],
  },
  {
    children: [{ label: 'Contact', href: '/contact' }],
  },
];

/* ── Component ────────────────────────────────────────── */
export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Hamburger toggle */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed left-4 top-4 z-50 p-2 text-white hover:text-accent transition-colors drop-shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={close}
        />
      )}

      {/* Sidebar panel */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 text-white z-40 transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: SIDEBAR_BG }}
      >
        {/* Logo */}
        <div className="pt-28 px-4 pb-8 flex-shrink-0 flex items-center justify-center">
          <Image
            src="/newif-official-logo.png"
            alt="NEWIF Logo"
            width={144}
            height={72}
            className="h-20 w-auto"
            priority
          />
        </div>

        {/* Scrollable nav list */}
        <ul className="flex-1 overflow-y-auto px-4 pb-24">
          {navigation.map((group, gi) => (
            <li key={`grp-${gi}`} className={group.groupLabel ? 'mt-5' : ''}>
              {/* Non-clickable section header */}
              {group.groupLabel && (
                <span
                  className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-widest mb-2.5"
                  style={{ color: ACCENT_GOLD }}
                >
                  {group.groupLabel}
                </span>
              )}

              {/* Clickable child links */}
              <ul>
                {group.children.map((child, ci) => (
                  <li key={`nav-${child.href}-${gi}-${ci}`}>
                    <Link
                      href={child.href}
                      onClick={close}
                      className="block px-4 py-2.5 rounded-lg text-sm text-gray-100 transition-colors duration-200 hover:bg-accent/20 hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Sticky bottom button */}
        <div
          className="flex-shrink-0 sticky bottom-0 left-0 right-0 px-4 py-5"
          style={{
            backgroundColor: SIDEBAR_BG,
            borderTop: `1px solid rgba(212, 175, 55, 0.2)`,
          }}
        >
          <Link
            href="/membership"
            onClick={close}
            className="block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: ACCENT_GOLD, color: SIDEBAR_BG }}
          >
            Join Now
          </Link>
        </div>
      </nav>
    </>
  );
}
