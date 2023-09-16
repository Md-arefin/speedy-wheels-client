import React from 'react';
import './parallax.css'

const Parallax = () => {
    return (
        <div className='parallax-item bg-fixed bg-cover bg-center'>
            <div className='py-96 bg-black bg-opacity-70 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-white'>The Rising Tide of Vehicles</h1>
                <p className='md:ml-[25%] text-white my-10 md:w-1/2 px-4'>As the global population grows and urbanization continues, the number of cars on our roads is soaring. With rapid industrialization and improved living standards, the proliferation of cars has become a defining characteristic of our modern era.As the global population grows and urbanization continues, the number of cars on our roads is soaring. With rapid industrialization and improved living standards, the proliferation of cars has become a defining characteristic of our modern era.</p>
            </div>
        </div>
    );
};

export default Parallax;