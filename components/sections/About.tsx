'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiAward size={24} />,
      title: 'Uzman Kadro',
      description: '10+ yıllık deneyime sahip sertifikalı teknisyenlerimiz',
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Müşteri Odaklı',
      description: 'Müşteri memnuniyeti bizim için her şeyden önemli',
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Modern Teknoloji',
      description: 'En güncel ekipman ve tekniklerle hizmet',
    },
  ];

  const advantages = [
    'Boyasız göçük düzeltme (PDR) uzmanlığı',
    'Aracınızın orijinal değerini koruma',
    'Hızlı ve kaliteli işçilik garantisi',
    'Uygun fiyat politikası',
    'Sigorta işlemlerinde destek',
    'Ücretsiz keşif ve danışmanlık',
  ];

  return (
    <section id="hakkimizda" className="section bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-200 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center text-slate-600 dark:text-slate-400">
                  <div className="text-6xl mb-4">🔧</div>
                  <p className="text-lg font-semibold">Hakkımızda Görseli</p>
                  <p className="text-sm mt-2">/public/images/hero/about.jpg</p>
                </div>
              </div>

              {/* Overlay Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Başarılı İşlem</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">%98</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Memnuniyet</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Biz Kimiz?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              İstanbul'un En Güvenilir
              <span className="block text-primary">Boyasız Göçük Düzeltme Servisi</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Özkan Oto olarak 2013 yılından beri aracınızın en önemli değeri olan 
              orijinal boyasını koruyarak göçük düzeltme hizmeti veriyoruz. Uzman 
              ekibimiz ve modern ekipmanlarımızla, aracınızı ilk günkü haline 
              kavuşturuyoruz.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-8">
              PDR (Paintless Dent Repair - Boyasız Göçük Düzeltme) tekniğinde 
              uzmanlaşmış ekibimizle, kapı çizikleri, dolu hasarları ve park 
              kazalarından kaynaklanan göçükleri boyaya zarar vermeden onarıyoruz.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl"
                >
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Advantages List */}
            <div className="grid md:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 bg-primary/10 text-primary p-1 rounded-full">
                    <FiCheck size={16} />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {advantage}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
