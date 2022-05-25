import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const userName = user.displayName
    const email = user.email
    const [quantityError, setQuantityError] = useState('')
    const { data: tool, isLoading } = useQuery('tool', () =>
        fetch(`http://localhost:5000/purchase/${id}`).then(res =>
            res.json()
        )
    )
    const name = tool?.name
    const image = tool?.image
    const price = tool?.price
    const minimumQty = tool?.minimumQty
    const availableQty = tool?.availableQty
    const description = tool?.description



    const handlePurchase = e => {
        e.preventDefault()


        const quantity = e.target.quantity.value
        const address = e.target.address.value
        const phone = e.target.phone.value
        const amount = parseInt(price) * parseInt(quantity)
        if (quantity < minimumQty || quantity > availableQty) {

            setQuantityError('Please order between minimum and available quantity')
            return

        }
        else {
            fetch('http://localhost:5000/order', {
                method: 'POST',
                body: JSON.stringify({userName,email, name, amount, address, phone}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) =>{
                    console.log(data)
                    toast.success('Your order has been placed')
                });
        }

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-evenly flex-col md:flex-row-reverse'>

            <div class="card w-96 bg-base-100 shadow-xl border-red-500">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum purchase: {minimumQty}</p>
                    <p>Available quantity: {availableQty}</p>
                    <p>price: ${price}</p>
                </div>
                <img className='h-[300px}' src={image} alt="Shoes" />
            </div>



            <div className='shadow-2xl p-10'>
                <form onSubmit={handlePurchase}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>

                        </label>
                        <input disabled value={userName} type="text" placeholder="Type here" name='name' class="input input-bordered w-[300px]" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product name</span>

                        </label>
                        <input disabled value={name} type="text" placeholder="Type here"  class="input input-bordered w-[300px]" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>

                        </label>
                        <input disabled value={price} type="text" placeholder="Type here" name='price' class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>

                        </label>
                        <input defaultValue={minimumQty} min={minimumQty} max={availableQty} required type="number" name='quantity' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <span className='text-red-500'>{quantityError}</span>

                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>

                        </label>
                        <input required name='address' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone number</span>

                        </label>
                        <input required name='phone' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <button type='submit' class="btn btn-active btn-primary mt-3">Place order</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;