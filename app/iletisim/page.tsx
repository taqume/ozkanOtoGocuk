import type { Metadata } from 'next';
import { FiPhone, FiMapPin, FiClock, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO, getWhatsAppLink } from '@/lib/data';

export const metadata: Metadata = {
  title: 'İletişim | Özkan Oto Boyasız Göçük Düzeltme',
  description: 'Bize ulaşın. Telefon, WhatsApp veya ziyaret ederek randevu alabilirsiniz.',
};

export default function IletisimPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                İletişim
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bizimle
              <span className="block gradient-text">İletişime Geçin</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapacağız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="section bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-white">İletişim Bilgileri</h2>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="card group hover:border-primary border-2 border-transparent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiPhone size={28} className="text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">Telefon</h3>
                    <p className="text-slate-400 mb-1">
                      Bizi arayarak randevu alabilirsiniz
                    </p>
                    <p className="text-lg font-semibold text-primary">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppLink('Merhaba, web sitenizden geliyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-[#25D366] border-2 border-transparent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 p-4 rounded-xl group-hover:bg-[#25D366] transition-colors">
                    <FaWhatsapp size={28} className="text-[#25D366] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp</h3>
                    <p className="text-slate-400 mb-1">
                      7/24 WhatsApp üzerinden mesaj gönderin
                    </p>
                    <p className="text-lg font-semibold text-[#25D366]">Mesaj Gönder</p>
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="card border-2 border-transparent">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <FiMapPin size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">Adres</h3>
                    <p className="text-slate-400 mb-1">
                      Bizi ziyaret ederek ücretsiz keşif yaptırabilirsiniz
                    </p>
                    <p className="text-lg font-semibold text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card border-2 border-transparent">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <FiClock size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">Çalışma Saatleri</h3>
                    <p className="text-slate-400 mb-1">Pazartesi - Pazar</p>
                    <p className="text-lg font-semibold text-primary">{CONTACT_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card border-2 border-transparent">
                <h3 className="text-xl font-semibold mb-4 text-white">Sosyal Medya</h3>
                <div className="flex gap-4">
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors"
                  >
                    <FiFacebook size={24} />
                  </a>
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 hover:opacity-90 text-white p-4 rounded-xl transition-opacity"
                  >
                    <FiInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:sticky lg:top-24 h-[600px]">
              <div className="card h-full p-0 overflow-hidden">
                <div className="h-full bg-slate-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Google Maps</h3>
                    <p className="text-slate-400 mb-4">
                      Buraya Google Maps embed kodu eklenebilir
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Google Maps'te Aç
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Hemen Randevu Alın
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Size en uygun zamanda hizmet verebilmemiz için randevu almanızı öneriyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink('Randevu almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A]"
              >
                <FaWhatsapp size={24} />
                WhatsApp ile Randevu
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn-secondary flex items-center justify-center gap-3"
              >
                <FiPhone size={20} />
                Telefon ile Randevu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
