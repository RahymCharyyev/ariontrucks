import { getI18n } from '@/locales/server';
import Image from 'next/image';

const About = async () => {
  const t = await getI18n();
  return (
    <section
      id='about'
      className='flex flex-col items-center gap-10 max-w-[1850px] mx-auto mt-10'
    >
      <h2 className='font-bold text-2xl'>{t('about')}</h2>
      <div className='text-center'>{t('aboutText')}</div>
      <Image
        className='rounded-xl'
        src='/models (13).jpg'
        alt='About us photo'
        width={700}
        height={300}
      />
    </section>
  );
};

export default About;
