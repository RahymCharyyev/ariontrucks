import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#b91f27] py-5 px-10'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/arion.png' alt='arion logo' width={100} height={25} />
        </Link>
        <p className='text-white'>Почта для связи: ariontrucksaz@inbox.ru</p>
      </div>
      <p className='text-white text-center'>
        Все права защищены © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
