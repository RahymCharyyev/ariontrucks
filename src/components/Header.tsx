import { getI18n } from '@/locales/server';
import Image from 'next/image';
import Link from 'next/link';
import DrawerComponent from './DrawerComponent';
import LanguageSelect from './LanguageSelect';

const Header = async () => {
  const t = await getI18n();
  return (
    <header className='py-5 px-10 flex items-center justify-between bg-[#00204a]'>
      <DrawerComponent />
      <Link href='/'>
        <Image src='/arion.png' alt='arion logo' width={150} height={35} />
      </Link>
      <nav className='flex gap-4 text-white md:hidden'>
        <Link className='hover:underline' href='/'>
          {t('main')}
        </Link>
        <Link className='hover:underline' href='#models'>
          {t('models')}
        </Link>
        <Link className='hover:underline' href='#techService'>
          {t('techService')}
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
      <LanguageSelect />
    </header>
  );
};

export default Header;
