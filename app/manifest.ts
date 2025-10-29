export default function manifest() {
  return {
    name: 'Özkan Oto Boyasız Göçük Düzeltme',
    short_name: 'Özkan Oto',
    description: 'Profesyonel boyasız göçük düzeltme ve kaporta onarım hizmeti',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#DC2626',
    icons: [
      {
        src: '/images/logo/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
