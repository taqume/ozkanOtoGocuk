'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Placeholder gallery items - gerçek görseller yüklendiğinde güncellenecek
  const galleryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    before: `/images/gallery/before-${i + 1}.jpg`,
    after: `/images/gallery/after-${i + 1}.jpg`,
    title: `Onarım ${i + 1}`,
    description: 'Boyasız göçük düzeltme işlemi',
  }));

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="galeri" className="section bg-white dark:bg-slate-900">
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
              Galeri
            </span>
          </div>
          <h2 className="section-title">
            Başarılı İşlemlerimiz
            <span className="block text-primary">Önce & Sonra</span>
          </h2>
          <p className="section-subtitle">
            Yaptığımız işlemlerin kalitesini görüntülerle inceleyin
          </p>
        </motion.div>

        {/* Main Before/After Viewer */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Before */}
                  <div className="relative flex items-center justify-center bg-slate-200 dark:bg-slate-700 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📷</div>
                      <p className="text-lg font-semibold mb-2">Önce</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Görsel: {galleryItems[selectedIndex].before}
                      </p>
                    </div>
                    <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Önce
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative flex items-center justify-center bg-slate-300 dark:bg-slate-600 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-lg font-semibold mb-2">Sonra</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Görsel: {galleryItems[selectedIndex].after}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sonra
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Önceki"
            >
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Sonraki"
            >
              <FiArrowRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg">
              <span className="font-semibold">
                {selectedIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>

          {/* Image Info */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-bold mb-2">
              {galleryItems[selectedIndex].title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {galleryItems[selectedIndex].description}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-primary scale-105'
                  : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <p className="text-primary font-semibold mb-2">📸 Görsel Yükleme Notu</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Gerçek önce/sonra görsellerinizi <strong>/public/images/gallery/</strong> klasörüne
              yükleyip dosya adlarını güncelleyerek sisteme entegre edebilirsiniz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
