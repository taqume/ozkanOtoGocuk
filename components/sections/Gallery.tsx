'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Galeri görselleri - 53 adet
  const galleryItems = Array.from({ length: 53 }, (_, i) => ({
    id: i + 1,
    image: `/images/gallery/g${i + 1}.jpg`,
  }));

  // Auto-scroll effect (right to left) - 1.5x speed
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1.5;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section id="galeri" className="section bg-slate-900 overflow-hidden">
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

        {/* Auto-Scrolling Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-hidden mb-12 pb-4 py-2"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate items for seamless loop */}
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item.id - 1)}
              className="relative flex-shrink-0 w-80 h-60 rounded-xl overflow-visible cursor-pointer group"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary">
                <Image
                  src={item.image}
                  alt={`Galeri ${item.id}`}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-slate-400 text-base">
            💡 Galerimizdeki tüm işlemler profesyonel ekipmanlar ve uzman kadromuz tarafından gerçekleştirilmiştir.
          </p>
        </motion.div>

        {/* View All Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/galeri" className="btn-primary inline-flex items-center gap-2">
            Tüm Galeriyi Görüntüle
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              aria-label="Kapat"
            >
              <FiX size={24} className="text-white" />
            </button>
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[4/3]"
            >
              <Image
                src={galleryItems[selectedImage].image}
                alt={`Galeri ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
