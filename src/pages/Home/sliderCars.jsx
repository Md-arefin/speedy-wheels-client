import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";



const SliderCars = () => {
    return (
        <Swiper
        navigation={true} modules={[Navigation]}
    >
        <SwiperSlide>
           <p className='text-3xl text-center'>1</p>
        </SwiperSlide>
        <SwiperSlide>
           <p className='text-3xl text-center'>2</p>
        </SwiperSlide>
        <SwiperSlide>
           <p className='text-3xl text-center'>3</p>
        </SwiperSlide>
        <SwiperSlide>
           <p className='text-3xl text-center'>4</p>
        </SwiperSlide>

    </Swiper>
    );
};

export default SliderCars;