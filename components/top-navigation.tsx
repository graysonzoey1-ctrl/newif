'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function TopNavigation() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const mainItems = [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'What We Do', href: '/programs' },
    { label: 'Our Impact', href: '/impact-statistics' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/contact' },
  ];

  const moreItems = [
    { label: 'Governance', href: '/governance-leadership' },
    { label: 'Transparency & Accountability', href: '/transparency-accountability' },
    { label: 'Safeguarding', href: '/safeguarding-protection' },
    { label: 'Media & Events', href: '/news' },
    { label: 'Membership', href: '/membership' },
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Accessibility', href: '/accessibility' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Image
              src="/newif-official-logo.png"
              alt="NEWIF Logo"
              width={120}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {mainItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-gray-200 hover:text-accent transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="text-base text-gray-200 hover:text-accent transition-colors flex items-center gap-2">
                More
                <ChevronDown size={16} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-64 bg-primary border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-200 hover:bg-accent/20 hover:text-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-accent font-bold">Menu</div>
        </div>
      </div>
    </nav>
  );
}
