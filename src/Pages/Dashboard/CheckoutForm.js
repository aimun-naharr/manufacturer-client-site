import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';

const CheckoutForm = ({ payment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { amount, userName, email, _id } = payment


    if (!amount && !userName && !email && !_id) {
        return <Loading></Loading>
    }
    else {

        fetch('https://sheltered-wildwood-63825.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            setSuccess('')

        }
        else {
            setCardError('')
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Your payment is succesful!')

payment={
    product: _id,
    transactionId: paymentIntent.id
}

            fetch(`https://sheltered-wildwood-63825.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                body: JSON.stringify(payment),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success mt-3' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className='text-green-500'>Your transaction id is <span className='text-orange-500'>{transactionId}</span></p>

                </div>
            }
        </form>
    );
};

export default CheckoutForm;