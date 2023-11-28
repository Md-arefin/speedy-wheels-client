import React, { useEffect, useState } from 'react';
import SliderCars from './sliderCars';

const CarModel = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_WEBSITE_URL}/cars`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCars(data)
            })
    }, [])
    
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl my-3 font-bold font-serif'>Vehicle Models</p>
                <h1 className='text-5xl font-bold font-serif'>Most Rented Cars</h1>
                <p className='text-neutral-500 font-bold my-5 '>Choose from a variety of our vehicles to rent for your next adventure or business trip</p>
            </div>
            {/* cards for cars */}
           <SliderCars />
        </div>
    );
};

export default CarModel;