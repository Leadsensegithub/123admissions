import React, { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Landingpage.css'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Success_modal from "../../components/SuccessModal/SuccessModal";
import Assets from "../../assets/assets";
import FormModle from "../../components/FromModle/FormModle";
import Left from '../../assets/aboutus/Group 194.svg'
import rigth from '../../assets/aboutus/Group 195.svg'
import CountUp from 'react-countup';
import Topimg from '../../assets/LandingPage/top-img.svg'
import 'react-intl-tel-input/dist/main.css'; // Import CSS
import IntlTelInput from 'react-intl-tel-input'; // Import React component
import Select from 'react-select'
import Loader from "../../components/Loader/loader";


const LandingPage = () => {

    const [success, setSuccess] = useState(false);
    const [Patners, setPatners] = useState([])
    const [student, SetStudent] = useState([])
    const [countryData, setCountryData] = useState([])
    const [allsourses, setallsourses] = useState([])
    const [showview, setshowview] = useState(false)
    const [loader, setLoader] = useState(false)

    const fetchDataCorses = async () => {
        setLoader(true)
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getallcouseswithfilter`, {

            });
            setallsourses(response?.data?.data)
            setLoader(false)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const PatnersData = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/patners`, {

            });
            setPatners(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const CountryInfo = async () => {
        try {
            const filter = 'India'
            const response = await axios.get(`https://api.123admissions.com/api/v1/getcountryinfo`, {});
            setCountryData(response?.data?.data?.country)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const studentData = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getstudent`, {

            });
            SetStudent(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        PatnersData();

        studentData()

        CountryInfo()
        fetchDataCorses()
    }, []);
    const inputRef = useRef(null);



    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }




    const customStyles = {
        control: (provided) => ({
            ...provided,
            fontSize: '12px',  // Change this to your desired font size
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: '12px',  // Change this to your desired font size
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '12px',  // Change this to your desired font size
        }),
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const Navigateabroad = (e) => {
        sessionStorage.setItem('country', e);
        window.open(`/abroad/view?${e}`, "_blank");
    }

    const options = [
        { value: 'finance', label: 'Finance' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'hr', label: 'Human Resources' },
        { value: 'operations', label: 'Operations Management' },
        { value: 'it', label: 'Information Technology' },
        { value: 'international', label: 'International Business' },
        { value: 'healthcare', label: 'Healthcare Management' },
        { value: 'entrepreneurship', label: 'Entrepreneurship' },
        { value: 'consulting', label: 'Consulting' },
        { value: 'strategy', label: 'Strategy' },
        { value: 'supply_chain', label: 'Supply Chain Management' },
        { value: 'real_estate', label: 'Real Estate' },
        { value: 'energy', label: 'Energy Management' },
        { value: 'non_profit', label: 'Non-profit Management' },
    ];
    const options1 = [
        { value: 'high_school', label: 'High School' },
        { value: 'bachelors', label: 'Bachelor\'s Degree' },
        { value: 'masters', label: 'Master\'s Degree' },
        { value: 'mba', label: 'MBA' },
        { value: 'phd', label: 'PhD' },
    ];
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", font: "30px", zIndex: "10" }}
                onClick={onClick}
            >
                {/* Your custom previous arrow icon or SVG */}
                <img src={Left} style={{ width: "70px" }}></img>
            </div>
        );
    };
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: "10" }}
                onClick={onClick}
            >
                <img src={rigth} style={{ width: "70px" }}></img>

            </div>
        );
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 668, // Adjust this value as per your design for mobile devices
                settings: {
                    slidesToShow: 1, // Number of slides to show on mobile
                },
            },
        ],
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, // Use custom previous arrow component
        nextArrow: <NextArrow />, // Use custom next arrow component
        responsive: [
            {
                breakpoint: 668, // Adjust this value as per your design for mobile devices
                settings: {
                    slidesToShow: 1, // Number of slides to show on mobile
                },
            },
        ],
    };
    return (
        <>
            <div className="landingpage" >
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 display1 mt-5">
                            <div className="banner">
                                <div className="content">
                                    <h2 className='jj' style={{ textAlign: "start", marginLeft: "16%" }}>India's No.1 Most Trusted Educational partner.  <br></br><b>123 Admissions</b></h2>
                                </div>
                                <div>
                                    <button className="btn event_model_popup" onClick={() => setSuccess(true)}>Consult with Career Expert Today</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <img className="top-img" src={Topimg} style={{ width: "80%", float: "right", marginTop: "5%" }}></img>
                        </div>
                        <div className="col-12 display2">
                            <p style={{ textAlign: "center", color: "#e4b449", fontSize: "21px", fontWeight: "700" }}>India's No.1 Most Trusted Educational partner.
                                <b style={{ color: "black" }}>123 Admissions</b></p>
                            <div className="row">
                                <div className="col-lg-12">

                                    <Select options={options} placeholder='Select your Domain' styles={customStyles} />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <Select options={options1} placeholder='Select your highest qualification' styles={customStyles} />
                                </div>

                                <div className="col-lg-12">
                                    <button className="event_model_popup" onClick={() => setSuccess(true)}>Consult with Career Expert Today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <div className="card-content">
                                        <p className="num">
                                            <CountUp end={350000} duration={5} separator="," />
                                            +
                                        </p>
                                        <p className="con">Number of Alumni</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="card-content">
                                        <p className="num">
                                            <CountUp end={35} duration={5} />
                                            +
                                        </p>
                                        <p className="con">World’s Leading Academic Partners</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-4">
                                    <div className="card-content" style={{ border: "none" }}>
                                        <p className="num">
                                            <CountUp end={23} duration={5} />
                                            +
                                        </p>
                                        <p className="con">Centers Across India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="courses-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content-courses">
                                    <h4>Discover <b>Our Courses</b></h4>

                                </div>
                            </div>
                            {loader ? <div style={{ padding: "10%" }}><Loader /></div> : <>
                                <div className="col-lg-12" style={{ color: "black", marginTop: "2%" }}>
                                    <h3>MBA <b style={{ color: "var(--green1)" }}>({allsourses?.MBA?.length})</b></h3>
                                    <Slider {...settings}>
                                        {allsourses?.MBA?.map((d) => (
                                            <div>
                                                <div className="cardpoint">
                                                    <div className="">
                                                        <div className="logoImage">
                                                            <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="logo-clg">
                                                            <img src={'https://api.123admissions.com' + d?.uploadUniversityLogo} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="ccc-p">
                                                            <h5 className="textoverlap">{d?.universityName}</h5>
                                                        </div>
                                                        <div className="con-ccc" style={{ marginTop: "10px", textAlign: "center" }}>
                                                            <p className="textoverlap">{d?.courseName}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-2 col-2" >
                                                                <img src={Assets?.vetor} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}> <b>Degree:</b> {d?.degree}</p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.month} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Months:</b>  {d?.noOfYears} </p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.star} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Amount:</b>  {d?.totalAmount}</p><br></br>
                                                            </div>

                                                        </div>
                                                        <div className="th">
                                                            <button type="button" onClick={() => OnclickNavigate(d.courseName, d?.courses)}>VIEW PROGRAM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>
                                </div>
                                <div className="col-lg-12" style={{ color: "black" }}>
                                    <h3>Study Abroad <b style={{ color: "var(--green1)" }}>({allsourses?.studyabroad?.length})</b></h3>
                                    <Slider {...settings}>
                                        {allsourses?.studyabroad?.map((d) => (
                                            <div>
                                                <div className="cardpoint">
                                                    <div className="">
                                                        <div className="logoImage">
                                                            <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="logo-clg">
                                                            <img src={'https://api.123admissions.com' + d?.uploadUniversityLogo} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="ccc-p">
                                                            <h5 className="textoverlap">{d?.universityName}</h5>
                                                        </div>
                                                        <div className="con-ccc" style={{ marginTop: "10px", textAlign: "center" }}>
                                                            <p className="textoverlap">{d?.courseName}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-2 col-2" >
                                                                <img src={Assets?.vetor} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}> <b>Degree:</b> {d?.degree}</p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.month} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Months:</b>  {d?.noOfYears} </p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.star} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Amount:</b>  {d?.totalAmount}</p><br></br>
                                                            </div>

                                                        </div>
                                                        <div className="th">
                                                            <button type="button" onClick={() => OnclickNavigate(d.courseName, d?.courses)}>VIEW PROGRAM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>
                                </div>
                                {showview ? <div className="col-lg-12" style={{ color: "black" }}>
                                    <h3>Management <b style={{ color: "var(--green1)" }}>({allsourses?.management?.length})</b></h3>
                                    <Slider {...settings}>
                                        {allsourses?.management?.map((d) => (
                                            <div>
                                                <div className="cardpoint">
                                                    <div className="">
                                                        <div className="logoImage">
                                                            <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="logo-clg">
                                                            <img src={'https://api.123admissions.com' + d?.uploadUniversityLogo} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="ccc-p">
                                                            <h5 className="textoverlap">{d?.universityName}</h5>
                                                        </div>
                                                        <div className="con-ccc" style={{ marginTop: "10px", textAlign: "center" }}>
                                                            <p className="textoverlap">{d?.courseName}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-2 col-2" >
                                                                <img src={Assets?.vetor} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}> <b>Degree:</b> {d?.degree}</p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.month} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Months:</b>  {d?.noOfYears} </p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.star} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Amount:</b>  {d?.totalAmount}</p><br></br>
                                                            </div>

                                                        </div>
                                                        <div className="th">
                                                            <button type="button" onClick={() => OnclickNavigate(d.courseName, d?.courses)}>VIEW PROGRAM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>
                                </div> : <></>}
                                {showview ? <div className="col-lg-12" style={{ color: "black" }}>
                                    <h3>Marketing <b style={{ color: "var(--green1)" }}>({allsourses?.marketing?.length})</b></h3>
                                    <Slider {...settings}>
                                        {allsourses?.marketing?.map((d) => (
                                            <div>
                                                <div className="cardpoint">
                                                    <div className="">
                                                        <div className="logoImage">
                                                            <img src={'https://api.123admissions.com' + d?.uploadPathcollegeImage} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="logo-clg">
                                                            <img src={'https://api.123admissions.com' + d?.uploadUniversityLogo} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="ccc-p">
                                                            <h5 className="textoverlap">{d?.universityName}</h5>
                                                        </div>
                                                        <div className="con-ccc" style={{ marginTop: "10px", textAlign: "center" }}>
                                                            <p className="textoverlap">{d?.courseName}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-2 col-2" >
                                                                <img src={Assets?.vetor} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}> <b>Degree:</b> {d?.degree}</p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.month} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Months:</b>  {d?.noOfYears} </p><br></br>
                                                            </div>
                                                            <div className="col-sm-2 col-2">
                                                                <img src={Assets?.star} style={{ marginTop: "0", marginLeft: "20px" }}></img><br></br>
                                                            </div>
                                                            <div className="col-sm-10 col-10">
                                                                <p style={{ marginBottom: "0px" }}><b>Amount:</b>  {d?.totalAmount}</p><br></br>
                                                            </div>

                                                        </div>
                                                        <div className="th">
                                                            <button type="button" onClick={() => OnclickNavigate(d.courseName, d?.courses)}>VIEW PROGRAM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </Slider>
                                </div> : <></>}
                            </>}
                            <div className="col-12">
                                <div style={{ textAlign: "center", marginBottom: "5%" }}>
                                    <button
                                        style={{
                                            backgroundColor: "var(--green1)",
                                            color: "white",
                                            borderRadius: "50px",
                                            height: "40px",
                                            padding: "4px 40px",
                                            border: "none",
                                            marginTop: "30px"
                                        }}
                                        onClick={() => setshowview(!showview)}
                                    >{showview ? "View Less" : "View More"}</button>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 mt-4">
                                            <div className="thg">
                                                <h1>Our Knowledge Partners</h1>
                                            </div>
                                            <div class="slider">
                                                {Patners?.map((d) => (<div class="item"><img alt="logo" src={'https://api.123admissions.com' + d?.pro_img} /></div>))}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 mt-5'>
                                <div className='container' style={{ textAlign: "center" }}>

                                    <h1>Students Say’s</h1>
                                </div>
                                <div className=''>
                                    <Slider {...settings2}>
                                        {student.map((card, index) => (
                                            <div>
                                                <div key={index} className='g-card' style={{ margin: "30px" }}>
                                                    <p>{card.discretion}</p>
                                                    <div style={{ display: "flex", justifyContent: "center" }} className='mb-2'>
                                                        <img src={'https://api.123admissions.com' + card.pro_img} alt={card.name} style={{ width: "20%" }} />
                                                    </div>
                                                    <p>{card.name}</p>
                                                    <p>{card.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="mt-3 hnmk">
                                <h1>Partnerships</h1>
                            </div>
                        </div>
                        <div className="col-lg-12 Mobile mt-2">
                            <div className="partners">
                                <img src={Assets?.partner1}></img>
                                <img src={Assets?.partner2}></img>
                                <img src={Assets?.partner3}></img>
                                <img src={Assets?.partner4}></img>
                                <img src={Assets?.partner5}></img>
                            </div>
                        </div>

                    </div>
                    <div className='row Destop' >

                        <div className='col-lg-6'>
                            <div className='ipos' style={{ textAlign: "start", marginTop: "20%" }}>
                                <p>123Admissions partners with more than 275 leading universities and companies
                                    to bring flexible, affordable, job-relevant online learning to individuals and
                                    organizations worldwide. We offer a range of learning opportunities—from
                                    hands-on projects and courses to job-ready certificates and degree programs.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={Assets?.patnership}></img>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="getintouch">
                            <div className="cont">
                                <div className="row">
                                    <div className="col-lg-8 col-12">
                                        <h4>Are you prepared to begin your admission application?</h4>
                                        <p>Begin your journey with assurance by applying through Study Abroad - ensure your future.</p>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <button onClick={() => setSuccess(true)}>GET IN TOUCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">

                        <h1>Select your <b>Abroad Courses</b></h1>

                        <div className="country Destop">
                            {countryData.map((d) => (
                                <div className="card-c"
                                    onClick={() => Navigateabroad(d?.country_name)}
                                >
                                    <img src={'https://api.123admissions.com' + d?.img_path}></img>
                                    <h5>{d?.country_name}</h5>
                                </div>))}

                        </div>
                        <div className="card-content-ph Mobile" style={{ marginBottom: "30px" }}>
                            {countryData.map((d) => (
                                <div className="card-ps"
                                    style={{ height: "320px", padding: "2pxb" }}
                                    onClick={() => Navigateabroad(d?.country_name)}
                                >
                                    <img style={{ width: "100%", borderRadius: "10px" }} src={'https://api.123admissions.com' + d?.img_path}></img>
                                    <h5 style={{ textAlign: "center", marginTop: "10px" }}>{d?.country_name}</h5>
                                </div>))}

                        </div>
                    </div>

                </div>

                <FormModle
                    success={success}
                    setSuccess={setSuccess}
                />
            </div>

        </>

    );
};

export default LandingPage;
