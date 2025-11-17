import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabar from './components/Nabar/Nabar'
import Footer from './components/Nabar/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Nabar/Layout/Layout'
import PatientDashboard from './Pages/Home/Patient-Dashboard/PatientDashboard'
import MedicalSpecialties from './Pages/Home/Medical-Specialties/MedicalSpecialties'
import Home from './Pages/Home/Home'
import Contact from './Pages/Home/Contact/Contact'

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "medical-specialties", element: <MedicalSpecialties /> },
      { path: "patient-dashboard" , element: <PatientDashboard /> },
      { path: "Contact" , element: <Contact /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;
