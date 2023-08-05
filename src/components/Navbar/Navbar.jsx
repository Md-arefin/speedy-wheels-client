import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const navItems =
        <>
            <li className='text-lg font-bold hover:bg-rose-800  rounded'>
                <Link className='hover:text-white'>Home</Link>
            </li>

            <li className='text-lg font-bold hover:bg-rose-800  rounded'>
                <Link to="our-team" className='hover:text-white'>Our Teams</Link>
            </li>

            <li className='text-lg font-bold hover:bg-rose-800  rounded'>
                <Link to="about" className='hover:text-white'>About</Link>
            </li>

            <li className='text-lg font-bold hover:bg-rose-800 rounded'>
                <Link to="contact" className='hover:text-white'>Contact</Link>
            </li>

            {
                user ? <li className='text-lg font-bold hover:bg-rose-800 rounded'>
                    <Link to="dashboard/saved-car" className='hover:text-white'>Dashboard</Link>
                </li> : ''
            }
        </>


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }




    const handleScroll = () => {
        setIsScrolled(window.screenY >= 20);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [])

    return (
        <div className={`max-w-screen-2xl navbar  fixed z-10 w-[91%] ${isScrolled ? 'bg-black text-white' : "bg-transparent"} `}>
            <div className="navbar-start  relative">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link>
                    <img className='w-[60%]  rounded' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>

                    <div className="avatar lg:mr-5">
                        <div className="w-8 rounded">
                            <img src={user?.photoURL} alt={user?.displayName} />
                        </div>
                    </div>

                    <Link onClick={handleLogOut} className="btn bg-rose-800 text-white font-bold hover:text-black ml-5">Logout</Link>
                </>
                    :
                    <Link to='login' className="btn bg-rose-800 text-white font-bold hover:text-black">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;