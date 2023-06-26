import React from 'react';
import Banner from './Banner';
import BookCar from './BookCar';
import Trip from './Trip';


const Home = () => {
    return (
        <div className='mb-[500px]'>
            <Banner />
            {/* TODO: Book car */}
            <div className='my-16'>
                <BookCar ></BookCar>
            </div>
            {/* Trip */}
            <Trip></Trip>
        </div>

    );
};

export default Home;