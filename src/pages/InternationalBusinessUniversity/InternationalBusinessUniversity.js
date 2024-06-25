import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import BA from '../../assets/universityLogoImage/1717053432219_iu.svg';
import Topimg from '../../assets/LandingPage/top-img.svg'
import topimg2 from '../../assets/LandingPage/top-img.png'
import samplecaf from '../../assets/catificates/BDU.Sample Certificate.jpeg'
import './InternationalBusinessUniversity.css'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css';
import Select from 'react-select';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from '../../assets/aboutus/Group 194.svg'
import rigth from '../../assets/aboutus/Group 195.svg'
import pro1 from '../../assets/image 40.svg'
import pro2 from '../../assets/image 44.svg'
import pro3 from '../../assets/image 45.svg'
import pro4 from '../../assets/image 48.svg'
import pro5 from '../../assets/image 49.svg'
import pro6 from '../../assets/image 50.svg'
import pro7 from '../../assets/image 51.svg'
import pro8 from '../../assets/image 52.svg'
import FormModle from "../../components/ModlePopup/ModleSuccess";


const InternationalBusinessUniversity = () => {
    const [university, setUniversity] = useState([])
    const [courses, setCourses] = useState([])
    const [success, setSuccess] = useState(false)

    const id = 19

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [errors, setErrors] = useState({});

    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: false, // Set to false to hide the flag
            });
        }
    }, []);
    console.log(university)
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
    const courseOptions = courses.map(course => ({
        value: course.id,
        label: course.courseName
    }));
    const handleChange = (option) => {
        setSelectedOption(option);
    };
    console.log(errors)
    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!contact) newErrors.contact = "Contact is required.";
        if (!selectedOption) newErrors.course = "Course selection is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        console.log('iiiiiii', validationErrors)

        let data = new FormData();
        data.append('contact', contact);
        data.append('name', name);
        data.append('email', email);
        data.append('cou', selectedOption ? selectedOption.value : '');
        data.append('id', '3');

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.123admissions.com/api/v1/formall',

            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setSuccess(true)
                setName('')
                setContact('')
                selectedOption(null)
                setEmail('')

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        University();
    }, []);
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
            name: "Prof. Chanchal",
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
    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }
    return (
        <>
            <div className="bharathidasnuniversity">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bharathidasnuniversity-header">
                                <div className="row">

                                    <div className="col-lg-7">
                                        <div className="bharathidasnuniversity-content">
                                            <div className="logo" style={{ display: "flex", justifyContent: "center" }}>
                                                <img src={BA} style={{ width: "50%" }}></img>
                                            </div>
                                            <div className="p-content">
                                                <p> {university[0]?.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="bharathidasnuniversity-form">
                                            <div className="bharathidasnuniversity-form-boby">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h5>Enter your details and our experts will get in touch with you shortly!</h5>
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            style={{ borderRadius: "5px" }}
                                                            placeholder="Enter your name*"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            style={{ borderRadius: "5px" }}
                                                            placeholder="Enter your email*"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <IntlTelInput
                                                            inputProps={{ id: '91', name: 'india', ref: inputRef }}
                                                            defaultCountry="in"
                                                            onPhoneNumberChange={(isValid, value, countryData, number) => {
                                                                setContact(value);
                                                            }}
                                                            required
                                                        />
                                                        {errors.contact && <small className="text-danger">{errors.contact}</small>}
                                                    </div>
                                                    <div className="col-12 mt-3" style={{ color: "black" }}>
                                                        <Select
                                                            value={selectedOption}
                                                            onChange={handleChange}
                                                            options={courseOptions}
                                                            required
                                                        />
                                                        {errors.course && <small className="text-danger">{errors.course}</small>}
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <div style={{ textAlign: "start", fontSize: "10px" }}>
                                                            <input style={{ marginRight: "10px" }} type="checkbox" required />
                                                            I authorize Metro polia University's and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mt-5">
                                                        <button className="submit" type="submit" onClick={handleSubmit}>Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="exp">
                                            <div className="item">
                                                <h3>70+</h3>
                                                <p>years of Manipal legacy </p>
                                            </div>
                                            <div className="item">
                                                <h3>1500+</h3>
                                                <p>Learner footprint across towns & cities of India </p>
                                            </div>
                                            <div className="item">
                                                <h3>60+</h3>
                                                <p>Student nationalities </p>
                                            </div>
                                            <div className="item">
                                                <h3>500+</h3>
                                                <p>Expert faculty</p>
                                            </div>
                                            <div className="item">
                                                <h3>100+</h3>
                                                <p>Recruiters from Fortune 500 companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>Courses</h3>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="exp-courses">
                                                {courses?.map((d) => (<div className="item-courses"
                                                    onClick={() => OnclickNavigate(d?.courseName, d?.id)}
                                                >
                                                    <div className="courses-content">
                                                        <h5 style={{ color: "white" }}>{d?.courseName}</h5>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div>{d?.noOfYears} months</div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div>INR {d?.totalAmount}</div>
                                                            </div>
                                                            <div className="col-12 mt-3">
                                                                <button style={{ border: "none" }} onClick={() => OnclickNavigate(d?.courseName, d?.id)}>View course</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sample-catificate">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3>Sample certificate</h3>
                                                </div>
                                                <div className="col-12 mt-5">
                                                    <div className="cafiticate">
                                                        <div className="row">
                                                            <div className="col-12 col-lg-3">
                                                                <img src={samplecaf} style={{ width: "80%" }}></img>
                                                            </div>
                                                            <div className="col-12  col-lg-9" >
                                                                <h1 style={{ color: "white" }}>Earn valuable credentials and recognition</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ marginTop: "10%" }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FormModle
                success={success}
                setSuccess={setSuccess}
            />
        </>
    )
}
export default InternationalBusinessUniversity