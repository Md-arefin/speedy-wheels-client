import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";



const slider = () => {
    return (
        <Swiper
        navigation={true} modules={[Navigation]}
    >
        <SwiperSlide>
           
        </SwiperSlide>

    </Swiper>
    );
};

export default slider;