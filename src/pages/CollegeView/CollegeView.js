import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./CollegeView.css";
import Assets from "../../assets/assets";
import Download from '../../assets/downloadwhite.svg'
import voctor from '../../assets/icons/Vector1.svg'
import Proffer from '../../assets/PROFESSOR.svg'
import pro1 from '../../assets/image 40.svg'
import pro2 from '../../assets/image 44.svg'
import pro3 from '../../assets/image 45.svg'
import pro4 from '../../assets/image 48.svg'
import pro5 from '../../assets/image 49.svg'
import pro6 from '../../assets/image 50.svg'
import pro7 from '../../assets/image 51.svg'
import pro8 from '../../assets/image 52.svg'
import Groupa from '../../assets/collegeView/Group 167.svg';
import catificate from '../../assets/collegeView/Jain Degree sample certificates.2024-04-10 at 10.30 1.svg'
import FormModle from "../../components/FromModle/FormModle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CollegeView = ({ setMenuToggle }) => {
    const [success, setSuccess] = useState(false)
    const [university, setUniversity] = useState([])
    const [courses, setCourses] = useState([])
    var id = sessionStorage.getItem('university');

    const University = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getuniversity?id=${id}`, {

            });
            setUniversity(response?.data?.data?.university)
            setCourses(response?.data?.data?.Courses)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        University();
    }, []);
    const profes = [
        {
            name: "Prof. Manoj Pant",
            Img: pro1,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Prof. Monika Mittal",
            Img: pro2,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Prof. Manoj Pant",
            Img: pro3,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Prof. Sanjeeva Dubey",
            Img: pro4,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Prof. Chanchal Kushwaha",
            Img: pro5,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Dr. Saurabh Bishnoi",
            Img: pro6,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Dr. Kapil Garg",
            Img: pro7,
            dy: "Prof. BIMTECH"
        },
        {
            name: "Dr. Gagan Katiyar",
            Img: pro8,
            dy: "Prof. BIMTECH"
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate()
    const cardContainerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (currentPage < Math.ceil(profes?.length / itemsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentData = profes?.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );
    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }
    const Brochure = () => {
        setSuccess(true)
    }
    return (
        <div className="CollegeView mt-5">
            <div className="row mt-5">
                <div className="col-lg-6 col-6 mt-5">
                    <div className="col-view-content">
                        <h1>{university[0]?.description} <br></br> <b>{university[0]?.universityName}</b></h1>
                        <div className="btn-col-view">
                            <button onClick={() => setSuccess(true)}>Enquiry Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-6 mt-5">
                    <div className="con-view-college">
                        <img src={'https://api.123admissions.com' + university[0]?.uploadPathcollegeImage}></img>
                    </div>

                </div>
                <div className="col-lg-12">
                    <div className="col-view-content-2">
                        <h1>Top Courses, Fees & Eligibility</h1>
                        {courses.map((d) => (<div className="mt-5">
                            <div className="b-card">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="top-content">
                                            <div>
                                                <h2>{d?.courseName}</h2>
                                                <div className="d-flex">
                                                    <p>★ 4.5</p>

                                                    <div className="top-card">
                                                        <small>Degree by {university[0]?.universityName}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row vb">
                                            <div className="col-sm-4 col-4">
                                                <div className="row">
                                                    <div className="col-sm-12 col-12">
                                                        <b>Duration</b>
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        {d?.noOfYears} years
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        <b>Total Fees</b>
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        {d?.totalAmount}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-4">
                                                <div className="row">
                                                    <div className="col-sm-12 col-12">
                                                        <b>Exams Accepted</b>
                                                    </div>
                                                    <div className="col-sm-6 col-6">
                                                        CAT
                                                    </div>
                                                    <div className="col-sm-6 col-6">
                                                        GMAT
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        <b>Eligibility</b>
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        Graduation with 50%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-4">
                                                <div className="btn-p">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-12">
                                                            <button className="Compare" onClick={() => OnclickNavigate(university[0]?.universityName, d?.id)}>View</button>
                                                        </div>
                                                        <div className="col-sm-12 mt-3 col-12">
                                                            <button className="Brochure" onClick={Brochure}><img src={Download}></img>Brochure</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}


                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Instructors</h1>
                                <div className="mt-5">
                                    <img src={Proffer} style={{ width: "100%" }}></img>
                                </div>
                                <div className="data" style={{ overflowX: "scroll", display: "flex" }}>
                                    {currentData?.map((d, index) => (<div className="c-body-card" >
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img src={d?.Img}></img>
                                            </div>
                                            <div className="col-lg-6 mt-3">
                                                {d?.name}
                                            </div>
                                            <div className="col-lg-3 mt-3 mb-5">
                                                <img src={Assets?.clglogo5} style={{ width: "100%" }}></img>
                                            </div>
                                            <hr></hr>
                                            <div className="col-lg-12 mt-3">
                                                <p style={{ color: "black" }}>A practioneer faculty having diversified experience in electrical maintenance, paint and luggage sales, retail and telecom. Currently in higher education sector.... Read More</p>
                                            </div>
                                        </div>
                                    </div>))}
                                    <div className="btn-pre-next">
                                        <button onClick={handlePrev} className="prev-btn">{"←"}</button>
                                        <button onClick={handleNext} className="prev-btn">{"→"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">

                    <div className="row cetificate">
                        <div className="col-lg-4">
                            <img src={catificate}></img>
                        </div>
                        <div className="col-lg-8 mt-5">
                            <h1 style={{ color: "white" }}>Earn valuable credentials and recognition</h1>
                        </div>
                    </div>
                </div>
            </div>
            <FormModle
                success={success}
                setSuccess={setSuccess}
            />
        </div>
    );
};

export default CollegeView;
