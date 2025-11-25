import React from "react";
import Logo from "../../assets/Icons/Frame 2.svg";
import style from "./Navbar.module.css";
export default function Navdar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid px-5">
            <div className={style.logeText}>
              <img src={Logo} className={style.logo} alt="" />
              <a className={`navbar-brand color1 ${style.egy}`} href=" /">
                EgyCare
                <span className={`d-block color2 ${style.text}`}>
                  Healthcare Platform
                </span>
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse g-5 justify-content-around  "
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav  mb-2 mb-lg-0 ${style.page} `}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="MedicalSpecialties">
                    Medical Specialties
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="PatientDashboard">
                    Patient Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="Contact">
                    Contact
                  </a>
                </li>
              
                {/*  */}
              </ul>
              <div className={` ${style.btnss}`}>
                <button className={`${style.btn1}`}>book now</button>
                <button className={`${style.btn2}`}>login</button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
