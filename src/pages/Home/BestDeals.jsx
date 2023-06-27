import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCoin, BsCarFront } from 'react-icons/bs';
import { RiHandCoinLine } from 'react-icons/ri';

const BestDeals = () => {
    return (
        <div >
            <div >
                <img className='mx-auto md:w-[40%]' src="https://i.ibb.co/5hSvW6m/pexels-neil-kelly-712614-removebg-preview.png" alt="" />
            </div>
            {/*  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-10 px-10 lg:ml-[200px]'>
                <div className='space-y-5 mx-auto md:w-[75%] mb-16 md:mb-0'>
                    <p className='text-lg font-bold'>Why Choose Us</p>
                    <h1 className='text-4xl lg:text-5xl font-bold'>
                        Best valued deals you <br /> will ever find
                    </h1>
                    <p className='text-neutral-500  text-sm'>Our Cars offer numerous advantages, making them a compelling choice. They provide cost-effectiveness, flexibility, and convenience, allowing individuals to access vehicles without the burden of ownership. Rentals also cater to specific needs, offering a wide range of vehicle options, enabling exploration, and reducing environmental impact.</p>
                    <button className='btn bg-red-600 text-white px-5 text-lg font-bold'>Find Details  <MdKeyboardArrowRight className='text-2xl' /></button>
                </div>

                <div className='space-y-5'>
                    <div className='flex flex-col md:flex-row items-center gap-5 md:w-[55%]'>
                        <div>
                            <BsCarFront className='font-bold text-5xl ' />
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl md:text-3xl mb-2'>Cross Country Drive</h3>
                            <p className='text-neutral-500  text-sm'>Take your driving experience to the next level with our top-notch vehicles for your cross-country</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5 md:w-[55%]'>
                        <div>
                            <BsCoin className='font-bold text-5xl ' />
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl md:text-3xl mb-2'>All Inclusive Pricing</h3>
                            <p className='text-neutral-500  text-sm'>Take your driving experience to the next level with our top-notch vehicles for your cross-country</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5 md:w-[55%]'>
                        <div>
                            <RiHandCoinLine className='font-bold text-5xl ' ></RiHandCoinLine>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl md:text-3xl mb-2'>No Hidden Charges</h3>
                            <p className='text-neutral-500  text-sm'>Take your driving experience to the next level with our top-notch vehicles for your cross-country</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;