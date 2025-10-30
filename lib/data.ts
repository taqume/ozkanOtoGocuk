import { Service, GalleryItem, Testimonial, Brand, ContactInfo } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+90 536 224 80 65',
  whatsapp: '+905362248065',
  address: 'Merkez Mahallesi, Hedef Sk. 10-14, 34245 Gaziosmanpaşa/İstanbul',
  workingHours: '08:00 - 20:00 (Pazar Kapalı)',
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
    name: 'Emre Yiğit',
    rating: 5,
    comment: 'İşini temiz yapan düzgün bir firma, kesinlikle tavsiye ediyorum. Arabamın sol arka direk kısmı öncesi ve sonrası farklı görebilirsiniz.',
  },
  {
    id: '2',
    name: 'Mehmet Kurt',
    rating: 5,
    comment: 'Kesinlikle çok güzel bir işçiliği var. Kendisi de konuşması ve üslubuyla güzel bir insan. Dolu hasarı ve boyasız göçük düzeltme için tavsiye ederim.',
  },
  {
    id: '3',
    name: 'Ömer Vıcıl',
    rating: 5,
    comment: 'Sanayiden arabamı gösterdiğimde yüzde 80 olur denilen göçüğü Mehmet usta sayesinde yüzde yüz yaptı. Gelmenizi öneririm, işin ehli bir usta.',
  },
  {
    id: '4',
    name: 'Enes Mermer',
    rating: 5,
    comment: 'Boyasız göçük düzeltme işinde gerçekten ustalar, çok özenli ve titiz çalışma yapıyorlar. Personelin ilgi ve alakası için ayrıca teşekkür ederim.',
  },
  {
    id: '5',
    name: 'Şahin Özgün',
    rating: 5,
    comment: 'Aracımın iki kapısını boyasız göçük düzeltme ve komple pasta cila boya koruma yaptırdım, çok memnun kaldım. Mehmet Özkan usta harbi sanatkârlar, herkese tavsiye ediyorum.',
  },
  {
    id: '6',
    name: 'Mustafa Ersoy',
    rating: 5,
    comment: 'İşinden memnun kaldım. Teşekkür ederim. Beklediğimden daha güzel oldu. Aracına göçük yaptırmak isteyen herkes gönül rahatlığıyla gidebilir.',
  },
  {
    id: '7',
    name: 'Sedat Bakış',
    rating: 5,
    comment: 'Mehmet Bey, bir büyüğümüz bir abimiz, kendisine çok müteşekkerim. İşini çok iyi yapan mütevazi birisi ve çok dürüst birisi. Uygun ve temiz bir şekilde arabamın kaporta bakımını çok ince iyi bir şekilde yaptı.',
  },
  {
    id: '8',
    name: 'Muhammet Yılmaz',
    rating: 5,
    comment: 'İnternet üzerinden boyasız göçük düzeltme konusunda araştırmalar yaparak kendilerine ulaştık. Aracımızda park ederken oluşan arka camurluktaki göçüğü boyasız olarak ilk günkü gibi onardılar, işçilik güzel, fiyat güzel.',
  },
  {
    id: '9',
    name: 'Aras Aydın',
    rating: 5,
    comment: 'Aracımı Mehmet ustaya gösterdiğimde bana yapacaklarını anlattı ve aracımı teslim almaya gittiğimde gerçekten bu kadarını beklemiyordum. Hiçbir şey belli olmuyor, çok güzel el işçiliği var. Gönül rahatlığı ile gidebilirsiniz.',
  },
  {
    id: '10',
    name: 'Sinyor',
    rating: 5,
    comment: 'Kendilerini buraya ve buradaki yorumlara bakarak buldum. 10 farklı yerle yazıştım ve en uygun fiyat ve en iyi saati arkadaşlar verince şansımı denedim. 1-2 saatte işiniz tamam dediler, kendilerine teşekkür ederim.',
  },
  {
    id: '11',
    name: 'Ahmet Kural',
    rating: 5,
    comment: 'Yeni aracımda meydana gelen ufak bir kaza sonucu kapıda göçük oluştu. Hem fiyat bakımından uygun ve çok kaliteli işçilik, önceki ve sonraki halini gördüğümde ben dahi inanamadım. Ellerinize sağlık.',
  },
  {
    id: '12',
    name: 'Faruk Deniz',
    rating: 5,
    comment: 'Tavsiye üzerine gitmiş olduğum Mehmet usta, aracımın sağ iki kapısında oluşan göçükleri inanılmaz bir ustalıkla sıfır gibi düzeltti. Kesinlikle tereddüt etmeden gidin, uygun fiyat ve kaliteli işçilik.',
  },
  {
    id: '13',
    name: 'Muhammed İkbal Turgut',
    rating: 5,
    comment: 'Mehmet usta ellerine sağlık. Hem uygun fiyat verildi problemimin giderilmesi için, hem de gayet güzel bir iş çıkardılar. Kesinlikle boyasız göçük düzeltmede ilk adresiniz burası olmalı.',
  },
  {
    id: '14',
    name: 'Metin Yıldırım',
    rating: 5,
    comment: "Mehmet ustayı Google'da bularak gittim, kendisini tanımadığım için kaygılıydım biraz ama bana merak etme beğeneceksin dedi, öyle de oldu. Çok güzel işçilik yaptı.",
  },
  {
    id: '15',
    name: 'Emin Can Yaşar',
    rating: 5,
    comment: 'Çok iyi karşılama ve güler yüzlerini eksik etmediler, hızlı çözüm. Mehmet ustaya göçük düzeltme işlemi için teşekkürlerimi sunuyorum, aracımı sıfır alınmış gibi düzeltti.',
  },
  {
    id: '16',
    name: 'Banu Sarıkaya',
    rating: 5,
    comment: 'Sağ çamurluk ve ön tampondaki kazadan dolayı oluşan göçük için gitmiştim. Mehmet usta ve ekibine çok teşekkür ederim, yorumlara bakarak buldum kendisini. Gayet başarılı, hızlı bir şekilde hallettiler.',
  },
  {
    id: '17',
    name: 'Faruk Şahinoğlu',
    rating: 5,
    comment: 'Göçük düzeltmede son nokta Mehmet ustadır. Arkadaş tavsiyesiyle götürdüğüm aracımı boyalı sistemle düzeltilir sadece demelerine rağmen Mehmet usta aracımı boyasız göçük yaparak düzeltti, herkese tavsiye ederim.',
  },
  {
    id: '18',
    name: 'Özgür Çakır',
    rating: 5,
    comment: 'Boyasız göçük düzeltmede Mehmet ustayı, Özkan Otomotiv\'i tek geçerim. İşini hızlı ve tertemiz yapan bir firma. Fiyatları da oldukça iyi, tavsiye ederim.',
  },
  {
    id: '19',
    name: 'Göktan Bilen',
    rating: 5,
    comment: "Mehmet ustayı internetten tesadüf eseri buldum ve şunu rahatlıkla söyleyebilirim: hiç düşünmeden gidebileceğiniz bir yer. Aracımdaki göçüğü hızlı ve çok güzel şekilde düzeltti, işin ehli usta.",
  },
  {
    id: '20',
    name: 'Erdem Sadi',
    rating: 5,
    comment: 'Temiz işçilik, herkese tavsiye ederim. Aracımın tavanındaki göçüğü döşeme sökülmeden yaptılar.',
  },
  {
    id: '21',
    name: 'Emir Akarsu',
    rating: 5,
    comment: 'Aracımın arka çamurluk göçüğünü temiz ve güzel işçiliğiyle yapan Mehmet ustaya çok teşekkür ederim, herkese tavsiye ederim. Mükemmel işçilik, elinize sağlık.',
  },
  {
    id: '22',
    name: 'Yusuf Can',
    rating: 5,
    comment: 'Servise götürdüğüm araca çamurluk değişecek demelerine rağmen Mehmet usta ve ekibi aracımı boyasız düzelterek on numara iş çıkardılar. Pasta cila işlemini de yapıyorlar, arabanın rengi eskisine döndü.',
  },
  {
    id: '23',
    name: 'Zafer Tayfun Keskin',
    rating: 5,
    comment: 'İnternetten bularak gittim. Sağ olsun Mehmet usta işçilikte memnun etti, rakamda da yardımcı oldu. Tavsiye edebileceğim bir işletme.',
  },
  {
    id: '24',
    name: 'Kadir Sayan',
    rating: 5,
    comment: 'Hafta sonu aracımın arka kapısındaki göçüğü Mehmet usta ve ekibine getirdim. Güler yüzü ve temiz işçiliğiyle aracımı kusursuz bir işçilik yaptı, herkese tavsiye ederim.',
  },
  {
    id: '25',
    name: 'Ercem Kurt',
    rating: 5,
    comment: "Google yorumlarına bakarak götürdüm aracımı. Ustanın eline sağlık, onarılan yeri ayırt edemedim. Temiz ve hızlı işçilik için teşekkürler.",
  },
  {
    id: '26',
    name: 'Turgay Dursun',
    rating: 5,
    comment: 'Boyasız göçük düzertme işinde bir numara. Aracımı temiz bir işçilikle yaptı, herkese tavsiye ederim.',
  },
  {
    id: '27',
    name: 'Kadirwes',
    rating: 5,
    comment: 'Mehmet ustaya ikidır arabamın göçük sorunu için gidiyorum. Gerek işçiliği gerekse esnaf olarak çok iyi bir adam. Gözünüz arkada kalmadan gidip arabanızı teslim edebilirsiniz.',
  },
  {
    id: '28',
    name: 'Muhammed Ali Sucu',
    rating: 5,
    comment: 'Mehmet ustaya ikinci araç getirişim oldu. Aracımın sağ ön çamurluğunu çok güzel onardı. Gerçekten bu devirde sanayide düzgün esnaf bulmak çok zor ama Mehmet ustayla tanışırsanız hiçbir sorun olmaz.',
  },
  {
    id: '29',
    name: 'Ömer Koçak',
    rating: 5,
    comment: 'Aracımın sağ arka kapısındaki göçüğü Mehmet ustadan internetten fotoğraf atarak göçüğün düzeleceğine dair bilgi verdi. Onarımı hızlı ve çok güzel bir onarımla düzeltildi, işin ehli bir usta.',
  },
  {
    id: '30',
    name: 'Barış Gümüşsoy',
    rating: 5,
    comment: 'Farklı boyasız göçük düzeltme işi yapan yerlerde boyanması gerek, düzelmez denilen kapıyı çok kısa sürede yaparak gün içinde teslim ettiler. İlgi alakaları, esnaflıkları gerçekten çok iyiydi.',
  },
  {
    id: '31',
    name: 'Barış Kaan Tırıç',
    rating: 5,
    comment: 'Aracımın göçüğü için internetten bulduğum Mehmet usta ve ekibine çok teşekkür ederim. Misafirperver davranışları ve güzel işçiliklerinden dolayı teşekkür ederim, herkese tavsiye ederim.',
  },
];

