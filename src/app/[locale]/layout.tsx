import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { I18nProviderClient } from '@/locales/client';
import { getI18n } from '@/locales/server';
import BackTop from 'antd/es/float-button/BackTop';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords:
      'Turkmenistan news,новости Туркменистана, новости Туркмении,туркменский,Туркменистан,Туркмения,туркменистанцы, Ашхабад,ашхабадский,законы Туркменистана,банки ТУркменистана, справочник Туркменистана,Афиша Ашхабада, Магазины Ашхабада, Работа в Ашхабаде,Работа в Туркменистане,Авто Объявления,Недвижмость Туркменистана,Тендеры Туркменистана, Заведения Туркменистана, Услуги Туркменистана,Туризм в Туркменистане,Образование в Туркменистане,Бизнес справочник Туркменистана,Спорт Туркменистана,Партнерство в Туркменистане, Публикации о Туркменистане,Туркменбаши,Лебап,Мары,Ташауз,Балканабат,Аваза,Каспий,экономика Туркменистана,культура Туркменистана',
  };
}

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <I18nProviderClient locale={locale}>
          <Header />
          {children}
          <BackTop type='primary' />
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
