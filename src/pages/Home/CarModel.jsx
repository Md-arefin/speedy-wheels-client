import React, { useEffect, useState } from 'react';

const CarModel = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCars(data)
            })
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-xl my-3 font-bold'>Vehicle Models</p>
                <h1 className='text-5xl font-bold'>Our rental fleet</h1>
                <p className='text-neutral-500 font-bold my-5 '>Choose from a variety of our vehicles to rent for your next adventure or business trip</p>
            </div>
            {/* cards for cars */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center my-16'>
                {
                    cars.map(car =><div 
                    key={car._id}
                    className="card card-compact w-full h-[523px] bg-base-100 shadow-xl p-2 ">
                    <figure>
                        <img src={car.picture} alt={car.model} />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">{car.model}</h2>
                        <p><span className='font-bold text-lg'>Rent:</span> <span className='font-bold text-xl'>${car.rent}</span> /per day</p>
                        <p><span className='font-bold text-lg'>Transmission:</span> {car.transmission}</p>
                        <p><span className='font-bold text-lg'>Fuel:</span> {car.fuel}</p>
                        <p><span className='font-bold text-lg'>Year:</span> {car.year}</p>
                        <p><span className='font-bold text-lg'>Doors:</span> {car.doors}</p>
                        
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default CarModel;