export const BRANDS: Brand[] = [
  { id: 'mercedes', name: 'Mercedes-Benz', logo: '/images/brands/mercedes.png' },
  { id: 'bmw', name: 'BMW', logo: '/images/brands/bmw.png' },
  { id: 'audi', name: 'Audi', logo: '/images/brands/audi.png' },
  { id: 'volkswagen', name: 'Volkswagen', logo: '/images/brands/volkswagen.png' },
  { id: 'volvo', name: 'Volvo', logo: '/images/brands/volvo.png' },
  { id: 'chevrolet', name: 'Chevrolet', logo: '/images/brands/chevrolet.png' },
  { id: 'nissan', name: 'Nissan', logo: '/images/brands/nissan.png' },
  { id: 'citroen', name: 'Citroën', logo: '/images/brands/citroen.png' },
  { id: 'ford', name: 'Ford', logo: '/images/brands/ford.png' },
  { id: 'renault', name: 'Renault', logo: '/images/brands/renault.png' },
  { id: 'peugeot', name: 'Peugeot', logo: '/images/brands/peugeot.png' },
  { id: 'toyota', name: 'Toyota', logo: '/images/brands/toyota.png' },
  { id: 'honda', name: 'Honda', logo: '/images/brands/honda.png' },
  { id: 'fiat', name: 'Fiat', logo: '/images/brands/fiat.png' },
  { id: 'dacia', name: 'Dacia', logo: '/images/brands/dacia.png' },
  { id: 'skoda', name: 'Skoda', logo: '/images/brands/skoda.png' },
  { id: 'seat', name: 'Seat', logo: '/images/brands/seat.png' },
  { id: 'opel', name: 'Opel', logo: '/images/brands/opel.png' },
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
