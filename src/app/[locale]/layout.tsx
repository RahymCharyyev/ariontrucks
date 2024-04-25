import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer';
import BackTop from 'antd/es/float-button/BackTop';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        {children}
        <BackTop type='primary' />
        <Footer />
      </body>
    </html>
  );
}
