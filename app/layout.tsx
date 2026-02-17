import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Özkan Oto Boyasız Göçük Düzeltme',
  description: 'İstanbul\'da profesyonel boyasız göçük düzeltme (PDR), kaporta onarımı ve dolu hasarı hizmeti. Aracınızın değerini koruyun.',
  keywords: 'boyasız göçük düzeltme, PDR, kaporta onarımı, dolu hasarı, İstanbul, Gaziosmanpaşa',
  authors: [{ name: 'Özkan Oto' }],
  icons: {
    icon: '/images/logo/icon.png',
  },
  openGraph: {
    title: 'Özkan Oto Boyasız Göçük Düzeltme',
    description: 'Profesyonel boyasız göçük düzeltme hizmeti',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D63JTYYST"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D63JTYYST');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
