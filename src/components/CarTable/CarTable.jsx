import React from 'react';
import { FaTrashRestore } from 'react-icons/fa';

const CarTable = ({ car, i }) => {
    const { carImage, _id, carsModel, pickUpLocation, pickUpDate, dropOfLocation, dropOfDate, numberOfDays, carRent, totalRent } = car;
    return (
        <>
            <tr>
                <td>
                    {i + 1}
                </td>
                <td>
                    <div className="avatar w-28">
                        <div className=" w-28 ">
                            <img src={carImage} alt={carsModel} />
                        </div>
                    </div>
                </td>
                <th>{carsModel}</th>
                <td>
                    <div>
                        <p className='text-black font-bold'>
                            {pickUpLocation}
                        </p>
                        <p>
                            {pickUpDate}
                        </p>
                    </div>
                </td>
                <td>
                    <div>
                        <p className='text-black font-bold'>
                            {dropOfLocation}
                        </p>
                        <p>
                            {dropOfDate}
                        </p>
                    </div>
                </td>
                <td className='text-center'>{numberOfDays}</td>
                <td className='text-right font-bold'>${carRent}</td>
                <td className='text-right font-bold'>${totalRent}</td>
                <td>
                    <button className='btn bg-rose-800  text-white hover:text-black'>Pay</button>
                </td>
                <td>
                    <FaTrashRestore className='h-8 w-8 cursor-pointer' />
                </td>
            </tr>



        </>
    );
};

export default CarTable;