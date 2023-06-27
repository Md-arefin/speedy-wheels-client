import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = 
    <>
        <li className='text-lg font-bold hover:bg-rose-800  rounded'>
            <Link className='hover:text-white'>Home</Link>
        </li>

        <li className='text-lg font-bold hover:bg-rose-800  rounded'>
            <Link className='hover:text-white'>Our Teams</Link>
        </li>

        <li className='text-lg font-bold hover:bg-rose-800  rounded'>
            <Link className='hover:text-white'>About</Link>
        </li>

        <li className='text-lg font-bold hover:bg-rose-800 rounded'>
            <Link className='hover:text-white'>Contact</Link>
        </li>
    </>
    return (
        <div className="navbar bg-transparent fixed z-10 w-[91%] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hover:bg-rose-800 hover:text-white">SpeedyWheels</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-rose-800 text-white font-bold hover:text-black">Login</a>
            </div>
        </div>
    );
};

export default Navbar;