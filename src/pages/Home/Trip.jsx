import React from 'react';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaCarSide } from 'react-icons/fa';

const Trip = () => {
    return (
        <div className='mt-[800px]'>
            <div className='text-center'>
                <p className='text-xl my-3 font-bold'>Plan your trip now</p>
                <h1 className='text-5xl font-bold'>Quick & easy car rental</h1>
            </div>
            <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
                <div className='flex flex-col mx-auto'>
                    <div className=' mx-auto my-5'>
                        <BsFillCarFrontFill className='text-5xl text-red-700' />
                    </div>
                    <div className=' mx-auto space-y-5'>
                        <h3 className='text-3xl font-bold'>Select Car</h3>
                        <p className='text-neutral-500 text-sm '>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needsWe offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needsWe offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className=' mx-auto my-5'>
                        <RiCustomerService2Fill className='text-5xl text-red-700'/>
                    </div>
                    <div className=' mx-auto space-y-5'>
                        <h3 className='text-3xl font-bold'>Contact Operator</h3>
                        <p className='text-neutral-500 text-sm '>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs. We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs. We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className=' mx-auto my-5'>
<FaCarSide className='text-5xl text-red-700'></FaCarSide>
                    </div>
                    <div className=' mx-auto space-y-5'>
                        <h3 className='text-3xl font-bold'>Let's Drive</h3>
                        <p className='text-neutral-500 text-sm '>                        <p className='text-neutral-500 text-sm '>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs. We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs. We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trip;