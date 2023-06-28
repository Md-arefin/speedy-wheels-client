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
                    <img src={bg} className='w-full lg:w-[45%]
                    opacity-50 absolute lg:right-[40px]' alt="" />
                </div>
                <div className="flex">
                    <div className='absolute lg:top-[80px] top-[320px]  lg:left-[100px] left-[15px]'>
                        <div className='font-bold space-y-5 mb-10'>
                            <p className='xl:text-lg'>Plan your trip now</p>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl'>
                                Save <span className='text-red-600'>big</span>  with our <br className='hidden md:block'/> car rental
                            </h1>
                            <p className='text-neutral-400 text-sm'>Rent the car of your dreams. Unbeatable prices, unlimited miles, <br className='hidden md:block'/> flexible pick-up options and much more.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10">
                            <button className='btn bg-red-600 text-white px-5 text-lg font-bold hover:text-black'>Book ride <BsFillPatchCheckFill className='text-xl' /></button>

                            <button className='btn bg-black text-white px-5 text-lg font-bold hover:text-black'>Learn More <MdKeyboardArrowRight className='text-2xl' /> </button>
                        </div>
                    </div>

                    <div className='absolute top-[35px] lg:left-[600px] lg:ml-10 lg:top-[62px] '>
                        <img src={red} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;