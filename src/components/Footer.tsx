import { getI18n } from '@/locales/server';
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
  const t = await getI18n();

  return (
    <footer className='bg-[#b91f27] py-5'>
      <div className='flex flex-wrap justify-between items-center md:justify-center md:flex-col'>
        <Link href='/'>
          <Image src='/arion.png' alt='arion logo' width={150} height={35} />
        </Link>
        <div className='flex flex-col items-center justify-center ml-52 lg:ml-20 md:ml-0'>
          <Image
            // className='ml-40 md:ml-0'
            src='/az_icon.svg'
            alt='azerbaycan flag'
            width={100}
            height={25}
          />
          <p className='text-white text-center md:hidden'>
            {t('allRightsReserved')} © {new Date().getFullYear()}
          </p>
        </div>
        <div className='md:flex md:flex-col md:gap-2'>
          <p className='text-white md:text-center'>{t('reachUs')}</p>
          <Link
            className='text-white hover:underline md:text-center'
            href={`mailto:ariontrucksaz@inbox.ru`}
          >
            {t('mail')}: ariontrucksaz@inbox.ru
          </Link>
          <Link
            className='text-white flex gap-2 items-center md:justify-center hover:underline md:text-center'
            href={`tel:+994 55 2982929`}
          >
            {t('phone')}:
            <Image
              src='/whatsapp_icon.svg'
              alt='whatsapp icon'
              width={25}
              height={25}
            />
            +994 55 2982929
          </Link>
          <p className='text-white text-center hidden md:block'>
            {t('allRightsReserved')} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
