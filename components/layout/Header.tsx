'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiSun, FiMoon, FiFacebook, FiInstagram } from 'react-icons/fi';
import { CONTACT_INFO } from '@/lib/data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-slate-200 dark:border-slate-800 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-primary transition-colors"
              >
                📞 {CONTACT_INFO.phone}
              </a>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline">⏰ {CONTACT_INFO.workingHours}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo/logo.png"
                alt="Özkan Oto"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun size={20} className={isScrolled ? '' : 'text-white'} />
                ) : (
                  <FiMoon size={20} />
                )}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/iletisim"
              className="hidden md:block btn-primary text-sm"
            >
              Randevu Al
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX size={24} className={isScrolled ? '' : 'text-white'} />
              ) : (
                <FiMenu size={24} className={isScrolled ? '' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
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
      </nav>
    </header>
  );
};

export default Header;
