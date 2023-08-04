import React, { useState } from 'react';
import { BsFillCarFrontFill, BsFillCartCheckFill } from 'react-icons/bs';
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
            <form className='lg:mx-20 grid grid-cols-1 md:grid-cols-3 mt-20'>

                <div>
                    <div>
                        <h1 className='flex gap-5 font-bold text-xl mb-2'><BsFillCarFrontFill className='text-3xl text-red-700' /> Select your car</h1>

                        <select className="dropdown ml-10 mb-20 border-2 rounded-md px-4 py-2" name="carsModel" id="">
                            <option value="">Choose your car</option>
                            <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                            <option value="BMW Z4">BMW Z4</option>
                            <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                            <option value="Bentley Continental GT">Bentley Continental GT</option>
                            <option value="Mercedes-Benz GLE Coupe">Mercedes-Benz GLE Coupe</option>
                            <option value="Mini Cooper Countryman">Mini Cooper Countryman</option>
                        </select>
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

                        <select className="dropdown ml-10 mt-2 mb-20 border-2 rounded-md px-4 py-2" name="pickUpLocation" id="">
                            <option value="">Choose pick up Location</option>
                            <option value="London">London</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Sydney">Sydney</option>
                            <option value="New York City">New York City</option>
                            <option value="Paris">Paris</option>
                            <option value="Denmark">Denmark</option>
                        </select>
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

                        <select className="dropdown ml-10 mt-2 mb-20 border-2 rounded-md px-4 py-2" name="dropOfLocation" id="">
                            <option value="">Choose Drop of Location</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Rio-de-Janeiro">Rio de Janeiro</option>
                            <option value="Denmark">Denmark</option>
                        </select>
                    </div>
                    <div className='flex btn ml-6 lg:w-[260px] text-lg md:ml-[48px] md:mt-10 bg-rose-900 text-white hover:text-black w-[280px]'>
                        <BsFillCartCheckFill />
                        <input type='submit' value='Book now' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookCar;