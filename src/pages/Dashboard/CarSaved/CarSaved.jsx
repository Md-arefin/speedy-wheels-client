import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

import CarTable from '../../../components/CarTable/CarTable';
import Swal from 'sweetalert2';

const CarSaved = () => {

    const [carBooked, setCarBooked] = useState([])

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/booked/${user?.email}`)
            .then(res => res.json())
            .then(data => setCarBooked(data))
    }, [user])

    console.log(carBooked)

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(id)
                fetch(`http://localhost:5000/rented-car/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.deletedCount)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className='my-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold '>Your Epic Ride Awaits: Unveil Your Booked Rental Car</h1>
            </div>

            <div className="overflow-x-auto lg:ml-5 mt-10 border-2 rounded-md">
                <table className="table table-zebra">
                    <thead>
                        <tr className='lg:text-lg text-black'>
                            <th></th>
                            <th>Image</th>
                            <th>Car Model</th>
                            <th>Pick-Up</th>
                            <th>Drop-Of</th>
                            <th>Total Days</th>
                            <th>Rent per Days</th>
                            <th>Car Rent</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carBooked.map((car, i) => <CarTable key={car._id} car={car} i={i} handleDelete={handleDelete}></CarTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarSaved;