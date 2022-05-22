import React from 'react';

const Tool = ({tool}) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={tool.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{tool.name}</h2>
    <p>{tool.description}</p>
    <p><small>Minimun Quantity: {tool.minimunQty}</small></p>
    <p><small>Available Quantity: {tool.availableQty}</small></p>
    <p><small>price: ${tool.price}</small></p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Tool;