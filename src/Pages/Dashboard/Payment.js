import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L12CVLToMcxEtIIceVxYWWkywdx0frCDfyIjDY0lAhOb6QSD64Jd70JRSBKOKkPAK7DjULyvXQSQU2i9yPdowYj00Kt6479gW')
const Payment = () => {
    const { id } = useParams()
    
    const [payment, setPayment] = useState({})
    console.log(payment)
    const url = `http://localhost:5000/payment/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [])
    return (

        <div class="flex-col my-5">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please pay for {payment.name}</h2>
                    <p>Your amount is ${payment.amount}</p>
                    
                </div>
            </div>
            <div class="card flex-shrink-0 w-full  mt-5 max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment}/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;