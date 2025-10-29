'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Galeri görselleri - kolaj formatında
  const galleryItems = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    image: `/images/gallery/g${i + 1}.jpg`,
    title: `Başarılı Onarım ${i + 1}`,
    description: 'Profesyonel boyasız göçük düzeltme',
  }));

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="galeri" className="section bg-slate-900">
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

        {/* Main Gallery Viewer */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-slate-800 rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] w-full"
              >
                <Image
                  src={galleryItems[selectedIndex].image}
                  alt={galleryItems[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority={selectedIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Önceki"
            >
              <FiArrowLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Sonraki"
            >
              <FiArrowRight size={24} className="text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-full shadow-lg">
              <span className="font-semibold text-white">
                {selectedIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>

          {/* Image Info */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-bold mb-2 text-white">
              {galleryItems[selectedIndex].title}
            </h3>
            <p className="text-slate-400">
              {galleryItems[selectedIndex].description}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-slate-900'
                  : 'border-transparent hover:border-primary/50'
              }`}
            >
              <Image
                src={item.image}
                alt={`Thumbnail ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 150px"
              />
              <div className={`absolute inset-0 bg-black/20 transition-opacity ${
                selectedIndex === index ? 'opacity-0' : 'opacity-100 hover:opacity-50'
              }`} />
            </motion.button>
          ))}
        </div>

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-slate-400">
            💡 Galerimizdeki tüm işlemler profesyonel ekipmanlar ve uzman kadromuz tarafından gerçekleştirilmiştir.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
