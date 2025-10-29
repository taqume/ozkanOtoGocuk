'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
  return (
    <section id="hizmetler" className="section bg-slate-50 dark:bg-slate-800">
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
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="section-title">
            Profesyonel Oto Bakım
            <span className="block text-primary">Hizmetleri</span>
          </h2>
          <p className="section-subtitle">
            Aracınız için gereken tüm onarım ve bakım hizmetlerini 
            tek çatı altında sunuyoruz
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-primary border-2 border-transparent"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Detaylı Bilgi
                <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/hizmetlerimiz" className="btn-primary inline-flex items-center gap-2">
            Tüm Hizmetleri Görüntüle
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
