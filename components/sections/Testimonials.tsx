'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '@/lib/data';

const Testimonials = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Divide testimonials into 2 rows
  const row1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const row2 = TESTIMONIALS.filter((_, i) => i % 2 === 1);

  // Auto-scroll Row 1 (Right to Left)
  useEffect(() => {
    const scrollContainer = scrollRef1.current;
    if (!scrollContainer || isPausedRow1) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPausedRow1]);

  // Auto-scroll Row 2 (Left to Right)
  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer || isPausedRow2) return;

    // Set initial position to middle for reverse scroll
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }

    const scroll = () => {
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      } else {
        scrollContainer.scrollLeft -= 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPausedRow2]);

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/40 transition-all duration-300 flex-shrink-0 w-80">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            className={`${
              i < testimonial.rating
                ? 'fill-accent text-accent'
                : 'text-slate-600'
            }`}
            size={16}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-4">
        "{testimonial.comment}"
      </p>

      {/* Author Info */}
      <div className="pt-3 border-t border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
            {testimonial.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="yorumlar" className="section bg-slate-800">
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
              Müşteri Yorumları
            </span>
          </div>
          <h2 className="section-title">
            Müşterilerimiz
            <span className="block text-primary">Ne Diyor?</span>
          </h2>
          <p className="section-subtitle">
            Binlerce mutlu müşterimizin deneyimlerini okuyun
          </p>
        </motion.div>

        {/* Testimonials Horizontal Scrolling Rows */}
        <div className="space-y-6 mb-16 overflow-hidden">
          {/* Row 1 - Scroll Right to Left */}
          <div
            ref={scrollRef1}
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...row1, ...row1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Row 2 - Scroll Left to Right */}
          <div
            ref={scrollRef2}
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...row2, ...row2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-slate-400">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">%100</div>
            <div className="text-sm text-slate-400">Memnuniyet Oranı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.5/5</div>
            <div className="text-sm text-slate-400">Ortalama Puan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-slate-400">Yıllık Deneyim</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
