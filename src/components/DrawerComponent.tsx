'use client';
import { useI18n } from '@/locales/client';
import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const DrawerComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const t = useI18n();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='hidden md:block'>
      <Image
        src='/hambuger_icon.svg'
        alt='hamburger menu'
        onClick={showDrawer}
        width={25}
        height={25}
      />
      <Drawer placement='left' onClose={onClose} open={open}>
        <nav className='flex flex-col gap-5'>
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
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
