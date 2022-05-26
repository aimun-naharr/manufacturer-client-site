import React from 'react';
import blendingBrush from '../../assets/blendingBrush.jfif'
import paintingBrush from '../../assets/paintingBrush.jfif'
import hairBrush from '../../assets/hairBrush.jfif'
import roller from '../../assets/roller.jfif'
import embrossed from '../../assets/embrossed.jfif'
const Preview = () => {
    return (
        <div className='mt-[60px] mb-[80px]'>
            <h1 className='text-4xl text-center mb-[30px] font-bold uppercase'><span className='text-secondary'>Preview</span> Brushes</h1>
            <div class="carousel carousel-center rounded-box">
  <div class="carousel-item">
    <img src={blendingBrush} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={embrossed} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={roller} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={paintingBrush} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={hairBrush} alt="Pizza" />
  </div> 
  
</div>
        </div>
    );
};

export default Preview;