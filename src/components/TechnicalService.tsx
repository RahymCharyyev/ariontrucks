import { getI18n } from '@/locales/server';
import Image from 'next/image';

const TechnicalService = async () => {
  const t = await getI18n();
  return (
    <section
      id='techService'
      className='flex flex-col gap-10 max-w-[1850px] mx-auto'
    >
      <h2 className='text-center text-3xl font-bold'>
        {t('techServiceTitle')}
      </h2>
      <div className='flex flex-wrap justify-between'>
        <div className='flex-1'>
          <p>{t('techServiceText')}</p>
          <h2>{t('techServiceFirstSubtitle')}</h2>
          <ul>
            <li>{t('techServiceFirstList1')}</li>
            <li>{t('techServiceFirstList2')}</li>
            <li>{t('techServiceFirstList3')}</li>
            <li>{t('techServiceFirstList4')}</li>
            <li>{t('techServiceFirstList5')}</li>
            <li>{t('techServiceFirstList6')}</li>
            <li>{t('techServiceFirstList7')}</li>
            <li>{t('techServiceFirstList8')}</li>
          </ul>
          <h2>{t('techServiceSecondSubtitle')}</h2>
          <ul>
            <li>{t('techServiceSecondList1')}</li>
            <li>{t('techServiceSecondList2')}</li>
            <li>{t('techServiceSecondList3')}</li>
            <li>{t('techServiceSecondList4')}</li>
            <li>{t('techServiceSecondList5')}</li>
            <li>{t('techServiceSecondList6')}</li>
            <li>{t('techServiceSecondList7')}</li>
            <li>{t('techServiceSecondList8')}</li>
          </ul>
        </div>
        <Image
          className='rounded-xl'
          src='/tech_service.webp'
          alt='technical service photo'
          width={700}
          height={300}
        />
      </div>
    </section>
  );
};

export default TechnicalService;
