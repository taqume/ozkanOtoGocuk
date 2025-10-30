'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiFacebook, FiInstagram, FiPhone, FiClock } from 'react-icons/fi';
import { CONTACT_INFO } from '@/lib/data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-800/40 backdrop-blur-xl shadow-2xl border-b border-white/10 py-3'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center gap-6">
          {/* Left: Logo Only */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-56 h-16 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo/logo.png"
                alt="Özkan Oto Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation - Fully Centered */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Media + CTA Button + Phone/Hours - Compact */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/iletisim"
              className="btn-primary text-sm py-2 px-5"
            >
              Randevu Al
            </Link>

            {/* Phone and Hours - After CTA */}
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
              >
                <FiPhone size={16} />
                <span className="font-semibold text-sm">{CONTACT_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <FiClock size={14} />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {/* Mobile Contact Info */}
              <div className="pb-4 border-b border-slate-800">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-2"
                >
                  <FiPhone size={16} />
                  <span className="font-semibold text-sm">{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <FiClock size={14} />
                  <span>{CONTACT_INFO.workingHours}</span>
                </div>
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-slate-300 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Social Media */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                <a
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-white hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all"
                  aria-label="Instagram"
                >
                  <FiInstagram size={18} />
                </a>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center text-sm"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
