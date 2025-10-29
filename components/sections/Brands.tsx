'use client';

import { motion } from 'framer-motion';
import { BRANDS } from '@/lib/data';

const Brands = () => {
  // Logos iki kere tekrarlayarak smooth infinite scroll efekti
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section id="markalar" className="section bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Desteklenen Markalar
            </span>
          </div>
          <h2 className="section-title">
            Tüm Araç Markalarında
            <span className="block text-primary">Uzman Hizmet</span>
          </h2>
          <p className="section-subtitle">
            Mercedes'ten Volkswagen'e, tüm araç markalarında profesyonel hizmet
          </p>
        </motion.div>

        {/* Animated Brands Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>

          {/* Sliding Container */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-110 transition-transform"
              >
                {/* Placeholder for brand logos */}
                <div className="text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Brand List Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 max-w-4xl">
            {BRANDS.map((brand) => (
              <span
                key={brand.id}
                className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {brand.name}
              </span>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-sm">
            💡 <strong>Not:</strong> Marka logolarını{' '}
            <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">
              /public/images/brands/
            </code>{' '}
            klasörüne ekleyerek görsel olarak gösterebilirsiniz.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-semibold mb-2">Her Marka</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tüm araç markalarına özel hizmet
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Hızlı Servis</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Aynı gün teslim imkanı
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold mb-2">Orijinal Kalite</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Fabrika çıkışı standartları
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
