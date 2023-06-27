import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { BiSolidQuoteSingleRight } from 'react-icons/bi';

const Slider = () => {
    return (

        <Swiper
            navigation={true} modules={[Navigation]}
        >
            <SwiperSlide>
                <div className='flex flex-col items-center my-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mt-16'>
                            <BiSolidQuoteSingleRight className='text-center text-5xl text-red-700'></BiSolidQuoteSingleRight>
                        </div>
                        <div className='text-center my-5'>
                            <p className=' font-bold text-xl '>
                                "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable"
                            </p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/YbMyS7f/images-1.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2 mx-auto space-y-2'>
                            <h3 className='text-3xl font-bold w-[300px]'>Son Goku</h3>
                            <p className='text-neutral-500 font-bold text-lg '>Dhaka</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col items-center my-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mt-16'>
                            <BiSolidQuoteSingleRight className='text-center text-5xl text-red-700'></BiSolidQuoteSingleRight>
                        </div>
                        <div className='text-center my-5'>
                            <p className=' font-bold text-xl '>
                                "The car was in great condition and made our trip even better. Highly recommend for this car rental website"
                            </p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/XtkrNBq/download.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2 mx-auto space-y-2'>
                            <h3 className='text-3xl font-bold w-[300px]'>Minato Namikaje</h3>
                            <p className='text-neutral-500 font-bold text-lg '>Dhaka</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col items-center my-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mt-16'>
                            <BiSolidQuoteSingleRight className='text-center text-5xl text-red-700'></BiSolidQuoteSingleRight>
                        </div>
                        <div className='text-center my-5'>
                            <p className=' font-bold text-xl '>
                                "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable"
                            </p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/nMCh6Ps/images.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2 mx-auto space-y-2'>
                            <h3 className='text-3xl font-bold w-[300px]'>Monkey D Luffy</h3>
                            <p className='text-neutral-500 font-bold text-lg '>Dhaka</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
         
        </Swiper>

    );
};

export default Slider;