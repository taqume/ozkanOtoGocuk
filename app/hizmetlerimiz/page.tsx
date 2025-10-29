import type { Metadata } from 'next';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Özkan Oto Boyasız Göçük Düzeltme',
  description: 'Boyasız göçük düzeltme, kaporta onarımı, dolu hasarı ve daha fazlası. Tüm hizmetlerimizi keşfedin.',
};

export default function HizmetlerimizPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Hizmetlerimiz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Profesyonel Oto Bakım
              <span className="block gradient-text">ve Onarım Hizmetleri</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Aracınız için gereken tüm bakım ve onarım hizmetlerini 
              en kaliteli şekilde sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
