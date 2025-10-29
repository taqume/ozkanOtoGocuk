import { Service, GalleryItem, Testimonial, Brand, ContactInfo } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+90 536 224 80 65',
  whatsapp: '+905362248065',
  address: 'Merkez Mahallesi, Hedef Sk. 10-14, 34245 Gaziosmanpaşa/İstanbul',
  workingHours: '08:00 - 20:00',
  social: {
    facebook: 'https://www.facebook.com/gocukservisi/?locale=tr_TR',
    instagram: 'https://www.instagram.com/ozkanotogocukduzeltme/',
  },
};

export const SERVICES: Service[] = [
  {
    id: 'kaporta-duzeltme',
    title: 'Kaporta Düzeltme',
    description: 'Aracınızın darbe almış metal kısımlarını orijinal haline getiriyoruz.',
    icon: '🔧',
    features: [
      'Profesyonel ekipman',
      'Uzman kadro',
      'Hızlı işlem',
      'Garantili hizmet',
    ],
  },
  {
    id: 'gocuk-duzeltme',
    title: 'Boyasız Göçük Düzeltme (PDR)',
    description: 'Aracınızın boyasına zarar vermeden göçükleri düzeltiyoruz.',
    icon: '🎯',
    features: [
      'Boya koruma',
      'Orijinal değer korunur',
      'Hızlı teslim',
      'İz bırakmayan işlem',
    ],
  },
  {
    id: 'dolu-hasari',
    title: 'Dolu Hasarı Onarımı',
    description: 'Dolu yağışı sonrası oluşan hasarları boyasız teknikle onarıyoruz.',
    icon: '🌧️',
    features: [
      'Sigorta işlemleri',
      'Toplu hasar onarımı',
      'Profesyonel ekipman',
      'Garantili sonuç',
    ],
  },
  {
    id: 'mini-onarim',
    title: 'Mini Onarım',
    description: 'Küçük çizik ve boya kusurlarını hızlıca gideriyoruz.',
    icon: '✨',
    features: [
      'Hızlı işlem',
      'Uygun fiyat',
      'Profesyonel sonuç',
      'Anında teslim',
    ],
  },
  {
    id: 'boya-koruma',
    title: 'Boya Koruma',
    description: 'Aracınızın boyasını dış etkenlere karşı koruyoruz.',
    icon: '🛡️',
    features: [
      'Seramik kaplama',
      'UV koruma',
      'Uzun ömürlü',
      'Parlak görünüm',
    ],
  },
  {
    id: 'lokal-boya',
    title: 'Lokal Boya Onarımı',
    description: 'Sadece hasarlı bölgeye lokal boya uygulayarak maliyeti düşürüyoruz.',
    icon: '🎨',
    features: [
      'Uygun fiyat',
      'Renk uyumu garantisi',
      'Hızlı işlem',
      'Profesyonel uygulama',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mehmet Yılmaz',
    rating: 5,
    comment: 'Arabamın kapısındaki göçüğü boyasız düzelttiler. Sonuç harika, hiç belli olmuyor. Kesinlikle tavsiye ederim!',
    date: '2024-10-15',
    vehicle: 'BMW 3 Serisi',
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    rating: 5,
    comment: 'Dolu hasarı sonrası 15 göçük vardı araçta. Hepsini tek tek düzelttiler, boya kalitesi hiç bozulmadı. Çok memnunum.',
    date: '2024-09-28',
    vehicle: 'Mercedes C-Class',
  },
  {
    id: '3',
    name: 'Can Öztürk',
    rating: 5,
    comment: 'Profesyonel bir ekip, işlerini çok iyi yapıyorlar. Fiyatlar da gayet makul. Teşekkürler!',
    date: '2024-10-20',
    vehicle: 'Audi A4',
  },
  {
    id: '4',
    name: 'Zeynep Kaya',
    rating: 5,
    comment: 'Park yaparken kaportaya çarpmıştım. Özkan Oto sayesinde aracım yeni gibi oldu. Hem hızlı hem kaliteli.',
    date: '2024-10-05',
    vehicle: 'Volkswagen Passat',
  },
  {
    id: '5',
    name: 'Burak Şahin',
    rating: 5,
    comment: 'İlk defa boyasız göçük düzeltme yaptırdım. Sonuçtan çok memnun kaldım. Kesinlikle tavsiye ederim!',
    date: '2024-09-15',
    vehicle: 'Renault Megane',
  },
];

export const BRANDS: Brand[] = [
  { id: 'mercedes', name: 'Mercedes-Benz', logo: '/images/brands/mercedes.png' },
  { id: 'bmw', name: 'BMW', logo: '/images/brands/bmw.png' },
  { id: 'audi', name: 'Audi', logo: '/images/brands/audi.png' },
  { id: 'volkswagen', name: 'Volkswagen', logo: '/images/brands/volkswagen.png' },
  { id: 'renault', name: 'Renault', logo: '/images/brands/renault.png' },
  { id: 'peugeot', name: 'Peugeot', logo: '/images/brands/peugeot.png' },
  { id: 'ford', name: 'Ford', logo: '/images/brands/ford.png' },
  { id: 'toyota', name: 'Toyota', logo: '/images/brands/toyota.png' },
  { id: 'honda', name: 'Honda', logo: '/images/brands/honda.png' },
  { id: 'hyundai', name: 'Hyundai', logo: '/images/brands/hyundai.png' },
];

// WhatsApp mesaj linki oluşturma
export const getWhatsAppLink = (message?: string): string => {
  const baseUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

// Telefon numarasını formatla
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\+90)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
};
