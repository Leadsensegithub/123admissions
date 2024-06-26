import React, { useEffect, useRef, useState } from 'react';
import './sample.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from '../assets/aboutus/Group 194.svg'
import rigth from '../assets/aboutus/Group 195.svg'
import img1 from '../assets/image 16.svg'
import img2 from '../assets/image 17.svg'
import img3 from '../assets/image 18.svg'
import img4 from '../assets/image 19.svg'
import img5 from '../assets/image 20.svg'
import img6 from '../assets/image 21.svg'
import imagecard1 from '../assets/seo_9955833 1.svg'
import imagecard2 from '../assets/briefcase_9527218 1.png'
import imagecard3 from '../assets/question_8427799 1.svg'
import imagecard4 from '../assets/structure_7286844 1.svg'
import pro1 from '../assets/image 40.svg'
import pro2 from '../assets/image 44.svg'
import pro3 from '../assets/image 45.svg'
import pro4 from '../assets/image 48.svg'
import pro5 from '../assets/image 49.svg'
import pro6 from '../assets/image 50.svg'
import pro7 from '../assets/image 51.svg'
import pro8 from '../assets/image 52.svg'
import downloadwhite from '../assets/downloadwhite.svg'
import Group1 from '../assets/Group 74.svg'
import Group2 from '../assets/Group 75.svg'
import Group3 from '../assets/Group 77.svg'
import FormModle from '../components/FromModle/FormModle';
import axios from 'axios';

