import React from 'react';
import Banner from './Banner';
import BestDeals from './BestDeals';
import BookCar from './BookCar';
import CarModel from './CarModel';
import FAQ from './FAQ';
import Parallax from './Parallax';
import Testimonial from './Testimonial';
import Trip from './Trip';


const Home = () => {
    return (
        <div className=''>
            <Banner />
            {/* TODO: Book car */}
            <div className='my-24'>
                {/* <BookCar ></BookCar> */}
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
               <Parallax/>
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