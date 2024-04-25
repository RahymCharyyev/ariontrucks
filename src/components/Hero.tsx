import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col gap-5 items-center my-10'>
      <h1 className='text-center font-bold text-4xl'>
        Добро пожаловать на оффициальный сайт компании «ARION»
      </h1>
      <Image
        className='rounded-xl'
        src='/arion.png'
        alt='Arion logo'
        width={700}
        height={300}
      />
    </section>
  );
};

export default Hero;
