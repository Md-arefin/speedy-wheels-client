import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-360px)]"><Outlet /></div>
            <Footer></Footer>
        </>
    );
};

export default Main;