'use client';

import { motion } from 'framer-motion';
import { SERVICES, getWhatsAppLink } from '@/lib/data';
import { FiSend } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="hizmetler" className="section bg-slate-800">
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
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 flex items-center gap-4 hover:bg-slate-800/40 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-4xl text-primary flex-shrink-0 transform group-hover:scale-110 transition-transform">
                <FaCar />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm">
                  {service.description}
                </p>
              </div>
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
          <a 
            href={getWhatsAppLink('Merhaba, hizmetleriniz hakkında fiyat bilgisi almak ve randevu oluşturmak istiyorum.')} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiSend />
            Fiyat Bilgisi / Randevu Alın
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
