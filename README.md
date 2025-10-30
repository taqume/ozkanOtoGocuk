#  Özkan Oto Boyasız Göçük Düzeltme

Modern ve profesyonel bir oto servis web sitesi. Next.js 14, TypeScript ve Tailwind CSS ile geliştirilmiştir.

##  Özellikler

-  Modern glassmorphism tasarım
-  Tam responsive (mobil, tablet, desktop)
-  Framer Motion animasyonları
-  Auto-scrolling carousel'ler (35 galeri görseli, 18 marka logosu)
-  31 gerçek Google müşteri yorumu
-  WhatsApp entegrasyonu
-  Single page application (smooth scroll navigation)
-  Next.js 14 ile optimize edilmiş performans

##  Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

##  Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

##  Proje Yapısı

```
 app/                    # Next.js sayfaları
    layout.tsx         # Ana layout
    page.tsx           # Ana sayfa
    galeri/            # Galeri sayfası
 components/
    layout/            # Header, Footer
    sections/          # Hero, About, Services, vb.
    ui/                # WhatsAppButton
 lib/
    data.ts            # Site verileri
 public/images/         # Görseller
```

##  Ana Bölümler

- **Hero**: Başlık, CTA ve istatistikler
- **Biz Kimiz?**: Şirket tanıtımı
- **Hizmetlerimiz**: 6 hizmet kartı
- **Galeri**: 35 görselli carousel
- **Yorumlar**: 31 Google yorumu
- **Markalar**: 18 marka logosu
- **İletişim**: WhatsApp, telefon, adres

##  Responsive

- Mobil: Header hamburger menü, 2x2 stats grid, kompakt footer
- Desktop: Full navbar, 1x4 stats grid, geniş layout
- Glassmorphism efektli mobil menü

##  Deploy

```bash
npm run build
npm start
```

Vercel'e otomatik deploy için GitHub'a push edin.

---

 2025 Özkan Oto Boyasız Göçük Düzeltme
