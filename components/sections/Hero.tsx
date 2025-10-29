'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { getWhatsAppLink } from '@/lib/data';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] opacity-10"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ Profesyonel Hizmet Garantisi
              </span>
            </motion.div>

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
                href="/hizmetlerimiz"
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
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700"
            >
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-slate-400">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-slate-400">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">%100</div>
                <div className="text-sm text-slate-400">Memnuniyet</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-lg">Hero görseli buraya gelecek</p>
                  <p className="text-sm mt-2">/public/images/hero/</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -right-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <FiPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">7/24 Destek</div>
                    <div className="font-bold text-slate-900 dark:text-white">Hızlı Yanıt</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Garantili</div>
                    <div className="font-bold text-slate-900 dark:text-white">Kalite</div>
                  </div>
                </div>
              </motion.div>
            </div>
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
