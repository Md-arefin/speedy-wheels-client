import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-5">
                    {/* Sidebar content here */}
                    <div className='text-center my-10'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <h3 className='my-5 text-xl '>{user?.displayName}</h3>
                            <h3 className='my-5 text-md'>{user?.email}</h3>
                        </div>
                    </div>

                    <li>

                        <NavLink className='text-white hover:text-black bg-rose-800 text-lg border-b-4 border-0 border-black flex justify-center' to='/'>Home</NavLink>

                    </li>
                    <li>

                        <NavLink className='text-white hover:text-black bg-rose-800 text-lg border-b-4 border-0 border-black flex justify-center' to='/dashboard/saved-car'>Ride Booked</NavLink>

                    </li>
                    <li>

                        <NavLink className='text-white hover:text-black bg-rose-800 text-lg border-b-4 border-0 border-black flex justify-center' to='/dashboard/car-booked'>Car Rent</NavLink>

                    </li>
                    
                    <li>

                        <NavLink className='text-white hover:text-black bg-rose-800 text-lg border-b-4 border-0 border-black flex justify-center' to='/dashboard/payment-history'>Payment History</NavLink>

                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;