import Image from 'next/image';

const Leasing = () => {
  return (
    <section
      id='leasing'
      className='flex flex-col gap-10 max-w-[1850px] mx-auto'
    >
      <h2 className='text-center text-3xl font-bold'>Лизинг</h2>
      <div className='flex flex-col gap-4 items-center'>
        <div className='text-center'>
          Лизинг предоставляет возможность эксплуатировать технику с минимальным
          капиталовложением и сохранять средства на развитие бизнеса. Мы поможем
          Вам подобрать выгодные условия финансирования, оставьте заявку на
          нашем сайте и мы свяжемся с Вами в ближайшее время.
        </div>
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
