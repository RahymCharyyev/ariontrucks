import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';

const Header = () => {
  const t = useTranslations('Index');
  return (
    <header className='py-5 px-10 flex items-center justify-between bg-[#00204a]'>
      <Link href='/'>
        <Image src='/arion.png' alt='arion logo' width={100} height={25} />
      </Link>
      <nav className='flex gap-4 text-white'>
        <Link className='hover:underline' href='/'>
          {t('main')}
        </Link>
        <Link className='hover:underline' href='#techService'>
          {t('products')}
        </Link>
        <Link className='hover:underline' href='#service'>
          {t('service')}
        </Link>
        <Link className='hover:underline' href='#leasing'>
          {t('leasing')}
        </Link>
        <Link className='hover:underline' href='#about'>
          {t('about')}
        </Link>
        <Link className='hover:underline' href='#contacts'>
          {t('contacts')}
        </Link>
      </nav>
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
