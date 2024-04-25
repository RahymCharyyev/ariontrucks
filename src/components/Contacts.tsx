'use client';

import { useI18n } from '@/locales/client';
import { Button, Form, Input, Space } from 'antd';
const { TextArea } = Input;

const Contacts = () => {
  const [form] = Form.useForm();
  const t = useI18n();
  return (
    <section id='contacts' className='flex flex-col items-center my-10'>
      <h2 className='text-3xl font-bold text-center mb-5'>
        {t('contactsTitle')}
      </h2>
      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        autoComplete='off'
      >
        <Form.Item name='name' label={t('name')} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='surname'
          label={t('surname')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='mail' label={t('mail')} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <TextArea rows={4} placeholder={t('message')} maxLength={6} />
          <Space className='flex items-center text-center justify-center'>
            <Button className='mt-5'>{t('send')}</Button>
          </Space>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contacts;
