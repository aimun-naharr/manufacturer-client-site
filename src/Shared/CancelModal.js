import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ order, refetch, setDeleteOrder }) => {
  const { name, _id } = order
  const handleDelete = (id) => {
    fetch(`https://sheltered-wildwood-63825.herokuapp.com/tool/${id}`, {
  method: 'DELETE',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    if(data.deletedCount){
      toast.success(`${name} has been deleted`)
      setDeleteOrder(null)
      refetch()
    }
  });
   
  }
  return (
    <div>
      <input type="checkbox" id="cancel-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          
          <h3 class="font-bold text-lg text-red-500 text-center">Are your sure you want to delete {name}?</h3>
          <div class="modal-action">
            <button for="cancel-modal" onClick={() => handleDelete(_id)} class="btn bg-red-500">Delete</button>
            <label for="cancel-modal" class="btn">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;