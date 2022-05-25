import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'ce8cd0dcaad28279f3fb7acab909015d'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img= result.data.url
                const product=
                    { name: data.name,
                        price: data.price,
                        description: data.description,
                        minimumQty: data.minimumQty,
                        availableQty:data.availableQty,
                        image:img}
                
                console.log(product)
                fetch('http://localhost:5000/product',{
                    method:'POST',
                    body: JSON.stringify(product),
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                   
                })
                .then(res=>res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('Product has been uploaded')
                    }
                })
            }
        })
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Product Name</span>
    </label>
    <input
        type="text"
        
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Price</span>
    </label>
    <input
        type="text"
        
        className="input input-bordered w-full max-w-xs"
        {...register("price", {
            required: {
                value: true,
                message: 'Price is Required'
            }
        })}
    />
    
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Description</span>
    </label>
    <input
        type="text"
        
        className="input input-bordered w-full max-w-xs"
        {...register("description", {
            required: {
                value: true,
                message: 'decription is Required'
            }
        })}
    />
    
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Minimum quantity</span>
    </label>
    <input
        type="text"
        
        className="input input-bordered w-full max-w-xs"
        {...register("minimumQty", {
            required: {
                value: true,
                message: 'minimumQty is Required'
            }
        })}
    />
    
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Available Quantity</span>
    </label>
    <input
        type="text"
        
        className="input input-bordered w-full max-w-xs"
        {...register("availableQty", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    
</div>




<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Image</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'Image is Required'
            }
        })}
    />
    
</div>

<input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
</form>

        </div>
    );
};

export default AddProduct;