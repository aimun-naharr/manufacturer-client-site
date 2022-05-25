import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import useAllUser from '../hooks/useAllUser';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [user, userLoading, authError] = useAuthState(auth)
    const userEmail = user?.email

    // const [loginError, setLoginError]=useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate()
    let location = useLocation()
    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
        userError,
    ] = useSignInWithEmailAndPassword(auth)
    const [allUser] = useAllUser(emailUser)
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    // if(userError){
    //    return setLoginError(userError)
    // }
    let from = location.state?.from?.pathname || "/";
    if (allUser) {
        
        
        navigate(from, { replace: true })
    }
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
    };
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className='items-center text-center p-5'>
                <h1 className='text-center text-3xl font-bold'>LOGIN</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Please put a valid email address'
                            }
                        })} type="email" placeholder="you@example.com" class="input input-bordered w-100 max-w-xs" />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <label class="label">
                            <span class="label-text">Password</span>

                        </label>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 7,
                                message: 'Password must contains 7 characters or longer'
                            }
                        })} type="password" placeholder="password" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    <input value='Login' className='btn btn-block' type="submit" />
                    <p>New to brush manufacture?<Link className='btn btn-active btn-link' to='/signup'>Please Sign Up</Link></p>
                    {/* {
                        loginError && <p className='text-red-500'>{loginError}</p>
                    } */}

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-block btn-outline">Continue with goole</button>
                </form>
            </div>
        </div>
    );
};

export default Login;