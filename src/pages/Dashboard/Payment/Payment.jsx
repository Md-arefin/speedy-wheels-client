import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const totalRent = searchParams.get('totalRent');
    const _id = searchParams.get('_id');
   
    return (
        <div>
            <h1 className='text-center text-3xl mt-10 font-bold'>This is payment page</h1>


            <Elements stripe={stripePromise}>
                <CheckoutForm price={totalRent} id={_id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;