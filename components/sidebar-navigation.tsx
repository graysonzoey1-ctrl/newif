'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavSection {
  sectionLabel?: string;
  items: { label: string; href: string }[];
}

const navSections: NavSection[] = [
  {
    items: [{ label: 'Home', href: '/' }],
  },
  {
    sectionLabel: 'Who We Are',
    items: [
      { label: 'About NEWIF', href: '/about-newif' },
      { label: 'Vision, Mission & Values', href: '/vision-mission-values' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Governance', href: '/governance' },
      { label: 'Safeguarding', href: '/safeguarding-protection' },
      { label: 'Transparency & Accountability', href: '/transparency-accountability' },
    ],
  },
  {
    sectionLabel: 'What We Do',
    items: [
      { label: 'Programs Overview', href: '/programs-overview' },
      { label: 'Women Empowerment', href: '/women-empowerment' },
      { label: 'Disability Inclusion', href: '/disability-inclusion' },
      { label: 'Child Protection & Education', href: '/child-protection-education' },
      { label: 'Community Development', href: '/community-development' },
    ],
  },
  {
    sectionLabel: 'Our Impact',
    items: [
      { label: 'Impact Statistics', href: '/impact-statistics' },
      { label: 'Stories & Testimonials', href: '/stories-testimonials' },
    ],
  },
  {
    sectionLabel: 'Partnerships',
    items: [
      { label: 'Corporate Partners', href: '/corporate-partners' },
      { label: 'NGO & Government Partners', href: '/ngo-government-partners' },
    ],
  },
  {
    sectionLabel: 'Get Involved',
    items: [
      { label: 'Membership', href: '/membership' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Donate', href: '/donate' },
      { label: 'Fundraise', href: '/fundraise' },
    ],
  },
  {
    sectionLabel: 'Media & Events',
    items: [
      { label: 'News & Blog', href: '/news' },
      { label: 'Events', href: '/events' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    items: [{ label: 'Contact', href: '/contact' }],
  },
  {
    sectionLabel: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 p-2 text-white hover:text-accent transition-colors drop-shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Full Height Flex Container */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 text-white z-40 transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#0B1C2D' }}
      >
        {/* Logo - Fixed at Top */}
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

        {/* Menu Items - Scrollable Area */}
        <ul className="flex-1 overflow-y-auto px-4 space-y-0.5 pb-24">
          {navSections.map((section, sectionIndex) => (
            <li key={`section-${sectionIndex}`}>
              {section.sectionLabel && (
                <span className="block px-4 py-2.5 rounded-lg text-xs font-semibold text-accent mt-5 mb-2.5 uppercase tracking-widest">
                  {section.sectionLabel}
                </span>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item, itemIndex) => (
                  <li key={`${item.href}-${itemIndex}`}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-2.5 rounded-lg text-sm text-gray-100 transition-colors duration-200 hover:bg-accent/20 hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Join Now Button - Sticky at Bottom */}
        <div
          className="flex-shrink-0 sticky bottom-0 left-0 right-0 px-4 py-5"
          style={{
            backgroundColor: '#0B1C2D',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          }}
        >
          <Link
            href="/membership"
            onClick={handleNavClick}
            className="block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#D4AF37', color: '#0B1C2D' }}
          >
            Join Now
          </Link>
        </div>
      </nav>
    </>
  );
}
