# 🚀 Test Hazırlığı

## Kontrol Listesi

### ✅ Görseller Eklendi
- [x] Logo (`/public/images/logo/logo.png`)
- [x] Hero görselleri (`welcomeImage.jpg`, `welcomeMan.png`)
- [x] Galeri görselleri (g1.jpg - g22.jpg)
- [x] Marka logoları (8 marka)

### ✅ Kod Güncellemeleri
- [x] Gallery kolaj formatına çevrildi
- [x] Brand logoları entegre edildi
- [x] Header logo eklendi
- [x] Hero ve About görselleri eklendi
- [x] Image optimizasyonları yapıldı
- [x] TypeScript strict mode kapatıldı (hızlı test için)

## 🏃 Projeyi Çalıştırma

### 1. Terminal'de şu komutları çalıştır:

```bash
# Bağımlılıkları yükle (ilk kez ise)
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

### 2. Tarayıcıda Aç

```
http://localhost:3000
```

### 3. Test Edilecek Sayfalar

- **Ana Sayfa** (`/`)
  - [ ] Hero bölümü görselleri yükleniyor mu?
  - [ ] Logo görünüyor mu?
  - [ ] Animasyonlar çalışıyor mu?
  - [ ] WhatsApp butonu görünüyor mu?
  - [ ] Galeri görselleri yükleniyor mu?
  - [ ] Marka logoları kayıyor mu?
  
- **Hizmetlerimiz** (`/hizmetlerimiz`)
  - [ ] Sayfa açılıyor mu?
  - [ ] Hizmet kartları görünüyor mu?
  - [ ] Galeri çalışıyor mu?

- **Hakkımızda** (`/hakkimizda`)
  - [ ] Sayfa açılıyor mu?
  - [ ] Görseller yükleniyor mu?

- **İletişim** (`/iletisim`)
  - [ ] İletişim bilgileri görünüyor mu?
  - [ ] WhatsApp linki çalışıyor mu?

### 4. Responsive Test

- [ ] Mobil görünüm (< 768px)
- [ ] Tablet görünüm (768px - 1024px)
- [ ] Desktop görünüm (> 1024px)

### 5. Dark/Light Mode

- [ ] Theme toggle çalışıyor mu?
- [ ] Renkler doğru değişiyor mu?

## 🐛 Olası Sorunlar ve Çözümleri

### Görsel Yüklenmiyor
```bash
# .next klasörünü temizle
rm -rf .next
npm run dev
```

### Port Kullanımda
```bash
# 3001 portu kullan
npm run dev -- -p 3001
```

### Build Hatası
```bash
# node_modules'u temizle
rm -rf node_modules
npm install
```

## 📝 Notlar

- İlk yüklemede görseller yavaş yüklenebilir (Next.js optimize ediyor)
- Console'da bazı uyarılar olabilir (normal)
- Production build için: `npm run build && npm start`
