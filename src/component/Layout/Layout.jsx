import React from 'react'
import Footer from '../Footer/Footer'
import Navdar from '../Navder/Navdar'
import { Outlet } from 'react-router'

export default function Layout() {
  return<>
    <Navdar/>
  <Outlet/>
  <Footer/>
  
  
  
  </>
}
