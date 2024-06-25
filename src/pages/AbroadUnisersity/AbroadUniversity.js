import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./AbroadUniversity.css";
import Assets from "../../assets/assets";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { FaUserGraduate } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AbroadUniversity = () => {

    var country = sessionStorage.getItem('country');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [abroadUniversityData, setAbroadUniversityData] = useState([])
    const AbroadUniversityData = async () => {
        try {
            const filter = country
            const response = await axios.get(`https://api.123admissions.com/api/v1/getalluniversity?Key=${filter}&type=1`, {});
            setAbroadUniversityData(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {

        AbroadUniversityData()
    }, []);
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: false, // Set to false to hide the flag
            });
        }
    }, []);
    const navigate = useNavigate()
    const OnclickNavigate = (url) => {
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        console.log("Cleaned URL:", cleanedUrl);
        navigate(`/collegeview?${cleanedUrl}`);

    }



    return (
        <>
            <div className="AbroadUniversity">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="from-abroad">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="studyabroad">
                                        <div style={{ textAlign: "start" }}>
                                            <h1>Study Abroad with 123Admissions</h1>
                                            <p style={{ fontSize: "30px" }}>Building Careers Globally</p>
                                            <h1>{country}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div style={{ padding: "5% 20%" }}>
                                        <div className="from">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12" style={{ color: '#1ea698' }}>
                                                            International Degree Now in Your Budget
                                                        </div>
                                                        <div className="col-12">
                                                            Degree Interested in
                                                        </div>
                                                        <div className="col-6">
                                                            <button>Masters</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button>Bachelors</button>
                                                        </div>
                                                        <div className="col-12">
                                                            Enter your Details
                                                        </div>
                                                        <div className="col-12 mt-4">
                                                            <input className="form-control" placeholder="Name *"></input>
                                                        </div>
                                                        <div className="col-12 mt-4">
                                                            <IntlTelInput inputProps={{ id: '91', name: 'india', ref: inputRef }} />
                                                        </div>
                                                        <div className="col-12 mt-4">
                                                            <input className="form-control" placeholder="email *"></input>

                                                        </div>
                                                        <div className="col-12">
                                                            <button style={{ backgroundColor: "#1ea698", color: "white" }}>Book Your Free Counseling</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-12">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-12 mt-5 mb-5">
                                    <h1 className="style">Study Abroad Programs</h1>
                                    <h5>Start in India, Complete On-campus abroad to get the best courses</h5>

                                </div>
                                {abroadUniversityData.map((d) => (<div className="col-lg-4 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-abroaduniversity">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage} style={{ width: "100%" }}></img>
                                                    </div>

                                                    <div className="col-12" style={{ textAlign: "start" }}>
                                                        <div className="row">
                                                            <div className="col-12 mt-3" style={{ color: "#1ea698" }}>
                                                                <h5>{d?.universityName}</h5>
                                                            </div>
                                                            <div className="col-12">
                                                                <h5>MS in Data Analytics</h5>
                                                            </div>
                                                            <div className="col-1 mt-3">
                                                                <FaUserGraduate />
                                                            </div>
                                                            <div className="col-11 mt-3">
                                                                <p style={{ marginBottom: "2px" }}>MS Degree</p>
                                                            </div>
                                                            <div className="col-1">
                                                                <MdLocationOn />
                                                            </div>
                                                            <div className="col-11">
                                                                <p style={{ marginBottom: "2px" }}>{d?.location}</p>
                                                            </div>
                                                            <div className="col-1">
                                                                <FaRegClock />
                                                            </div>
                                                            <div className="col-11">
                                                                <p style={{ marginBottom: "2px" }}>2 years</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mt-4">
                                                        <button onClick={() => OnclickNavigate(d?.universityName)}>View Program</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AbroadUniversity;
