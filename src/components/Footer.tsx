import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#b91f27] py-5 px-10'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/arion.png' alt='arion logo' width={100} height={25} />
        </Link>
        <div>
          <p className='text-white'>Связаться с нами:</p>
          <p className='text-white'>Почта: ariontrucksaz@inbox.ru</p>
          <p className='text-white'>Телефон: +994 55 2982929</p>
        </div>
      </div>
      <p className='text-white text-center'>
        Все права защищены © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