function Sample() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerRef = useRef(null);
  const [success, setSuccess] = useState(false)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 245; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 245; // Adjust the scroll distance as needed
    }
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
  const [course, setcourse] = useState([])




  const fetchData = async () => {
    try {
      const id = sessionStorage.getItem('courses')
      const response = await axios.get(`https://api.123admissions.com/api/v1/getcourses?id=${id}`, {

      });
      setcourse(response?.data?.data?.university)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();

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
  return (
    <div className='sample'>
      <div className='sample-header'>
        <div className='row'>
          <div className='col-lg-6' style={{ marginTop: "6%" }}>
            <div className='img-content'>
              <div className='img-body'>
                <img src={'https://api.123admissions.com' + course[0]?.uploadUniversityLogo} style={{ width: "100%" }}></img>
              </div>
            </div>
          </div>
          <div className='col-lg-6' style={{ marginTop: "4%", paddingBottom: "40px" }}>
            <div>
              <h3 style={{ color: "white" }}>Advanced Certificate in Management by {course[0]?.universityName}</h3>
              <p style={{ width: "80%", color: "white" }}>Get certified by one of top 21 Indian B-Schools to be accredited by AACSB, the American gold standard of quality education. Learn the fundamentals of management and deep-dive into a domain to build expertise and grow in your career. Learners can choose any one certification of their choice.Start upskilling at just Rs.5833 per month.</p>
              <div className='bh'>
                <div className='a'>
                  <button className='btn btn-primary' onClick={() => setSuccess(true)}>Apply Now</button>
                </div>
                <div className='s'>
                  <button className='btn btn-primary' onClick={() => setSuccess(true)}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='container complex'>
              <div className='u d-flex'>
                <div className='d'>

                  <div className='d-body'>
                    <div className='row'>
                      <div className='col-sm-12 we'>
                        {course[0]?.courseName}
                      </div>
                      <div className='col-sm-12 wc'>
                        1 of top 21 Indian B-Schools
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d'>
                  <div className='d-body'>
                    <div className='row'>
                      <div className='col-sm-12 we'>
                        3 Certifications available
                      </div>
                      <div className='col-sm-12 wc'>
                        Marketing, Operations, IT
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d'>

                  <div className='d-body'>
                    <div className='row'>
                      <div className='col-sm-12 we'>
                        {course[0]?.noOfYears} Months
                      </div>
                      <div className='col-sm-12 wc'>
                        Self-paced Program
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d'>

                  <div className='d-body'>
                    <div className='row'>
                      <div className='col-sm-12 we'>
                        Start Date
                      </div>
                      <div className='col-sm-12 wc'>
                        Start immediately after Enrollment
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d'>

                  <div className='d-body'>
                    <div className='row'>
                      <div className='col-sm-12 we'>
                        Any Bachelor's Degree
                      </div>
                      <div className='col-sm-12 wc'>
                        Eligibility Criteria
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='program'>

            <div>

              <ul style={{ listStyleType: "none", padding: 0, marginTop: "0%", width: "100%" }}>
                <li style={{ marginTop: "10px" }}>
                  <h3 style={{ marginBottom: "10%" }}>Programme Overview</h3>
                </li>
                <li style={{ marginTop: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={img1}></img>Certificate from {course[0]?.universityName} in association with 123Admissions
                </li>
                <li style={{ marginTop: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={img2}></img>Core Management Courses + Deep-Dive into specialisation
                </li>
                <li style={{ marginTop: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={img3}></img>100% flexibility through recorded content
                </li>
                <li style={{ marginTop: "20px" }} >
                  <img style={{ marginRight: "10px" }} src={img4}></img>3 Certification Options {course[0]?.courseName}
                </li>
                <li style={{ marginTop: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={img5}></img>AACSB Accredited B-School
                </li>
                <li style={{ marginTop: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={img6}></img>Instant program start after payment
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row vb'>
                      <div className='col-lg-12'>
                        <img src={imagecard1}></img>
                      </div>
                      <div className='col-lg-12'>
                        <h3>Top Skills You Will Learn</h3>
                        <p style={{ marginBottom: "0px" }}>Core management skills along with a deep-dive into the certification area available - Marketing, Operations and IT.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row vb'>
                      <div className='col-lg-12'>
                        <img src={imagecard2}></img>
                      </div>
                      <div className='col-lg-12'>
                        <h3>Job Opportunities</h3>
                        <p style={{ marginBottom: "0px" }}>Marketing Manager, Digital Marketing, IT Managers, Operations Managers, Supply Chain Managers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row vb'>
                      <div className='col-lg-12'>
                        <img src={imagecard3}></img>
                      </div>
                      <div className='col-lg-12'>
                        <h3>Who is this Program For?</h3>
                        <p style={{ marginBottom: "0px" }} >- Professionals looking to upskill themselves in marketing, operations or IT management through a certification from a reputed Indian institute.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row vb'>
                      <div className='col-lg-12'>
                        <img src={imagecard4}></img>
                      </div>
                      <div className='col-lg-12'>
                        <h3>Minimum Eligibility</h3>
                        <p style={{ marginBottom: "0px" }}>Core management skills along with a deep-dive into the certification area available - Marketing, Operations and IT.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 mt-4'>
                <div className=''>
                  <h1>Instructors</h1>
                </div>
              </div>
              <div className='col-lg-12 mt-4'>
                <Slider {...settings}>
                  {profes.map((d, index) => (<div className='c-pro'>
                    <div className='row' style={{ backgroundColor: "white", margin: "10px", padding: "10px", borderRadius: "20px", boxShadow: "6px 6px 12px 0px #00000021" }}>
                      <div className='col-sm-3'>
                        <img src={d?.Img}></img>
                      </div>
                      <div className='col-sm-6'>
                        <span>{d?.name}</span><br></br>
                        <small>Pro :{course[0]?.universityName}</small>
                      </div>
                      <div className='col-sm-3'>
                        <img src={'https://api.123admissions.com' + course[0]?.uploadUniversityLogo} style={{ width: "100%" }}></img>
                      </div>
                    </div>

                  </div>))}

                </Slider>
              </div>
              <div className='col-lg-12'>
                <div className='last'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h3>Core Courses List</h3>
                    </div>
                    <div className='col-lg-12'>
                      <p>Best-in-class content by leading faculty and industry leaders in the form of videos, cases and projects, assignments and live session</p>
                      <p>Curriculum is subject to change basis validation from Faculty and industry experts*</p>
                    </div>
                    <div className='col-lg-3'>
                      <div className='c-last'>
                        <p style={{ marginBottom: "0px" }}>5</p>
                        <p >Months</p>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='c-last'>
                        <p style={{ marginBottom: "0px" }}>500+</p>
                        <p>Hours of Teaching</p>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='c-last'>
                        <p style={{ marginBottom: "0px" }}>7</p>
                        <p>Course Projects</p>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='c-last'>
                        <p style={{ marginBottom: "0px" }}>3</p>
                        <p>Certification Choices</p>
                      </div>
                    </div>
                    <div className='col-sm-12 mt-4'>
                      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <button className='btn btn-primary' onClick={() => setSuccess(true)}><img src={downloadwhite} style={{ width: "20px", height: "100%", marginRight: "10px" }}></img>DOWLNLOAD BROCHURE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='admis'>
                  <div className='row'>
                    <div className='col-lg-12'>

                      <h3>Admission Process</h3>
                      <p>Please find below the detailed steps to be followed as a part of the admission process.</p>
                    </div>
                    <div className='col-lg-4'>
                      <div className='c-admis'>
                        <img src={Group1} className='uyu'></img>
                        <div className='row'>
                          <div className='col-sm-12' style={{ marginTop: "19px" }}>
                            <b>1.Complete the Application</b>
                          </div>
                          <div className='col-sm-12'>
                            <p>Apply by filling a simple application form</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='c-admis'>
                        <img src={Group2} className='uyu'></img>
                        <div className='row'>
                          <div className='col-sm-12' style={{ marginTop: "19px" }}>
                            <b>2.Get shortlisted and receive
                              the offer letter</b>
                          </div>
                          <div className='col-sm-12'>
                            <p>Candidates will be shortlisted based on
                              their applcation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4' >
                      <div className='c-admis'>
                        <img src={Group3} className='uyu'></img>
                        <div className='row'>
                          <div className='col-sm-12' style={{ marginTop: "19px" }}>
                            <b>3.Block your seat and completed the payment</b>
                          </div>
                          <div className='col-sm-12'>
                            <p>An offer letter will be sent to select candidates. Pay the admission fee to block your seat and start the program.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12 mt-5' style={{ textAlign: "center" }}>
                      <button className='btn btn-primary' style={{ width: "200px", height: "50px", backgroundColor: "#68AEFF" }} onClick={() => setSuccess(true)}>APPLY</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <FormModle
        success={success}
        setSuccess={setSuccess}
      ></FormModle>
    </div>
  );
}

export default Sample;
