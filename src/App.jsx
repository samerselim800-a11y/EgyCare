import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navdar from "./component/Navder/Navdar";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import MedicalSpecialties from "./component/MedicalSpecialties/MedicalSpecialties";
import Contact from "./component/Contact/Contact";
import PatientDashboard from "./component/PatientDashboard/PatientDashboard";
import Layout from "./component/Layout/Layout";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "MedicalSpecialties", element: <MedicalSpecialties /> },
        { path: "PatientDashboard", element: <PatientDashboard /> },
        { path: "Contact", element: <Contact /> }
      ],
    }
  ]);

return (
  <>
    <RouterProvider router={x}></RouterProvider>
  </>
)

}

export default App;
