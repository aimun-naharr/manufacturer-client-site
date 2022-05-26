import React from 'react';
import embrossed from '../../assets/embrossed.jfif'
const BestProduct = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={embrossed} class="max-w-lg rounded-lg w-full" />
    <div className='w-'>
      <h1 class="text-5xl font-bold">Best <span className='text-secondary'>Selling</span> Product</h1>
      <p class="py-6">This embrossed roller already impressed our thousand customers. It can create different patterns in your wall to keep your elegant.</p>
      
    </div>
  </div>
</div>
    );
};

export default BestProduct;