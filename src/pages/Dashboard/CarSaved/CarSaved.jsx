import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaTrashRestore } from 'react-icons/fa';

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
                    {/* head */}
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
                        {/* row 1 */}

                        {
                            carBooked.map((car, i) =>
                                <tr key={car._id}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar w-28">
                                            <div className=" w-28 ">
                                                <img src={car.carImage} alt={car.carsModel} />
                                            </div>
                                        </div>
                                    </td>
                                    <th>{car.carsModel}</th>
                                    <td>
                                        <div>
                                            <p className='text-black font-bold'>
                                                {car.pickUpLocation}
                                            </p>
                                            <p>
                                                {car.pickUpDate}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p className='text-black font-bold'>
                                                {car.dropOfLocation}
                                            </p>
                                            <p>
                                                {car.dropOfDate}
                                            </p>
                                        </div>
                                    </td>
                                    <td className='text-center'>{car.numberOfDays}</td>
                                    <td className='text-right font-bold'>${car.carRent}</td>
                                    <td className='text-right font-bold'>${car.totalRent}</td>
                                    <td>
                                        <button className='btn bg-rose-800  text-white hover:text-black'>Pay</button>
                                    </td>
                                    <td>
                                        <FaTrashRestore     className='h-8 w-8 cursor-pointer'/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default CarSaved;