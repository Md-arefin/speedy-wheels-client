import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const CarBooked = () => {

    const { user } = useContext(AuthContext);
    const [rentedCar, setRentedCar] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/rented-car/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRentedCar(data)
            })
    }, [user])
    return (
        <div className='mx-5 my-10'>
            <h1 className='text-center text-3xl my-10 font-bold'>Ride Ready To Go</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-10 w-full'>
                {
                    rentedCar.map((car, i) => <div key={car._id} className="card w-full bg-base-100 mt-5 shadow-xl">
                        <figure><img src={car.carImage} alt={car.carsModel} /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl">{car.carsModel}</h2>
                            <p><span className='font-semibold text-lg'>Pick-up Location: </span>{car.pickUpLocation}</p>
                            <p><span className='font-semibold text-lg'>Pick-up Date: </span>{car.pickUpDate}</p>
                            <p><span className='font-semibold text-lg'>Drop-of Location: </span>{car.dropOfLocation}</p>
                            <p><span className='font-semibold text-lg'>Drop-of Date: </span>{car.dropOfDate}</p>
                            <p><span className='font-semibold text-lg'>Number Of Days: </span>{car.numberOfDays}</p>
                            <p><span className='font-semibold text-lg'>Total Rent: </span>{car.price}</p>
                            <p><span className='font-semibold text-lg'>Transaction Id: </span>{car.transactionId}</p>
                            <p><span className='font-semibold text-lg'>carTransmission: </span>{car.carTransmission}</p>
                            <p><span className='font-semibold text-lg'>Fuel: </span>{car.carFuel}</p>
                            <p><span className='font-semibold text-lg'>Rent per day: </span>{car.carRent}</p>
                            <p><span className='font-semibold text-lg'>Year: </span>{car.carYear}</p>
                            <p><span className='font-semibold text-lg'>Door: </span>{car.carDoor}</p>
                            
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default CarBooked; 