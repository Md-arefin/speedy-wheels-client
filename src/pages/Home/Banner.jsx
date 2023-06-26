import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import bg from '../../assets/3484652.jpg'
import red from '../../assets/cars/red.png'

const Banner = () => {
    return (
        <div>
            <section className='relative'>
            <div >
                <img src={bg} className='w-[50%] md:w-[60%] lg:w-[50%] opacity-50 absolute right-0' alt="" />
            </div>
            <div className="flex">
                <div className='absolute left-[270px] mt-[200px]'>
                    <div className='font-bold space-y-5 mb-10'>
                        <p className='text-lg'>Plan your trip now</p>
                        <h1 className='text-7xl'>
                            Save <span className='text-red-600'>big</span>  with our <br /> car rental
                        </h1>
                        <p className='text-neutral-400 text-sm'>Rent the car of your dreams. Unbeatable prices, unlimited miles, <br /> flexible pick-up options and much more.</p>
                    </div>
                    <div className="flex gap-10">
                        <button className='btn bg-red-600 text-white px-5 text-lg font-bold'>Book ride <BsFillPatchCheckFill className='text-xl' /></button>

                        <button className='btn bg-black text-white px-5 text-lg font-bold'>Learn More <MdKeyboardArrowRight className='text-2xl' /> </button>
                    </div>
                </div>

                <div className='absolute right-[150px] top-[150px]'>
                    <img src={red} alt="" />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Banner;