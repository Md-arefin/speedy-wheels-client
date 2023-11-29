import { useLoaderData } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { BsFillCarFrontFill, BsFillCartCheckFill } from 'react-icons/bs';
import { MdEditLocationAlt } from 'react-icons/md';
import { MdOutlineCalendarMonth, MdCalendarMonth } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const SingleCar = () => {
    const carDetail = useLoaderData();

    const { picture, model, rent, doors, fuel, transmission, year } = carDetail;

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(user && user?.email){

            const form = event.target;
            const carsModel = model
            const pickUpLocation = form.pickUpLocation.value;
            const dropOfLocation = form.dropOfLocation.value;
            const pickUpDate = startDate;
            const dropOfDate = endDate;

            // Calculate the number of milliseconds between the two dates
            const timeDifference = dropOfDate - pickUpDate;
            // Calculate the number of days between the two dates
            const numberOfDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // console.log(timeDifference, 'days', numberOfDays)

            // console.log( pickUpDate, ',', dropOfDate)
            try {

                const carImage = picture;
                const carRent = rent;
                const carFuel = fuel;
                const carDoor = doors;
                const carYear = year;
                const carTransmission = transmission;

                const totalRent = parseFloat((carRent * numberOfDays).toFixed(2));

                console.log(totalRent)

                // Combine form data with car details

                const formData = {
                    carsModel,
                    pickUpLocation,
                    dropOfLocation,
                    pickUpDate,
                    dropOfDate,
                    carDoor,
                    carFuel,
                    carRent,
                    carImage,
                    totalRent,
                    carTransmission,
                    carYear,
                    email: user?.email,
                    numberOfDays
                };

                console.log(formData)

                // send rental data to DB
                await fetch(`${import.meta.env.VITE_WEBSITE_URL}/cart-rent`, {
                    method: "POST",
                       headers: {
                            'content-type': "application/json",
                            "authorization" : `Bearer ${localStorage.getItem("access-token")}`
                        },
                    body: JSON.stringify(formData)
                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Car booked successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            } catch (error) {
                console.error('Error booking car:', error);
            }
        } 
        else {
            Swal.fire({
                title: 'Please login to save your ride',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',  {state: {from: location}})
                }
            })
        }

    }

    return (
        <div className='mb-20'>
            <div className="mx-auto w-96 p-2 ">
                <figure>
                    <img src={picture} alt={model} className="w-full " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto font-serif ">{model}</h2>
                    <p className='text-xl'><span className='font-serif '>Rent per day: </span>${rent}</p>
                    <p className='text-xl'><span className='font-serif '>Doors: </span>{doors}</p>
                    <p className='text-xl'><span className='font-serif '>Fuel: </span>{fuel}</p>
                    <p className='text-xl'><span className='font-serif '>Transmission: </span>{transmission}</p>
                    <p className='text-xl'><span className='font-serif '>Year: </span>{year}</p>
                </div>
            </div>
            <div>
                <div >
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold '>Book Your Dream car</h1>
                    </div>

                    {/* Form for cars booking */}

                    <form onSubmit={handleSubmit} className='lg:ml-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>

                        <div>
                            <div>
                                <h1 className='flex gap-5 font-bold text-xl mb-2'><BsFillCarFrontFill className='text-3xl text-red-700' /> Selected car for your ride</h1>

                               <p className=" font-serif mb-20 lg:ml-12">{model}</p>
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
                                <h1 className='flex gap-5 font-bold text-xl'>
                                    <MdEditLocationAlt className='text-3xl text-red-700' /> Pick-up Location</h1>

                                <select className="dropdown ml-10 mt-2 mb-20 border-2 w-60 rounded-md px-4 py-2" name="pickUpLocation" id="" required>
                                    <option value="" className='font-serif'>Choose pick up Location</option>
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

                                <select className="dropdown ml-10 mt-2 mb-20 border-2 rounded-md px-4 w-60 py-2" name="dropOfLocation" id="" required>
                                    <option value="">Choose Drop of Location</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Berlin">Berlin</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Rio-de-Janeiro">Rio de Janeiro</option>
                                    <option value="Denmark">Denmark</option>
                                </select>
                            </div>
                            <label className='flex btn ml-6 lg:w-[260px] text-lg md:ml-[48px] md:mt-10 bg-rose-900 text-white hover:text-black w-[280px]'>
                                <BsFillCartCheckFill />
                                <input type='submit' value='Book now' />
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;