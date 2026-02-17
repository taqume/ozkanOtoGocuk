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
        src: '/images/logo/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/images/logo/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
