import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import bg from '../../assets/3484652.jpg'
import red from '../../assets/cars/red.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className='relative'>
                <div >
                    <img src={bg} className='
                    w-full
                     lg:w-[50%]
                     xl:w-[60%]
                    opacity-50 
                    absolute 
                    lg:right-[70px] 
                    xl:right-[0px] 
                    lg:top-10 
                    xl:top-20 
                    2xl:right-0'
                        alt="" />
                </div>
                <div className="flex">
                    <div className='absolute lg:top-[80px] top-[320px] md:top-[500px] 2xl:top-36'>
                        <div className='font-bold space-y-5 mb-10'>
                            <p className='xl:text-lg'>Plan your trip now</p>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl'>
                                Save <span className='text-red-600'>big</span>  with our <br className='hidden lg:block' /> car rental
                            </h1>
                            <p className='text-neutral-400 text-sm'>Rent the car of your dreams. Unbeatable prices, unlimited miles, <br className='hidden lg:block' /> flexible pick-up options and much more.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10">
                            <button className='btn bg-red-600 text-white px-5 text-lg font-bold hover:text-black'>Book ride <BsFillPatchCheckFill className='text-xl' /></button>

                            <Link to='/about'>
                                <button className='btn bg-black text-white px-5 text-lg font-bold hover:text-black w-full'>Learn More <MdKeyboardArrowRight className='text-2xl' /> </button>
                            </Link>
                        </div>
                    </div>

                    <div className='absolute w-full lg:w-[45%] xl:w-[55%] md:left-[100px] md:top-[100px] top-[35px] lg:top-[120px] 2xl:top-[320px] lg:left-[450px] xl:top-[190px] xl:left-[550px] 2xl:left-[855px] 2xl:pl-60'>
                        <img src={red} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;