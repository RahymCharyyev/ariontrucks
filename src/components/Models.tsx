import Image from 'next/image';

const Models = () => {
  return (
    <section
      id='models'
      className='max-w-[1850px] mx-auto flex flex-col gap-5 my-10'
    >
      <h2 className='text-center text-3xl font-bold'>Модели</h2>
      <div className='flex flex-wrap gap-5 justify-between'>
        <Image
          className='rounded-xl'
          src='/models (1).jpg'
          alt='models 1 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (2).jpg'
          alt='models 2 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (3).jpg'
          alt='models 3 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (4).jpg'
          alt='models 4 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (5).jpg'
          alt='models 5 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (6).jpg'
          alt='models 6 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (7).jpg'
          alt='models 7 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (8).jpg'
          alt='models 8 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (9).jpg'
          alt='models 9 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (10).jpg'
          alt='models 10 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (14).jpg'
          alt='models 11 photo'
          width={400}
          height={300}
        />
        <Image
          className='rounded-xl'
          src='/models (13).jpg'
          alt='models 12 photo'
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default Models;
