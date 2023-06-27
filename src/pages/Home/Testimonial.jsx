import React from 'react';
import Slider from '../../components/Slider/Slider';



const Testimonial = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl my-3 font-bold'>Reviewed by People</p>
                <h1 className='text-5xl font-bold'>Client's Testimonials</h1>
                <p className='text-sm text-neutral-500 my-3 font-bold'>Discover the positive impact we've made on the our clients by reading through their <br /> testimonials. Our clients have experienced our service and results, and they're eager to share <br /> <span>their positive experience with you.</span> </p>
                <div className="divider mx-auto w-[50%]"></div>
            </div>
            {/*Slider */}
            <Slider></Slider>
        </div>
    );
};

export default Testimonial;