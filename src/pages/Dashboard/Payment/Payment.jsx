import { Controls, Player } from '@lottiefiles/react-lottie-player';
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
    const carId = searchParams.get('carId');

    return (
        <div>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/3523ee44-d813-47ee-9654-33ce4c4e9b31/AL5xyHuCbf.json"
                    className='w-1/2'
                >
                    <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <h1 className='text-center text-3xl mt-10 font-bold'>Secure Payment - Complete Your Booking</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={totalRent} id={_id} carId={carId}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;