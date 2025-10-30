'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { CONTACT_INFO } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
              <span className="text-primary">Özkan Oto</span>{' '}
              <span className="text-white">Boyasız Göçük Düzeltme</span>
            </h3>
            <p className="text-xs md:text-sm mb-3 md:mb-4 max-w-xs">
              2013 yılından beri İstanbul'da profesyonel boyasız göçük düzeltme ve kaporta onarım hizmetleri sunuyoruz. Aracınızın orijinal değerini koruyun, uzman ekibimize güvenin.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Hızlı Linkler</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/#hakkimizda" className="hover:text-primary transition-colors">
                  Biz Kimiz?
                </Link>
              </li>
              <li>
                <Link href="/#hizmetler" className="hover:text-primary transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-primary transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/#iletisim" className="hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>Boyasız Göçük Düzeltme (PDR)</li>
              <li>Kaporta Düzeltme</li>
              <li>Dolu Hasarı Onarımı</li>
              <li>Mini Onarım</li>
              <li>Boya Koruma</li>
              <li>Lokal Boya Onarımı</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">İletişim</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0 text-primary" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="flex-shrink-0 text-primary" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiClock className="flex-shrink-0 text-primary" size={18} />
                <span>{CONTACT_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-4 md:py-6">
          <div className="text-center text-xs md:text-sm">
            <p>
              © {currentYear} Özkan Oto Boyasız Göçük Düzeltme. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
