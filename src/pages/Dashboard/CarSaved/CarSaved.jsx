import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

import CarTable from '../../../components/CarTable/CarTable';

const CarSaved = () => {

    const [carBooked, setCarBooked] = useState([])

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/booked/${user?.email}`)
            .then(res => res.json())
            .then(data => setCarBooked(data))
    }, [user])

    console.log(carBooked)

    return (
        <div className='my-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold '>Your Epic Ride Awaits: Unveil Your Booked Rental Car</h1>
            </div>

            <div className="overflow-x-auto lg:ml-5 mt-10 border-2 rounded-md">
                <table className="table table-zebra">
                    <thead>
                        <tr className='lg:text-lg text-black'>
                            <th></th>
                            <th>Image</th>
                            <th>Car Model</th>
                            <th>Pick-Up</th>
                            <th>Drop-Of</th>
                            <th>Total Days</th>
                            <th>Rent per Days</th>
                            <th>Car Rent</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carBooked.map((car, i) => <CarTable key={car._id} car={car} i={i}></CarTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarSaved;