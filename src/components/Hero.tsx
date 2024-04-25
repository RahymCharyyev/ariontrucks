import { getI18n } from '@/locales/server';
// import Image from 'next/image';

const Hero = async () => {
  const t = await getI18n();
  return (
    <section className='flex flex-col gap-5 items-center my-10'>
      <h1 className='text-center font-bold text-4xl'>{t('welcomeTitle')}</h1>
      {/* <Image
        className='rounded-xl'
        src='/hero_photo.jpg'
        alt='hero photo'
        width={700}
        height={300}
      /> */}
    </section>
  );
};

export default Hero;
