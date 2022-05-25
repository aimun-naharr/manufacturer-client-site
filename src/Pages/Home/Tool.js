import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const navigate=useNavigate()
  const handlePurchase=(id)=>{
navigate(`/purchase/${id}`)
  }
    return (
        <div class="card card-compact md:w-96 w-72 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={tool.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{tool.name}</h2>
    <p>{tool.description}</p>
    <p>Minimun Quantity: {tool.minimumQty}</p>
    <p>Available Quantity: {tool.availableQty}</p>
    <p>price: ${tool.price}</p>
    <div class="card-actions justify-end">
      <button onClick={()=>handlePurchase(tool._id)} class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Tool;