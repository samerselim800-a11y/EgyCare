import React from 'react';
import Nabar from '../Nabar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
        <>
            <Nabar/>

            <Outlet/>
            <Footer/>
        
        </>
  );
};

export default Layout;