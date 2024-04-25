'use client';
import Image from 'next/image';
import Select from 'antd/es/select';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

const { Option } = Select;

const LanguageSelect = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleLanguageChange = (selectedLocale: 'ru' | 'az') => {
    changeLocale(selectedLocale);
  };

  return (
    <Select
      aria-label='search'
      defaultValue={locale}
      variant='borderless'
      onChange={handleLanguageChange}
    >
      <Option value='ru'>
        <Image
          src='/ru_icon.svg'
          alt='Russian language'
          width={30}
          height={20}
        />
      </Option>
      <Option value='az'>
        <Image
          src='/az_icon.svg'
          alt='Azerbaycan language'
          width={30}
          height={18}
        />
      </Option>
    </Select>
  );
};
export default LanguageSelect;
