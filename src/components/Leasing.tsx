import { getI18n } from '@/locales/server';
import Image from 'next/image';

const Leasing = async () => {
  const t = await getI18n();
  return (
    <section
      id='leasing'
      className='flex flex-col gap-10 max-w-[1850px] mx-auto'
    >
      <h2 className='text-center text-3xl font-bold'>{t('leasing')}</h2>
      <div className='flex flex-col gap-4 items-center'>
        <div className='text-center'>{t('leasingText')}</div>
        <Image
          className='rounded-xl'
          src='/leasing.webp'
          alt='leasing photo'
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default Leasing;
