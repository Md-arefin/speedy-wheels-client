import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";



const SliderCars = () => {
   return (
      <Swiper
         autoplay={{
            delay: 5500,
            disableOnInteraction: false,
         }}
         navigation={true}
         modules={[Autoplay]}
      >
         <SwiperSlide>
            <div className='flex flex-col lg:flex-row justify-evenly items-center gap-5 my-10 '>
               <figure>
                  <img src='https://i.ibb.co/SB4s5Zn/pexels-mike-bird-3729464-removebg-preview.png' alt="" />
               </figure>
               <figure>
                  <img src='https://i.ibb.co/mGPDw6T/pexels-mike-bird-193021-removebg-preview.png' alt="" />
               </figure>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <div className='flex flex-col lg:flex-row justify-evenly items-center gap-5 my-10 '>
               <figure>
                  <img src='https://i.ibb.co/DGKyn7g/pexels-pixabay-164654-removebg-preview.png' alt="" />
               </figure>
               <figure>
                  <img src='https://i.ibb.co/K5qJKn0/stefan-rodriguez-2-Aovfz-YV3rc-unsplash-1-removebg-preview.png' alt="" />
               </figure>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <div className='flex flex-col lg:flex-row justify-evenly items-center gap-5 my-10 '>
               <figure>
                  <img src='https://i.ibb.co/D7MBNwy/pexels-mike-bird-892522-removebg-preview.png' alt="" />
               </figure>
               <figure>
                  <img src='https://i.ibb.co/Fsb92m3/bmw-i7-600x400.webp' alt="" />
               </figure>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <div className='flex flex-col lg:flex-row justify-evenly items-center gap-5 my-10 '>
               <figure>
                  <img src='https://i.ibb.co/gwSkNgH/istockphoto-997960674-612x612.jpg' alt="" />
               </figure>
               <figure>
                  <img src='https://i.ibb.co/ZVgVX4Q/thar-right-front-three-quarter-5.webp' alt="" />
               </figure>
            </div>
         </SwiperSlide>

      </Swiper>
   );
};

export default SliderCars;