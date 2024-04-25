'use client';

import { Button, Form, Input, Space } from 'antd';
const { TextArea } = Input;

const Contacts = () => {
  const [form] = Form.useForm();
  return (
    <section className='flex flex-col items-center my-10'>
      <h2 className='text-3xl font-bold text-center mb-5'>Отправить заявку</h2>
      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        autoComplete='off'
      >
        <Form.Item name='firstName' label='Имя' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='lastName' label='Фамилия' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='mail'
          label='Электронная почта'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <TextArea rows={4} placeholder='Сообщение' maxLength={6} />
          <Space className='flex items-center text-center justify-center'>
            <Button className='mt-5'>Отправить</Button>
          </Space>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contacts;
