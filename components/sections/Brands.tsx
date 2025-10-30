'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BRANDS } from '@/lib/data';

const Brands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect (left to right - continuous)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      } else {
        scrollContainer.scrollLeft -= 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="markalar" className="section bg-slate-900 overflow-hidden">
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
            Mercedes&apos;ten Volkswagen&apos;e, tüm araç markalarında profesyonel hizmet
          </p>
        </motion.div>

        {/* Auto-Scrolling Brands Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate brands for seamless loop */}
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 transition-transform"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
