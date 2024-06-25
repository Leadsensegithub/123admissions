import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import BA from '../../assets/universityLogoImage/1717053242478_LIBA.png';
import Topimg from '../../assets/LandingPage/top-img.svg'
import topimg2 from '../../assets/LandingPage/top-img.png'
import samplecaf from '../../assets/catificates/AU. Sample Certificate..jpeg'
import adv from '../../assets/adv/scientific.png'
import adv2 from '../../assets/adv/icons8-ambulance-50.png'
import adv3 from '../../assets/adv/icons8-scales-50.png'
import adv4 from '../../assets/adv/icons8-recycle-50.png'
import adv5 from '../../assets/adv/icons8-logistics-50.png'
import adv6 from '../../assets/adv/icons8-marketing-50.png'
import './style.css'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css';
import Select from 'react-select';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from '../../assets/aboutus/Group 194.svg'
import rigth from '../../assets/aboutus/Group 195.svg'
import pro1 from '../../assets/universityLogoImage/Dr Kishore Kunal.jpg'
import pro2 from '../../assets/universityLogoImage/Dr. K. R. Ramprakash.jpg'
import pro3 from '../../assets/universityLogoImage/R.-ARUN-PRASAD.jpg'

import FormModle from "../../components/ModlePopup/ModleSuccess";


