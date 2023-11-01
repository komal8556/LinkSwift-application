import React from 'react';
import {features} from "../constant/index";

const FeatureCard = ({icon, title, content}) => {
  return (
    <div className='bg-[#CEE4F0] max-w-[24rem] rounded-2xl p-8 '>
      <div className='w-[3.8rem] h-[3.8rem] flex justify-center items-center bg-textColor rounded-full mb-8'>
        <img src={icon} alt="icon" />
      </div>
      <h5 className='text-textColor font-medium text-2xl'>{title}</h5>
      <p className='mt-3 text-textColor/80 text-base'>{content}</p>
    </div>
  )
}

const CardsInfo = () => {
  return (
    <section className='card-section py-16 lg:py-24'>
      <div className='max-w-[38rem] text-center mx-auto'>
        <h2 className='text-4xl text-textColor font-semibold'>Effortless Link Management</h2>
        <p className='text-lg text-textColor/80 mt-4'>Transform lengthy URLs into concise, easy-to-share links. Customize for relevance and gain valuable insights with advanced analytics.</p>
      </div>
      <div className='flex gap-9 mt-20 flex-1 mx-auto justify-center flex-wrap'>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default CardsInfo

