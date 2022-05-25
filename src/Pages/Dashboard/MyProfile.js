import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    const userName=user.displayName
    const email=user.email
    const handleSubmit=(e)=>{
        e.preventDefault()
        toast.success('submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Your Name</span>

                </label>
                <input type="text" value={userName} disabled class="input input-bordered w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>

                </label>
                <input type="text" value={email} disabled class="input input-bordered w-full max-w-xs" />

            </div>
            
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Education</span>

                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">LinkedIn Profile Link</span>

                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Location</span>

                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Phone Number</span>

                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </div>
            <input className='btn btn-primary mt-4' type='submit'></input>
            </form>
        </div>
    );
};

export default MyProfile;