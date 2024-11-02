import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
        
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)] py-12'>
               <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;