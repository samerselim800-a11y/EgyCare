import React from 'react';
import { Link } from 'react-router-dom';
import  style from"./Nabar.module.css"; 
import logo from "./imgs/Vector.png"
const Nabar = () => {
  return (
    <>
    <header className={style.header}>
    <div className={`navbar-expand-lg ${style.Nabar} `}>
        <div className=" bg-danger">
    <nav className="navbar " id='navbar'>
  <div className="container-fluid">
   <div className={style.leftNava}>
    <div className={style.img}>
        <img src={logo} alt="logo" />
    </div>
    <div className={style.title}>
    <h3>EgyCare</h3>
    <p>Healthcare Platform</p>
    </div>
   
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav m-auto mb-3  ${style.ul}`}>
        <li className={`nav-item ${style.home} `}  >
          <Link className="nav-link"  to="/">Home</Link>
        </li>
        <li className={`nav-item ${style.li}`}>
          <Link className="nav-link" to="Medical-Specialties">MedicalSpecialties</Link>
        </li>
         <li className={`nav-item ${style.li}`}>
          <Link className="nav-link" to="Patient-Dashboard">PatientDashboard</Link>
        </li>
         <li className={`nav-item ${style.li}`}>
          <Link className="nav-link" to="Contact">Contact</Link>
        </li>
      </ul>
      <div className={style.bottom}>
        <button className={style.btnBook} type="submit">
          <Link rel="stylesheet" to=" /" >
              Book Now
          </Link>
          </button>
        <button className={style.btnLogin} type="submit">
             <Link rel="stylesheet" to=" /" >
              Login
          </Link>
          </button>
        </div>
    </div>
  </div>
</nav>
</div>
  </div>
    </header>
    </>
  );
};

export default Nabar;