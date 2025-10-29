'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '@/lib/data';

const Testimonials = () => {
  return (
    <section id="yorumlar" className="section bg-slate-50 dark:bg-slate-800">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:shadow-2xl"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? 'fill-accent text-accent'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                    size={20}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    {testimonial.vehicle && (
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.vehicle}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  {new Date(testimonial.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">%98</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Memnuniyet Oranı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Ortalama Puan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Yıllık Deneyim</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
