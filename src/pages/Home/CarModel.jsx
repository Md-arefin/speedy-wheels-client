import React, { useEffect, useState } from 'react';

const CarModel = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://speedy-wheel-server.onrender.com/cars')
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
                    className="card card-compact w-full h-[540px] bg-base-100 shadow-xl p-2 ">
                    <figure>
                        <img src={car.picture} alt={car.model} className="w-full h-[400px]" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto font-serif ">{car.model}</h2>
                    <div className='flex justify-between items-center gap-5 px-5'>
                    <button className='btn bg-slate-500 text-white hover:text-black w-1/2 font-serif'>Rent</button>
                    <button className='btn bg-black text-white hover:text-black w-1/2 font-serif'>View Details</button>
                    </div>
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default CarModel;