'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Set page title
  useEffect(() => {
    document.title = 'Galeri - Özkan Oto Boyasız Göçük Düzeltme';
  }, []);

  // Galeri görselleri - 35 adet
  const galleryItems = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    image: `/images/gallery/g${i + 1}.jpg`,
  }));

  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Başarılı İşlemlerimiz
            <span className="block text-primary mt-2">Bazı Çalışmalarımız</span>
          </h1>
          <p className="text-lg text-slate-400">
            Yaptığımız profesyonel boyasız göçük düzeltme işlemlerini inceleyin. Her bir çalışma, uzman ekibimizin kaliteli hizmetinin bir örneğidir.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={item.image}
                alt={`Galeri ${item.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 ring-0 group-hover:ring-4 group-hover:ring-primary rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-slate-400 text-base">
            💡 Galerimizdeki tüm işlemler profesyonel ekipmanlar ve uzman kadromuz tarafından gerçekleştirilmiştir. Her çalışmada müşteri memnuniyeti ve araç değerinin korunması önceliğimizdir.
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors z-10"
              aria-label="Kapat"
            >
              <FiX size={28} className="text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors z-10"
              aria-label="Önceki"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors z-10"
              aria-label="Sonraki"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full z-10">
              <span className="font-semibold text-white">
                {selectedImage + 1} / {galleryItems.length}
              </span>
            </div>
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-[4/3]"
            >
              <Image
                src={galleryItems[selectedImage].image}
                alt={`Galeri ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
