import type { Metadata } from 'next';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Hakkımızda | Özkan Oto Boyasız Göçük Düzeltme',
  description: 'Özkan Oto hakkında bilgi edinin. 10+ yıllık deneyim, uzman kadro ve müşteri odaklı hizmet anlayışı.',
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Hakkımızda
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              İstanbul'un En Güvenilir
              <span className="block gradient-text">Boyasız Göçük Düzeltme Servisi</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              2013'ten beri aracınızın değerini koruyarak profesyonel hizmet sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Mission & Vision */}
      <section className="section bg-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Misyonumuz</h3>
              <p className="text-slate-400">
                Aracınızın orijinal değerini koruyarak, en kaliteli boyasız göçük düzeltme 
                ve kaporta onarım hizmetini sunmak. Müşteri memnuniyetini her zaman ön planda 
                tutarak, sektörde güvenilir bir isim olmak.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Vizyonumuz</h3>
              <p className="text-slate-400">
                Türkiye'nin en büyük ve en güvenilir boyasız göçük düzeltme servisi olmak. 
                Sürekli gelişen teknoloji ve ekipmanlarla, sektörde öncü olmaya devam etmek.
                Her müşterimize VIP hizmet standardı sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">
              Neden
              <span className="block text-primary">Özkan Oto?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: '🏆',
                title: '10+ Yıllık Deneyim',
                description: 'Sektörde uzun yıllara dayanan tecrübemizle hizmetinizdeyiz',
              },
              {
                icon: '👨‍🔧',
                title: 'Uzman Kadro',
                description: 'Sertifikalı ve deneyimli teknisyenlerimizle profesyonel hizmet',
              },
              {
                icon: '⚡',
                title: 'Hızlı Teslimat',
                description: 'Çoğu işlemde aynı gün teslim imkanı sunuyoruz',
              },
              {
                icon: '💰',
                title: 'Uygun Fiyat',
                description: 'Kaliteden ödün vermeden en uygun fiyat garantisi',
              },
              {
                icon: '🛡️',
                title: 'Garanti',
                description: 'Tüm işlemlerimizde garanti belgesi veriyoruz',
              },
              {
                icon: '🤝',
                title: 'Müşteri Memnuniyeti',
                description: '%98 müşteri memnuniyeti oranıyla gururluyuz',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </>
  );
}
