import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#b91f27] py-5 px-10'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/arion.png' alt='arion logo' width={150} height={35} />
        </Link>
        <Image
          className='ml-20'
          src='/az_icon.svg'
          alt='azerbaycan flag'
          width={100}
          height={25}
        />
        <div>
          <p className='text-white'>Связаться с нами:</p>
          <p className='text-white'>Почта: ariontrucksaz@inbox.ru</p>
          <p className='text-white flex gap-2 items-center'>
            Телефон:
            <Image
              src='/whatsapp_icon.svg'
              alt='whatsapp icon'
              width={25}
              height={25}
            />
            +994 55 2982929
          </p>
        </div>
      </div>
      <p className='text-white text-center'>
        Все права защищены © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
