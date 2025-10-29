# 🚗 Özkan Oto Boyasız Göçük Düzeltme - Website

Modern ve profesyonel bir oto servis web sitesi. Next.js 14, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🌟 Özellikler

- ✨ **Modern Tasarım**: Temiz ve profesyonel arayüz
- 🌓 **Dark/Light Mode**: Otomatik tema değiştirme
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı**: Next.js 14 ile optimize edilmiş performans
- 🎨 **Animasyonlar**: Framer Motion ile smooth animasyonlar
- 📞 **WhatsApp Entegrasyonu**: Floating WhatsApp button
- 🎯 **SEO Optimize**: Meta tags ve sitemap desteği

## 🛠️ Teknolojiler

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes

## 📂 Proje Yapısı

```
ozkanOtoGocuk/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Ana layout
│   ├── page.tsx             # Ana sayfa
│   ├── hizmetlerimiz/       # Hizmetler sayfası
│   ├── hakkimizda/          # Hakkımızda sayfası
│   ├── iletisim/            # İletişim sayfası
│   └── globals.css          # Global stiller
├── components/              # React komponentleri
│   ├── layout/             # Header, Footer
│   ├── sections/           # Sayfa bölümleri
│   ├── ui/                 # UI komponentleri
│   └── providers/          # Context providers
├── lib/                    # Utility fonksiyonlar
│   ├── data.ts            # Site verileri
│   └── utils.ts           # Yardımcı fonksiyonlar
├── types/                  # TypeScript tipleri
├── public/                 # Statik dosyalar
│   └── images/            # Görseller
│       ├── logo/
│       ├── hero/
│       ├── services/
│       ├── gallery/
│       └── brands/
└── README.md
```

## 🚀 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

## 📸 Görselleri Ekleme

### Logo
- Klasör: `/public/images/logo/`
- Format: PNG (transparan arka plan önerili)
- Boyut: 200x60px önerilen

### Hero/About Görselleri
- Klasör: `/public/images/hero/`
- Format: JPG veya WebP
- Boyut: 1920x1080px önerilen

### Galeri (Önce/Sonra)
- Klasör: `/public/images/gallery/`
- Dosya adları: `before-1.jpg`, `after-1.jpg` (1-22 arası)
- Format: JPG veya WebP
- Boyut: 1200x800px önerilen

### Marka Logoları
- Klasör: `/public/images/brands/`
- Dosya adları: `mercedes.png`, `bmw.png`, vb.
- Format: PNG (transparan)
- Boyut: 200x200px önerilen

## 🎨 Renk Paleti

```css
--primary: #DC2626      /* Kırmızı */
--primary-dark: #991B1B
--secondary: #1F2937    /* Siyah/Koyu gri */
--accent: #F59E0B       /* Turuncu/Altın */
```

## 📝 İçerik Güncelleme

### Firma Bilgileri
`lib/data.ts` dosyasındaki `CONTACT_INFO` objesini güncelleyin:
```typescript
export const CONTACT_INFO: ContactInfo = {
  phone: '+90 536 224 80 65',
  whatsapp: '+905362248065',
  address: 'Merkez Mahallesi, Hedef Sk. 10-14...',
  // ...
};
```

### Hizmetler
`lib/data.ts` dosyasındaki `SERVICES` dizisini güncelleyin.

### Müşteri Yorumları
`lib/data.ts` dosyasındaki `TESTIMONIALS` dizisini gerçek yorumlarla güncelleyin.

## 🌐 Deployment (Vercel)

### 1. GitHub'a Push Edin

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Vercel'e Bağlayın

1. [vercel.com](https://vercel.com) üzerinden hesap oluşturun
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. "Deploy" butonuna tıklayın

### 3. Domain Ayarlama

Vercel'de "Settings" > "Domains" kısmından custom domain ekleyebilirsiniz.

## 🔧 Build

Production build oluşturmak için:

```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO

Her sayfa için ayrı metadata tanımlanmıştır:
- Title tags
- Meta descriptions
- Open Graph tags
- Structured data

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje Özkan Oto Boyasız Göçük Düzeltme için özel olarak geliştirilmiştir.

## 💬 İletişim

- **Website**: [ozkanoto.com](https://ozkanoto.com)
- **Telefon**: +90 536 224 80 65
- **WhatsApp**: +90 536 224 80 65
- **Adres**: Merkez Mahallesi, Hedef Sk. 10-14, 34245 Gaziosmanpaşa/İstanbul

---

**Geliştirici Notu**: Tüm placeholder görselleri gerçek görsellerle değiştirmeyi unutmayın! 📸
