import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Organization Header - Centered */}
        <div className="text-center mb-16 pb-12 border-b border-white/20">
          <Image
            src="/newif-official-logo.png"
            alt="NEWIF Logo"
            width={120}
            height={60}
            className="h-20 w-auto mx-auto mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold leading-tight max-w-2xl mx-auto">
            Network Empowerment for Women International Force
          </h3>
        </div>

        {/* 3-Column Footer Layout: Organization | Engagement | Legal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/20">
          {/* Column 1: Organization */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Organization</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Registrar General</p>
                <p className="font-medium">CG070681024</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Tax ID</p>
                <p className="font-medium">C0064634116</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Social Welfare License</p>
                <p className="font-medium">NPOS/GR01/LN02475/25</p>
              </div>
            </div>
          </div>

          {/* Column 2: Engagement */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Engagement</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/get-involved" className="hover:text-accent transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-accent transition-colors">
                  Support the Movement
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-accent transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/transparency-accountability" className="hover:text-accent transition-colors">
                  Transparency & Accountability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/20">
          <div>
            <h4 className="font-bold mb-4 text-base">Email</h4>
            <a href="mailto:info@newifworldinfo.org" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} className="flex-shrink-0 text-white" />
              info@newifworldinfo.org
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">Phone</h4>
            <a href="tel:+233256023355" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0 text-white" />
              +233 25 602 3355
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">Location</h4>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0 text-white" />
              Greater Accra Region, Ghana
            </p>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>© Network Empowerment for Women International Force (NEWIF) {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
