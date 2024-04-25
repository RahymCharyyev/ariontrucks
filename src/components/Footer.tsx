import { getI18n } from '@/locales/server';
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
  const t = await getI18n();

  return (
    <footer className='bg-[#b91f27] py-5 px-10'>
      <div className='flex flex-wrap justify-between items-center'>
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
          <p className='text-white'>{t('reachUs')}</p>
          <Link
            className='text-white hover:underline'
            href={`mailto:ariontrucksaz@inbox.ru`}
          >
            {t('mail')}: ariontrucksaz@inbox.ru
          </Link>
          <Link
            className='text-white flex gap-2 items-center hover:underline'
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
        </div>
      </div>
      <p className='text-white text-center'>
        {t('allRightsReserved')} © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
