import React from "react";
import Logo from "../../assets/Icons/Frame 2 (1).svg";
import facebook from "../../assets/Icons/Frame 46.svg";
import twitter from "../../assets/Icons/Frame 47.svg";
import inistgram from "../../assets/Icons/Frame 48.svg";
import phone from "../../assets/Icons/lucide_phone.svg";
import location from "../../assets/Icons/mi_location.svg";
import gmail from "../../assets/Icons/material-symbols_mail-outline-rounded.svg";

import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={`${style.footer}`}>
        <div className={`container-fluid  py-5 px-5`}>
          <div className="row">
            <div className="col-lg-3">
              <div className={`${style.describ} d-flex  flex-column gap-4`}>
                <div className={`${style.top} d-flex gap-3`}>
                  <img src={Logo} className={style.logo} alt="" />
                  <div className="">
                    <a
                      className={`navbar-brand color1 text-white ${style.egy}`}
                      href="#"
                    >
                      EgyCare
                    </a>
                    <span className={`d-block color2 text-white ${style.text}`}>
                      Healthcare Platform
                    </span>
                  </div>
                </div>
                <div className={`${style.bottom} ` }>
                  <p className={` ${style.comprehensive} ${style.edit}`}>
                    A comprehensive medical platform designed to simplify access
                    to healthcare and manage medical history in a secure and
                    efficient way.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={``}>
                <span className={` my-3 d-inline-block ${style.Quick}`}> Quick Links</span>
                <ul>
                  <li className={`${style.edit} my-2`}>home</li>
                  <li className={`${style.edit} my-2`}>Book Appointment</li>
                  <li className={`${style.edit} my-2`}>Patient Dashboard</li>
                  <li className={`${style.edit} my-2`}>Medical Specialties</li>
                  <li className={`${style.edit} my-2`}>About the Platform</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className={`${style.services}`}>
                <span className={`${style.Quick} my-3 d-inline-block`}>Our Services</span>
                <ul>
                  <li className={`${style.edit} my-2`} >Medical Appointment Booking</li>
                  <li className={`${style.edit} my-2`} >Medical History Management</li>
                  <li className={`${style.edit} my-2`} >Medical Consultations</li>
                  <li className={`${style.edit} my-2`} >Lab Tests & Diagnostics</li>
                  <li className={`${style.edit} my-2`} >Treatment Follow-up</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={`${style.contant}`}>
                <span className={`${style.Quick} my-3 d-inline-block`}>Contact Us</span>
                <div className={`${style.line} ${style.edit} my-2`}>
                  <img src={gmail} alt="" />
                  <span> elsaidashraf@gmail.com</span>
                </div>
                <div className={`${style.line } ${style.edit} my-3`}>
                  <img src={location} alt="" />
                  <span> cairo ,Egypt</span>
                </div>
                <div className={`${style.line} ${style.edit} my-3` }>
                  <img src={phone} alt="" />
                  <span> +20 100 123 4567</span>
                </div>
                <div className={`${style.line} ${style.edit} my-3`}>
                  <img src={inistgram} className="mx-2"  alt="inistgram" />
                  <img src={twitter}  className="mx-2" alt="twitter" />
                  <img src={facebook} className="mx-2" alt="facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
