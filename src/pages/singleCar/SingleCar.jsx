import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCar = () => {
    const carDetail = useLoaderData();
    console.log(carDetail);

    const { picture, model, rent } = carDetail;
    return (
        <div>
            <div className="w-96 h-[540px] p-2 ">
                <figure>
                    <img src={picture} alt={model} className="w-full h-[400px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto font-serif ">{model}</h2>
                    <p className='text-xl'><span className='font-serif '>Rent per day: </span>${rent}</p>

                </div>
            </div>

        </div>
    );
};

export default SingleCar;