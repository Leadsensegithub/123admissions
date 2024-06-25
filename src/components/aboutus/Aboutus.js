import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./Aboutus.css";
import { NavLink, useNavigate } from "react-router-dom";
import ExploreModual from "../ExploreModual/ExploreModual";
import Logo from '../../assets/Logo/Group 268.svg';
import media from '../../assets/social media/Group 136.svg'
import media1 from '../../assets/social media/Group 269.svg'
import media2 from '../../assets/social media/Vector-1.svg'
import media3 from '../../assets/social media/Vector-2.svg'
import media4 from '../../assets/social media/Vector.svg'

import axios from "axios";

const Aboutus = ({ setMenuToggle }) => {
    const [mba, setMba] = useState([])
    const [bca, setBca] = useState([])
    const [ma, setMa] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getpaticularcourses?Like=MBA`, {

            });
            setMba(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const Bca = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getpaticularcourses?Like=BCA`, {

            });
            setBca(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const Ma = async () => {
        try {
            const response = await axios.get(`https://api.123admissions.com/api/v1/getpaticularcourses?Like=MA`, {

            });
            setMa(response?.data?.data?.university)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
        Bca()
        Ma()
    }, []);

    const openCall = () => {
        const phoneNumber = '919940762388'; // Replace with the phone number you want to call
        const callUrl = `tel:${phoneNumber}`;
        window.open(callUrl);
    };
    // Provided list of courses 
    const courses = [
        "Computer Science",
        "Engineering",
        "Business Administration",
        "Psychology",
        "Biology",
        "Finance",
        "Marketing",
        "Art History",
        "Chemistry",
        "Sociology",
        "English Literature",
        "Physics",
        "Mathematics",
        "History",
        "Political Science",
        "Digital Marketing and Communication",
        "Brand Communication Management",
        "Human Resource Management",
        "Integrated Supply Chain Management",
        "Healthcare Management",
        "International Finance (integrated with ACCA, UK)",
        "Leadership and Management in New Age Businesses",
        "Digital Marketing",
        "Product Management",
        "HR Management and Analytics",
        "Product Management",
        "CSM® Certification Training",
        "CSPO® Certification Training",
        "Leading SAFe® 6.0 Training",
        "SAFe® 6.0 POPM Certification",
        "SAFe® 6.0 Scrum Master Certification",
        "Implementing SAFe® 6.0 with SPC Certification",
        "SAFe® 6.0 Release Train Engineer (RTE) Certification",
        "PMP® Certification Training",
        "PRINCE2® Foundation and Practitioner Certification",
        "Corporate & Financial Law",
        "Intellectual Property & Technology Law",
        "Dispute Resolution",
        "Contract Law Certificate Program",
        "DevOps Engineer Bootcamp",
        "Data Science Bootcamp",
        "Advanced Full Stack Development",
        "Data Science & Analytics Bootcamp",
        "UI/UX Design",
        "AI & Machine Learning Bootcamp: Master the Future of Technology",
        "Cloud Computing",
        "Sales Excellence Bootcamp",
        "Generative AI & Machine Learning Bootcamp: Master the Future of Technology",
        "Data Engineer",
        "Data Analytics",
        "AI Engineer",
        "Front-End Developer",
        "Back-End Developer",
        "Master of Business Administration (90 ECTS)",
        "Master of Business Administration (60 ECTS)",
        "MS in Data Analytics",
        "Project Management",
        "Information Technology",
        "International Management",
        "Bachelor of Business Administration (180 ECTS)",
        "B.Sc. Computer Science (180 ECTS)",
        "Masters Degree in Data Analytics and Visualization",
        "Masters Degree in Artificial Intelligence",
        "MBS in Entrepreneurship and Marketing",
        "MSc in Data Analytics",
        "MBA - Information Technology Concentration",
        "Master of Science in Accountancy",
        "Master of Science in Business Analytics",
        "MS in Data Science",
        "MS in Information Technology",
        "MS in Applied Data Science",
        "M.Sc. Data Science (60 ECTS)",
        "MS in Information Technology and Administrative Management",
        "MS in Computer Science",
        "MBA General Management-90 ECTS",
        "MSc International Business Management",
        "MBA Business Technologies",
        "MBA Leading Business Transformation",
        "MSc Business Intelligence and Data Science",
        "MS Data Analytics",
        "MS in Management Information Systems",
        "MSc International Business and Management",
        "MS Engineering Management",
        "MS in Machine Learning Engineering",
        "MS in Engineering Management",
        "MSc Data Engineering",
        "MSc Artificial Intelligence Engineering",
        "MPS in Informatics",
        "MPS in Applied Machine Intelligence",
        "MS in Project Management",
        "MPS in Analytics",
        "MBA International Business Management",
        "MS in Organizational Leadership",
        "MPS in Analytics - NEU Canada",
        "MBA with specialization",
        "MPS in Informatics - NEU Canada",
        "MS in Digital Marketing and Media",
        "Master in Logistics and Supply Chain Management",
        "MSc Sustainable Tourism and Event Management",
        "MSc in Circular Economy and Sustainable Innovation",
        "MSc in Impact Finance and Fintech Management",
        "MS Computer Science",
        "MS in Applied Statistics",
        "MS in Computer Information Systems",
        "Digital Marketing",
        "SUPPLY CHAIN MANAGEMENT",
        "Integrated Supply Chain Management"
    ];

    // Filter MBA, Doctorate, Data Science & Analytics, and SOFTWARE & TECH courses
    const mbaCourses = courses.filter(course =>
        course.toLowerCase().includes("mba")
    );

    const doctorateCourses = [
        "Golden Gate University",
        "Business Administration ESGCI",
        "Rushford Business School",
        "Swiss School of Business and Management",
        "Golden Gate University",
        "Golden Gate University"
    ];
    const AIML = [


        "Machine Learning & AI",
        "Data Science and Machine Learning",
        "GenerativeAI",
        "Full Stack AI and ML - 100% on-campus",
        "Machine Learning & NLP",
        "Machine Learning & Deep Learning",
        "AI & Machine Learning Bootcamp: Master the Future"
    ];
    const managementCourses = [
        "HR Management and Analytics",
        "Product Management",
        "Human Resource Management",
        "Integrated Supply Chain Management",
        "Healthcare Management",
        "Management",
        "Management",
        "Management Essentials",
        "International Finance (integrated with ACCA, UK)",
        "Leadership and Management in New Age Businesses",
        "Product Management",
        "Strategic Human Resources Leadership Cornell",
        "Human Resources Management for Indian Executives",
        "Effective Leadership and Management",
        "CSM® Certification Training",
        "CSPO® Certification Training",
        "Leading SAFe® 6.0 Training",
        "SAFe® 6.0 POPM Certification",
        "SAFe® 6.0 Scrum Master Certification",
        "Implementing SAFe® 6.0 with SPC Certification",
        "SAFe® 6.0 Release Train Engineer (RTE) Certification",
        "PMP® Certification Training",
        "PRINCE2® Foundation and Practitioner Certification"
    ];
    const lawCourses = [
        "Corporate & Financial Law",
        "Intellectual Property & Technology Law",
        "Dispute Resolution",
        "Contract Law Certificate Program"
    ];


    const jobLinkedCourses = [
        "Management",
        "DevOps Engineer Bootcamp",
        "Bootcamp",
        "Data Science Bootcamp",
        "Advanced Full Stack Development",
        "Data Science & Analytics Bootcamp",
        "Cloud Computing",
        "UI/UX Design",
        "AI & Machine Learning Bootcamp: Master the Future"
    ];
    const bootcamps = [
        "Data Science & Analytics Bootcamp",
        "Full Stack Software Development Bootcamp",
        "UI/UX Design",
        "Cloud Computing",
        "Sales Excellence Bootcamp",
        "Advanced Full Stack Development",
        "DevOps Engineer Bootcamp",
        "Generative AI & Machine Learning Bootcamp: Master the Future of Technology",
        "Data Engineer",
        "Data Analytics",
        "AI Engineer",
        "Front-End Developer",
        "Back-End Developer"
    ];
    const studyAbroadPrograms = [
        "Master of Business Administration (90 ECTS)",
        "Master of Business Administration (60 ECTS)",
        "Computer Science",
        "MS in Data Analytics",
        "Project Management",
        "Information Technology",
        "International Management",
        "Bachelor of Business Administration (180 ECTS)",
        "B.Sc. Computer Science (180 ECTS)",
        "Masters Degree in Data Analytics and Visualization",
        "Masters Degree in Artificial Intelligence",
        "MBS in Entrepreneurship and Marketing",
        "MSc in Data Analytics",
        "MBA - Information Technology Concentration",
        "Master of Science in Accountancy",
        "MS in Computer Science",
        "Master of Science in Business Analytics",
        "MS in Data Science",
        "MS in Information Technology",
        "Master of Business Administration",
        "MS in Applied Data Science",
        "M.Sc. Data Science (60 ECTS)",
        "MS in Information Technology and Administrative Management",
        "MS in Computer Science",
        "MBA General Management-90 ECTS",
        "MSc International Business Management",
        "MBA Business Technologies",
        "MBA Leading Business Transformation",
        "MSc Business Intelligence and Data Science",
        "MS Data Analytics",
        "MS in Management Information Systems",
        "MSc International Business and Management",
        "MS Engineering Management",
        "MS in Machine Learning Engineering",
        "MSc Data Engineering",
        "MSc Artificial Intelligence Engineering",
        "MPS in Informatics",
        "MPS in Applied Machine Intelligence",
        "MS in Project Management",
        "MPS in Analytics",
        "MBA International Business Management",
        "MS in Organizational Leadership",
        "MPS in Analytics - NEU Canada",
        "MBA with specialization",
        "MPS in Informatics - NEU Canada",
        "Master in Business Administration",
        "MS in Digital Marketing and Media",
        "Master in Logistics and Supply Chain Management",
        "MSc Sustainable Tourism and Event Management",
        "MSc in Circular Economy and Sustainable Innovation",
        "MSc in Impact Finance and Fintech Management",
        "MS in Applied Statistics",
        "MS in Computer Information Systems"
    ];

    const collegeStudentPrograms = [
        "Digital Marketing",
        "Data Science & Analytics",
        "Business Analytics",
        "Artificial Intelligence & Machine Learning"
    ];


    const dataScienceCourses = courses.filter(course =>
        course.toLowerCase().includes("data science") || course.toLowerCase().includes("analytics")
    );

    const softwareTechCourses = courses.filter(course =>
        course.toLowerCase().includes("software") || course.toLowerCase().includes("tech")
    );
    const MARKETING = [

        "Digital Marketing and Communication",
        "Brand Communication Management",
        "Digital Marketing",
        "Marketing"
    ];
    const handleClick = (e) => {

        window.open(`${e}`, '_blank');
    };
    const HangleClickinsta = () => {
        window.open('https://www.instagram.com/123admissions_edu/', '_blank')
    }
    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }
    const openWhatsApp = () => {
        const phoneNumber = '919940762388'; // Replace with the phone number you want to open
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="Aboutus">
            <div className="row n">
                <div className="col-lg-12 mt-3">
                    <div className="row ">
                        <div className="col-lg-1 col-6">

                            <div><img src={Logo} className="dataimg" style={{ width: "100%", border: "none", borderRadius: "0px", marginLeft: "33px" }} ></img></div>
                        </div>
                        <div className="col-lg-11 col-6 vbbbb">
                            <button style={{
                                background: "rgb(30, 166, 152)",
                                color: " white",
                                border: "3px solid white",
                                width: "20%",
                                fontSize: "large",
                                float: "right",
                                borderRadius: "10px",
                                marginRight: "10px"

                            }}
                                onClick={openCall}
                            >GET FREE CAREER ADVICE +91 9940762388</button>
                        </div>
                    </div>


                    <div className="col-lg-12"  >
                        <div className="social-media mb-5">


                            <img src={media1} style={{ cursor: "pointer" }} onClick={openWhatsApp}></img>
                            <img src={media2} style={{ cursor: "pointer" }} onClick={() => handleClick('https://www.linkedin.com/company/123admissions/')}></img>
                            <img src={media3} style={{ cursor: "pointer" }} onClick={() => handleClick('https://www.facebook.com/123admission')}></img>
                            <img src={media4} style={{ cursor: "pointer" }} onClick={HangleClickinsta}></img>

                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="row hp " style={{ padding: "0px 40px", paddingBottom: "2px" }}>


                            <hr></hr>
                            <div className="col-lg-4">
                                <h3>123 Admissions</h3>
                                <NavLink to={'/about'} style={{ textDecoration: 'none' }}>
                                    About us
                                </NavLink>
                            </div>
                            <div className="col-lg-4">
                                <h3>Support</h3>
                                <NavLink to={'/privacypolicy'} style={{ textDecoration: 'none', border: "none" }}>
                                    Our Privacy Policy
                                </NavLink>
                            </div>
                            <hr style={{ marginTop: "30px" }}></hr>
                            <div className="col-lg-3">
                                <h3>MBA Courses</h3>
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {mba.map((course, index) => (
                                        <NavLink key={index} to={'/'} style={{ textDecoration: 'none' }}
                                            onClick={() => OnclickNavigate(course?.courseName, course?.id)}
                                        >
                                            <li>{course?.courseName}</li>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-3">
                                <h3>BCA Courses</h3>
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {bca.map((course, index) => (
                                        <NavLink key={index} to={'/'} style={{ textDecoration: 'none' }}
                                            onClick={() => OnclickNavigate(course?.courseName, course?.id)}
                                        >
                                            <li>{course?.courseName}</li>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-3">
                                <h3>MA</h3>
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {ma.map((course, index) => (
                                        <NavLink key={index} to={'/'} style={{ textDecoration: 'none' }}
                                            onClick={() => OnclickNavigate(course?.courseName, course?.id)}
                                        >
                                            <li>{course?.courseName}</li>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>



                            <hr />


                            <div className="col-lg-12 mt-3" style={{ textAlign: "center" }}>
                                © 2015-2024 123admissions. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Aboutus;
