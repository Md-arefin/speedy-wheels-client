import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import './payment.css'

const CheckoutForm = ({ price, id }) => {

    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const [bookedCar, setBookedCar] = useState([]);

    useEffect(() => {
        
        fetch(`${import.meta.env.VITE_WEBSITE_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret)
            )
    }, [])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_WEBSITE_URL}/car-booked/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookedCar(data)
                console.log(data)
            })
    }, [])

    const carImage = bookedCar[0]?.carImage;
    const _id = bookedCar[0]?._id;
    const carsModel = bookedCar[0]?.carsModel;
    const pickUpLocation = bookedCar[0]?.pickUpLocation;
    const pickUpDate = bookedCar[0]?.pickUpDate;
    const dropOfLocation = bookedCar[0]?.dropOfLocation;
    const dropOfDate = bookedCar[0]?.dropOfDate;
    const numberOfDays = bookedCar[0]?.numberOfDays;
    const carRent = bookedCar[0]?.carRent;
    const carDoor = bookedCar[0]?.carDoor;
    const carFuel = bookedCar[0]?.carFuel;
    const carTransmission = bookedCar[0]?.carTransmission;
    const carYear = bookedCar[0]?.carYear;

    console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('paymentMethod', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            // paymentMethod: {
            //     card: card,
            //     billing_details: {
            //         name: user?.displayName || 'anonymous',
            //         email: user?.email || 'unknown'
            //     },
            // },
            payment_method: paymentMethod.id,
            receipt_email: user?.email,
        },
        );

        if (confirmError) {
            console.log('Error confirming payment:', confirmError)
        }

        setProcessing(false)

        console.log(paymentIntent, 'paymentIntent')

        if (paymentIntent.status = "succeeded") {
            setTransactionId(paymentIntent.id);
           
            // save payment to server

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                _id,
                price,
                carsModel,
                pickUpLocation,
                dropOfLocation,
                pickUpDate,
                dropOfDate,
                carDoor,
                carFuel,
                carRent,
                carImage,
                carTransmission,
                carYear,
                numberOfDays,
                status: "Paid",
            }

            fetch(`${import.meta.env.VITE_WEBSITE_URL}/payments` ,{
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Payment successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    }

    return (
        <>
            <form className='w-2/3 mx-auto my-20' onSubmit={handleSubmit}>
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
                <button className='btn bg-rose-800 text-white hover:text-black w-1/2 text-xl mt-10 ml-10' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Payment
                </button>
            </form>
            <p className='text-red-600 text-lg font-semibold text-center'>{cardError}</p>
            {
                transactionId && <p className='text-green-600 text-lg font-semibold text-center'>Your transaction id is :{transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;