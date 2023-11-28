import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { BsCashCoin } from 'react-icons/bs';

const CarBooked = () => {

    const { user } = useContext(AuthContext);
    const [rentedCar, setRentedCar] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_WEBSITE_URL}/rented-car/${user?.email}`)
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
                        <figure><img className='h-[350px]' src={car.carImage} alt={car.carsModel} /></figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center items-center font-bold text-3xl">{car.carsModel}</h2>

                            {/*  */}
                            <div className="overflow-x-auto w-full mt-10 border-2 rounded-md">
                                <table className="table table-zebra">
                                    <tbody>
                                        <tr>
                                            <th className='font-semibold text-lg text-black'>Status:</th>
                                            <td>
                                                <div className="badge badge-success w-1/2 gap-3 text-black text-lg font-bold h-8 flex items-center justify-center ">
                                                  <BsCashCoin/>  {car?.status}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='font-semibold text-lg text-black'>Pick-up Location:</th>
                                            <td className='text-black text-lg font-thin'>{car.pickUpLocation}</td>
                                        </tr>

                                        <tr>
                                            <td><span className='font-semibold text-lg'>Pick-up Date: </span></td>
                                            <td>{car.pickUpDate}</td>
                                        </tr>

                                        <tr>
                                            <td><span className='font-semibold text-lg'>Drop-Of Location: </span></td>
                                            <td>{car.dropOfLocation}</td>
                                        </tr>

                                        <tr>
                                            <td><span className='font-semibold text-lg'>Drop-Of Date: </span></td>
                                            <td>{car.dropOfDate}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Year: </span></td>
                                            <td>{car.carYear}</td>
                                        </tr>

                                        <tr>
                                            <td><span className='font-semibold text-lg'>Transmission: </span></td>
                                            <td>{car.carTransmission}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Number of days: </span></td>
                                            <td>{car.numberOfDays}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Rent per day: </span></td>
                                            <td className='text-lg font-bold'>$ {car.carRent}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg '>Total Price: </span></td>
                                            <td className='text-lg font-bold'>$ {car.price}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Transaction Id: </span></td>
                                            <td>{car.transactionId}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Fuel: </span></td>
                                            <td>{car.carFuel}</td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-semibold text-lg'>Door: </span></td>
                                            <td>{car.carDoor}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default CarBooked; 