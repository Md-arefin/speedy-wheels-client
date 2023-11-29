import React from 'react';
import Banner from './Banner';
import BestDeals from './BestDeals';
import CarModel from './CarModel';
import FAQ from './FAQ';
import Parallax from './Parallax';
import Testimonial from './Testimonial';
import Trip from './Trip';
import Marquee from "react-fast-marquee";


const Home = () => {
    return (
        <div className='px-5'>
            <Banner />
            {/* TODO: Book car */}
            <div className='mt-[800px] lg:mt-[500px] xl:mt-[600px] 2xl:mt-[800px]'>
                <Marquee>
                    <p className='font-serif text-xl'>Drive the Experience, Rent the Journey. Unleash the Road Ahead with SpeedyWheel. Drive the Extraordinary with Our Exclusive Fleet</p>
                </Marquee>
            </div>
            {/* Trip */}
            <div className='my-24'>
                <Trip></Trip>
            </div>
            {/* car model */}
            <div className='my-24'>
                <CarModel />
            </div>
            {/* banner-02 */}
            <div className='my-24 bg-black py-10 text-white text-center space-y-5'>
                <h1 className='text-4xl font-bold'>Save big with our cheap car rental!</h1>
                <p>Top Airports. Local Suppliers. <span className='text-red-500'>24/7</span> Support.</p>
            </div>
            {/* best deals */}
            <div className='my-24'>
                <BestDeals></BestDeals>
            </div>
            {/* Parallax */}
            <div className='my-24'>
                <Parallax />
            </div>
            {/* testimonials */}
            <div className='my-24'>
                <Testimonial></Testimonial>
            </div>
            {/* FAQ */}
            <FAQ></FAQ>
        </div>

    );
};

export default Home;