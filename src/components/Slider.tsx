'use client';
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider: React.FC = () => {
  return (
    <Carousel autoplay>
      <div className='w-full h-[850px] relative'>
        <Image src='/slider_1.webp' alt='slider 1 photo' fill />
      </div>
      <div className='w-full h-[850px] relative'>
        <Image src='/slider_2.webp' alt='slider 2 photo' fill />
      </div>
      <div className='w-full h-[850px] relative'>
        <Image src='/slider_3.webp' alt='slider 3 photo' fill />
      </div>
      <div className='w-full h-[850px] relative'>
        <Image src='/slider_4.webp' alt='slider 4 photo' fill />
      </div>
      <div className='w-full h-[850px] relative'>
        <Image src='/slider_5.webp' alt='slider 5 photo' fill />
      </div>
    </Carousel>
  );
};

export default Slider;
