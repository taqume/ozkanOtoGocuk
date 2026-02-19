'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink, CONTACT_INFO } from '@/lib/data';

const CTA = () => {
  return (
    <section id="iletisim" className="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                İletişime Geçin
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Aracınız İçin En İyi
              <span className="block gradient-text">Çözümü Sunuyoruz</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Boyasız göçük düzeltme ve kaporta onarımı için hemen bizimle iletişime geçin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={getWhatsAppLink('Merhaba, aracım için fiyat teklifi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 group bg-[#25D366] hover:bg-[#20BA5A]"
              >
                <FaWhatsapp size={24} />
                WhatsApp ile İletişim
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn-secondary flex items-center justify-center gap-3 group"
              >
                <FiPhone size={20} />
                Hemen Arayın
              </a>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <FiPhone className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <FiMessageCircle className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Mesaj Gönderin
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                <p className="text-slate-300">08:00 - 20:00</p>
                <p className="text-sm text-slate-400 mt-1">Pazartesi - Cumartesi</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
