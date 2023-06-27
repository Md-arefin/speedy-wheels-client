import React, { useState } from 'react';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { MdEditLocationAlt } from 'react-icons/md';
import { MdOutlineCalendarMonth, MdCalendarMonth } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookCar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className='mt-[800px]'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold '>Book Your Dream car</h1>
            </div>
            {/*  */}
            <form className='md:mx-[350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>

                <div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl'><BsFillCarFrontFill className='text-3xl text-red-700' /> Select your car</h1>
                        <details className="dropdown ml-10 mb-20">
                            <summary className="m-1 btn bg-rose-700 text-white hover:text-black">Select your car</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className='btn'>1</li>
                                <li className='btn my-2'>2</li>
                                <li className='btn'>3</li>
                                <li className='btn my-2'>4</li>
                            </ul>
                        </details>
                    </div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl mb-5'><MdCalendarMonth className='text-3xl text-red-700' /> Pick-up Date</h1>
                        <DatePicker className='border-2 rounded mb-20 ml-10 p-2 md:ml-12'
                            selected={startDate}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="pick-up date!"
                            onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                {/* 2 */}
                <div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl'><MdEditLocationAlt className='text-3xl text-red-700' /> Pick-up Location</h1>
                        <details className="dropdown ml-10 mb-20">
                            <summary className="m-1 btn bg-rose-700 text-white hover:text-black">Select your pick-up Location</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className='btn '>London</li>
                                <li className='btn my-2'>Tokyo</li>
                                <li className='btn '>Sydney</li>
                                <li className='btn my-2'>New York City</li>
                                <li className='btn '>Paris</li>
                            </ul>
                        </details>
                    </div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl mb-5'><MdOutlineCalendarMonth className='text-3xl text-red-700' /> Drop-of Date</h1>
                        <DatePicker
                        className='border-2 rounded mb-20 ml-10 p-2 md:ml-12'
                            selected={endDate}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="drop-of date!"
                            onChange={(date) => setEndDate(date)} />
                    </div>
                </div>
                {/* 3 */}
                <div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl'><MdEditLocationAlt className='text-3xl text-red-700' /> Drop-of Location</h1>
                        <details className="dropdown ml-10 mb-20">
                            <summary className="m-1 btn bg-rose-700 text-white hover:text-black">Select your Drop-of Location</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className='btn'>Dhaka</li>
                                <li className='btn my-2'>Mumbai</li>
                                <li className='btn'>Berlin</li>
                                <li className='btn my-2'>Dubai</li>
                                <li className='btn'>Rio de Janeiro</li>
                            </ul>
                        </details>
                    </div>
                    <input className='btn ml-10 md:ml-[48px] md:mt-10 bg-rose-900 text-white hover:text-black' type='submit' value='Book now'/>
                </div>
            </form>
        </div>
    );
};

export default BookCar;