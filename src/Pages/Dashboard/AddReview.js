import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const name=user.displayName
    const onSubmit = data => {
        console.log(data)
        const review = {
            review: data.review,
            ratings: data.ratings,
            name
        }
        fetch('https://sheltered-wildwood-63825.herokuapp.com/review', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
if(data.insertedId){
    toast.success(`Thanks for the review ${name}`)
}
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control  w-full my-5 max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input disabled value={name} required type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control  w-full my-5 max-w-xs">
                    <label class="label">
                        <span class="label-text">Add a review</span>

                    </label>
                    <input {...register("review")} required type="text" placeholder="Type here" class="input h-[100px] input-bordered w-full max-w-xs" />

                </div>
                <select {...register("ratings")} class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Ratings</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <br />

                <input value='Post' class="btn btn-primary mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;