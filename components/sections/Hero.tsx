'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { getWhatsAppLink } from '@/lib/data';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/welcomeImage.png"
          alt="Oto Servis Arka Plan"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Welcome Man - Fixed to bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 -right-0 z-10 hidden lg:block"
      >
        <div className="relative w-[750px] h-[900px]">
          <Image
            src="/images/hero/welcomeMan.png"
            alt="Profesyonel Teknisyen"
            fill
            className="object-contain object-bottom"
            priority
            quality={90}
          />
        </div>
      </motion.div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Aracınızı Yeniden
              <span className="block gradient-text">Hayata Döndürüyoruz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl"
            >
              Boyasız göçük düzeltme (PDR), kaporta onarımı ve dolu hasarı 
              konusunda uzman ekibimizle aracınızın orijinal değerini koruyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={getWhatsAppLink('Merhaba, web sitenizden geliyorum. Bilgi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Hemen Teklif Alın
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/#hizmetler"
                className="btn-outline flex items-center justify-center gap-2"
              >
                Hizmetlerimiz
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 pt-8 border-t border-slate-700"
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs md:text-sm text-slate-400">Yıllık Deneyim</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">∞</div>
                <div className="text-xs md:text-sm text-slate-400">Mutlu Müşteri</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">%100</div>
                <div className="text-xs md:text-sm text-slate-400">Memnuniyet</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">4.5/5</div>
                <div className="text-xs md:text-sm text-slate-400 whitespace-nowrap">Google Değerlendirmesi</div>
              </div>
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Aşağı kaydırın</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
