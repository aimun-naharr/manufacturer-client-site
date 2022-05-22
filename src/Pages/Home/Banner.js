import React from 'react';
import banner from '../../assets/brush.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 justify-items-between">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-[300px]'>
      <h1 class="text-5xl font-bold ">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;