const PGDM = () => {
    const [university, setUniversity] = useState([])
    const [courses, setCourses] = useState([])
    const [success, setSuccess] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Use 'auto' for instant scrolling
        });
    };
    const id = 51

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
    const courseOptions = [{
        value: 'PGDM ',
        label: 'PGDM '
    }];
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
        data.append('id', '4');

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
                setSelectedOption(null)
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
    const tags = [
        {
            id: "1",
            name: "Term I",
            courseTile: [
                {
                    title: "Principles of Management"
                },
                {
                    title: "Financial Accounting"
                },
                {
                    title: "Quantitative Methods for Management"
                },
                {
                    title: "Marketing Management"
                },
                {
                    title: "Managerial Economics"
                },
            ],

        },
        {
            id: "2",
            name: "Term II",
            courseTile: [
                {
                    title: "Operations Management"
                },
                {
                    title: "Organizational Behaviour"
                },
                {
                    title: "Corporate Finance"
                },
                {
                    title: "CHuman Resource Management"
                },
                {
                    title: "Business Research Methods"
                },
            ],

        },
        {
            id: "3",
            name: "Term III",
            courseTile: [
                {
                    title: "Strategic Management"
                },
                {
                    title: "Business Ethics and Corporate Social Responsibility"
                },
                {
                    title: "Management Information Systems"
                },
                {
                    title: "Managerial Accounting"
                },
                {
                    title: "Business Law"
                },
            ],

        },
        {
            id: "4",
            name: "Term IV",
            courseTile: [
                {
                    title: "Supply Chain Management"
                },
                {
                    title: "Capstone Project I"
                },

            ],
            Content: [
                {
                    n: "Marketing Management",
                    ten: [
                        {
                            teem: "Consumer Behaviour",

                        },
                        {
                            teem: "Strategic Brand Management",

                        },
                        {
                            teem: "Sales & Distribution Management",

                        },
                        {
                            teem: "Services Marketing",
                        }
                    ],
                }, {
                    n: "Financial Management",
                    ten: [
                        {
                            teem: "Investment Analysis & Portfolio Management",

                        },
                        {
                            teem: "Derivatives & Risk Management",


                        },
                        {
                            teem: "Direct Taxation",


                        },
                        {
                            teem: "Financial Markets & Institutions",
                        }
                    ],
                }, {
                    n: "Human Resource Management",
                    ten: [
                        {
                            teem: "Talent Acquisition and Management",


                        },
                        {
                            teem: "Performance Management",


                        },
                        {
                            teem: "Compensation and Benefits",


                        },
                        {
                            teem: "Training and Development",

                        },

                    ],

                },
                {
                    n: "Business Analytics",
                    ten: [
                        {
                            teem: "Data Visualization and Reporting",


                        },
                        {
                            teem: "Statistical Analysis and Modelling",


                        },
                        {
                            teem: "Machine Learning for Business",


                        },
                        {
                            teem: "Data Warehousing and Data Mining",

                        },

                    ],

                },
                {
                    n: "Health Care Management",
                    ten: [
                        {
                            teem: "Healthcare Systems and Policy",


                        },
                        {
                            teem: "Healthcare Operations Management",


                        },
                        {
                            teem: "Healthcare Marketing",


                        },
                        {
                            teem: "Healthcare Finance",

                        },

                    ],

                },

            ]
        },
        {
            id: "5",
            name: "Term V",
            courseTile: [
                {
                    title: "International Business"
                },
                {
                    title: "E-commerce and Digital Marketing"
                },

            ],
            Content: [
                {
                    n: "Marketing Management",
                    ten: [
                        {
                            teem: "Integrated Marketing Communications",

                        },
                        {
                            teem: "Digital Marketing & Analytics",

                        },
                        {
                            teem: "Customer Relationship Management",

                        },
                        {
                            teem: "Advanced Market Research",
                        }
                    ],
                }, {
                    n: "Financial Management",
                    ten: [
                        {
                            teem: "International Finance",

                        },
                        {
                            teem: "Mergers, Acquisitions & Corporate Restructuring",


                        },
                        {
                            teem: "Goods & Services Tax (GST)",


                        },
                        {
                            teem: "Financial Modelling & Analytics",
                        }
                    ],
                }, {
                    n: "Human Resource Management",
                    ten: [
                        {
                            teem: "Organizational Development and Change Management",


                        },
                        {
                            teem: "Labour Laws and Industrial Relations",


                        },
                        {
                            teem: "Strategic HRM",


                        },
                        {
                            teem: "HR Analytics",

                        },

                    ],

                },
                {
                    n: "Business Analytics",
                    ten: [
                        {
                            teem: "Big Data Technologies",


                        },
                        {
                            teem: "Advanced Machine Learning and Artificial Intelligence",


                        },
                        {
                            teem: "Text and Sentiment Analysis",


                        },
                        {
                            teem: "Prescriptive Analytics and Optimization",

                        },

                    ],

                },
                {
                    n: "Health Care Management",
                    ten: [
                        {
                            teem: "Healthcare Informatics",


                        },
                        {
                            teem: "Quality and Patient Safety",


                        },
                        {
                            teem: "Health Law and Ethics",


                        },
                        {
                            teem: "Healthcare Strategic Management",

                        },

                    ],

                },

            ]
        },
        {
            id: "6",
            name: "Term V",
            courseTile: [
                {
                    title: "Entrepreneurship and Innovation"
                },
                {
                    title: "Capstone Project II"
                },

            ],
            Content: [
                {
                    n: "Marketing Management",
                    ten: [
                        {
                            teem: "Product and Innovation Management",

                        },
                        {
                            teem: "Marketing Strategy and Planning",

                        },
                        {
                            teem: "Retail Marketing",

                        },
                        {
                            teem: "International Marketing",
                        }
                    ],
                }, {
                    n: "Financial Management",
                    ten: [
                        {
                            teem: "Credit Risk Management",

                        },
                        {
                            teem: "Financial Planning and Wealth Management",


                        },
                        {
                            teem: "Fintech Innovations & Disruptions",


                        },
                        {
                            teem: "Corporate Governance and Sustainable Finance",
                        }
                    ],
                }, {
                    n: "Human Resource Management",
                    ten: [
                        {
                            teem: "HR Technology and Tools",


                        },
                        {
                            teem: "Workforce Diversity and Inclusion",


                        },
                        {
                            teem: "Leadership and Team Building",


                        },
                        {
                            teem: "HR Consultancy",

                        },

                    ],

                },
                {
                    n: "Business Analytics",
                    ten: [
                        {
                            teem: "Business Intelligence Tools & Techniques",


                        },
                        {
                            teem: "Time Series and Forecasting",


                        },
                        {
                            teem: "Customer Analytics",


                        },
                        {
                            teem: "Supply Chain and Operations Analytics",

                        },

                    ],

                },
                {
                    n: "Health Care Management",
                    ten: [
                        {
                            teem: "Healthcare Human Resources",


                        },
                        {
                            teem: "Health Economics",


                        },
                        {
                            teem: "Healthcare Innovations",


                        },
                        {
                            teem: "Health Analytics",

                        },

                    ],

                },

            ]
        }
    ]
    const IndustryData = [
        {
            name: "Human Resource Management",
            Img: adv,

        },
        {
            name: "Healthcare Management",
            Img: adv2,

        },
        {
            name: " Business analytics Management",
            Img: adv3,

        },
        {
            name: "Financial Management",
            Img: adv4,

        },
        {
            name: "Logistics & Supply Chain Management",
            Img: adv5,


        },
        {
            name: "Marketing Management",
            Img: adv6,

        },

    ]
    const profes = [
        {
            name: "Dr.K.R.Ramprakash",
            img: pro2,
            content: "Program Coordinator, Loyola Institute"
        },
        {
            name: "Dr.Arun Prasad",
            img: pro3,
            content: "Assistant Professor- Marketing -LIBA OL"
        },
        {
            name: "Dr. Kishore Kunal",
            img: pro1,
            content: "Associate Dean – Online Education Initiatives"
        }
    ]
    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }
    const [activeTab, setActiveTab] = useState('1');

    const handleTabClick = (term) => {
        setActiveTab(term);
    };
    return (
        <>
            <div className="main-com">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-com-header">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="hhhh">
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <div className="main-com-content">
                                                        <div className="logos" style={{ display: "flex", justifyContent: "center" }}>
                                                            <img src={BA} style={{ width: "50%" }}></img>
                                                        </div>
                                                        <div className="p-content">
                                                            <p>A Complete Online PGDM Programme caters to both working professionals and freshers, offering flexibility and essential skills in strategic management, finance, marketing, and leadership. Graduates are prepared for diverse roles across industries, equipped with practical knowledge to excel in the global business landscape.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="main-com-form">
                                                        <div className="main-com-form-boby">
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
                                                                    {errors.name && <p className="text-danger">{errors.name}</p>}
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
                                                                    {errors.email && <p className="text-danger">{errors.email}</p>}
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
                                                                    {errors.contact && <p className="text-danger">{errors.contact}</p>}
                                                                </div>
                                                                <div className="col-12 mt-3" style={{ color: "black" }}>
                                                                    <Select
                                                                        value={selectedOption}
                                                                        onChange={handleChange}
                                                                        options={courseOptions}
                                                                        required
                                                                    />
                                                                    {errors.course && <p className="text-danger">{errors.course}</p>}
                                                                </div>
                                                                <div className="col-12 mt-3">
                                                                    <div style={{ textAlign: "start", fontSize: "10px" }}>
                                                                        <input style={{ marginRight: "10px" }} type="checkbox" required />
                                                                        I authorize liba and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 mt-5">
                                                                    <button className="submit" type="submit" onClick={handleSubmit}>Enroll Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <h1>Electives</h1>
                                        <hr></hr>
                                        <p>Upgrade yourself with</p>
                                        <h2>Industry-relevant specializations</h2>
                                        <p>Specially programmed by LIBA for working professionals</p>
                                        <div className="exp-courses">
                                            {IndustryData.map((d) => (<div className="item-courses">
                                                <div className="courses-content">
                                                    <div className="row" style={{ fontSize: "20px" }}>
                                                        <div className="col-2">
                                                            <div style={{ backgroundColor: "white", borderRadius: "50%", padding: "10px" }}>
                                                                <img src={d?.Img} style={{ width: "9vh" }}></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-9" style={{ textAlign: "start" }}>
                                                            <div>{d?.name}</div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>))}

                                        </div>
                                    </div>
                                    <div className="col-ld-12 mt-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <h1>Programme Content</h1>
                                                <hr></hr>
                                            </div>
                                            <div className="col-12">
                                                <div className="content-tag">
                                                    <div className="row">
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '1' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('1')}
                                                            >
                                                                Term I
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '2' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('2')}
                                                            >
                                                                Term II
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '3' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('3')}
                                                            >
                                                                Term III
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '4' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('4')}
                                                            >
                                                                Term IV
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '5' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('5')}
                                                            >
                                                                Term V
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button
                                                                className={`tablinks ${activeTab === '6' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('6')}
                                                            >
                                                                Term IV
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {tags?.map((d) => (<div className="tabcontent" style={{ display: activeTab === `${d?.id}` ? 'block' : 'none' }}>

                                                        <div className="row">
                                                            <h5 className="mt-4">Core Courses</h5>
                                                            {d.courseTile.map((c) => (<div className="col-4">
                                                                <div className="pt">
                                                                    {c?.title}
                                                                </div>

                                                            </div>
                                                            ))}
                                                            {(activeTab >= 4) ? <>
                                                                <hr></hr>
                                                                <h5>Elective Courses (Specializations)</h5>
                                                                {d?.Content?.map((cn) => (
                                                                    <>

                                                                        <div className="col-4 mt-5">
                                                                            <h5>{cn?.n}</h5>
                                                                            {cn?.ten.map((n) => (
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <div className="nt">{n?.teem}</div>
                                                                                    </div>
                                                                                </div >
                                                                            ))}


                                                                        </div>


                                                                    </>
                                                                ))}
                                                            </> : <></>}
                                                        </div>
                                                    </div>))}



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                                        Note: The curriculum is indicative, subject to change based on guidance from industry and academia.
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                                        <button style={{ backgroundColor: "black", color: "white", marginTop: "10px", padding: "5px" }} onClick={scrollToTop}>Download Brochure</button>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <h1>Our Faculties</h1>
                                    </div>
                                    <hr></hr>
                                    <div className="col-lg-12 mt-5">
                                        <Slider {...settings}>
                                            {profes?.map((d, index) => (<div className='c-pro'>
                                                <div className='row' style={{ backgroundColor: "white", margin: "10px", padding: "10px", borderRadius: "20px", boxShadow: "6px 6px 12px 0px #00000021", height: "150px" }}>
                                                    <div className='col-sm-3'>
                                                        <img style={{ width: "9vh" }} src={d?.img}></img>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <span>{d?.name}</span><br></br>
                                                        <p>{d?.content}</p>
                                                    </div>

                                                </div>

                                            </div>))}

                                        </Slider>
                                    </div>





                                    <div className="col-lg-6 mt-5">
                                        <h1>Eligibility</h1>

                                        <hr></hr>
                                        <p style={{ padding: "10px", background: "white" }}>Statement of Purpose(SOP)

                                        </p>
                                        <p style={{ padding: "10px", background: "white" }}> Personal Interview</p>
                                    </div>
                                    <div className="col-lg-6 mt-5">
                                        <h1>Who Can Attend</h1>
                                        <hr></hr>
                                        <p style={{ padding: "10px", background: "white" }}>Graduates</p>
                                        <p style={{ padding: "10px", background: "white" }}>Working Professionals</p>
                                        <p style={{ padding: "10px", background: "white" }}>Entrepreneurs</p>
                                        <p style={{ padding: "10px", background: "white" }}>Mid-Senior Level Managers</p>
                                        <p style={{ padding: "10px", background: "white" }}>Aspiring Business Executives</p>
                                        {/* <p>Healthcare Manager</p> */}
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <h1>Selection Process</h1>
                                    </div>
                                    <hr></hr>
                                    <div className="col-lg-4 mt-5">
                                        <div className="card" style={{ height: "200px" }}>
                                            <div className="card-body">
                                                <h3>Step 1</h3>
                                                <h5>Complete your Application</h5>
                                                <p>Complete your application and submit the required details.The Admissions Commitee will then review your application which includes your work experience & educational background</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">
                                        <div className="card" style={{ height: "200px" }}>
                                            <div className="card-body">
                                                <h3>Step 2</h3>
                                                <h5>Get Shortlisted & Receive your Offer Letter</h5>
                                                <p>Upon qualifying, an Offer Letter will be sent to you confirming your admission to the executive Post-Graduate Programme in Healthcare Management</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">
                                        <div className="card" style={{ height: "200px" }}>
                                            <div className="card-body">
                                                <h3>Step 3</h3>
                                                <h5>Block your seat and begin your prep Course</h5>
                                                <p>Block your seat with an initial payment to enroll in the programme.Begin your Healthcare Managementjourney.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <h1>Admission Fee & Financing</h1>
                                    </div>
                                    <hr></hr>
                                    <div className="col-lg-6 mt-5">
                                        <div className="payment">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h5>Easy EMI Options Available</h5>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <p>Pay in easy monthly installments with our EMI options! No more worrying about finances! Start your learning journey today!

                                                            </p>
                                                        </div>
                                                        <div className="col-12" style={{ textAlign: "center" }}>
                                                            <button className="btn btn-primary" onClick={scrollToTop}>Apply Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-5">
                                        <div className="payment">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h5>Complete Payment</h5>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <p>Students can make one-time payment easily using options such as:
                                                            </p>
                                                        </div>
                                                        <div className="col-12 mt-3" style={{ textAlign: "center" }}>
                                                            <button className="btn btn-primary" onClick={scrollToTop}>INR 1,29,800</button>
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
                </div>
            </div >
            <FormModle
                success={success}
                setSuccess={setSuccess}
            />
        </>
    )
}
export default PGDM