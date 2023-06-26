import React from 'react';
import Banner from './Banner';
import BookCar from './BookCar';


const Home = () => {
    return (
        <div className='mb-[500px]'>
            <Banner />
            {/* TODO: Book car */}
            <BookCar></BookCar>
        </div>

    );
};

export default Home;