import React from 'react';
import banner from '../../assets/brush.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse  justify-between items-center w-full">
    <img src={banner} class="max-w-sm rounded-lg w-full" />
    <div className='md:w-[400px] lg:w-[600px]'>
      <h1 class="text-4xl lg:text-5xl font-bold uppercase"><span className='text-secondary'>Welcome to Brush</span> <span className='text-[#3d4451]'>manufacturer</span></h1>
      <p class="py-6">We're here to provide you the best quality bristles. Our every brush is made with our customize bristles. We're serving for 20 years in a row with best reviews.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;