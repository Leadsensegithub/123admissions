import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./MobileMenu.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Assets from "../../assets/assets";
import person from "../../assets/universityBackground/download.png"


const MobileMenu = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: true, // Set to false to hide the flag
            });
        }
    }, []);
    const navigator = useNavigate()
    const navigate = () => {
        navigator('/')
    }
    return (
        <>
            <div className="menuPage">
                <div className="row">
                    <div className="col-lg-12 col-12 mb-3">
                        <div onClick={navigate} className="hjjhjjhhjhh" style={{ textAlign: "start", color: "#545454" }}><FaAngleLeft />   <img src={Assets?.Logo} style={{ width: "17%" }}></img></div>
                    </div>
                </div>
                <div className="padding">
                    <div className="row">

                        <div className="col-12 mt-4">
                            <button className="studyabroad">Study Abroad</button>
                        </div>
                        <div className="col-12 mt-4">
                            <button className="studyabroad" style={{backgroundColor:"#44b59c",color:"white"}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
