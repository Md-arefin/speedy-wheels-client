import React, { useState } from 'react';

const FAQ = () => {

    return (
        <div>
            <div className='text-center mb-16'>
                <h1 className='text-5xl font-bold'>FAQ's</h1>
                <p className='text-sm text-neutral-500 my-3 font-bold'>Frequently Asked Questions About the Car Rental Booking Process on Our Website. Answers to <br /> <span>Common Concerns and inquiries.</span> </p>

            </div>
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
                <div>
                    <img className='w-full' src="https://i.ibb.co/K5qJKn0/stefan-rodriguez-2-Aovfz-YV3rc-unsplash-1-removebg-preview.png" alt="" />
                </div>
                <div className="join join-vertical w-full md:w-[40%]  mx-auto">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-bold text-white bg-orange-500">
                            1.What is special about comparing rental car deals?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus accusantium tempora ex autem, assumenda maxime voluptate, aliquid adipisci odit eius iste asperiores voluptas porro doloribus reiciendis obcaecati consequatur.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold text-white bg-orange-500">
                            2.How do I find the car rental deals?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus accusantium tempora ex autem, assumenda maxime voluptate, aliquid adipisci odit eius iste asperiores voluptas porro doloribus reiciendis obcaecati consequatur.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold text-white bg-orange-500">
                            3.How do I find such low rental car prices?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus accusantium tempora ex autem, assumenda maxime voluptate, aliquid adipisci odit eius iste asperiores voluptas porro doloribus reiciendis obcaecati consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;