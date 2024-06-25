import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Couses.css'

const Couses = () => {
    const [topcollege, settopcollege] = useState([
        {
            title: "Management"
        },
        {
            title: "Engineering"
        },
        {
            title: "Medials"
        },
        {
            title: "Science"
        },
        {
            title: "Arts"
        },
        {
            title: "Commerce"
        },
        {
            title: "Education"
        },
        {
            title: "Pharmacy"
        },
        {
            title: "Paramedicals"
        },

    ])
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        // Toggle active state by clicking on the item
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className="landingpage">
            <h1>Couses</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {topcollege.map((d, index) => (
                            <div
                                key={index}
                                className={`explore ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <span>{d?.title}</span>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body" style={{ padding: "30px 12%" }}>
                    <div className="row">
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/liba"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    > <img src="https://123admissions.com/assets/images/course/liba.jpg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>

                                </div>
                                <div>
                                    <button >Loyola Institute of Business</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/manipal"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >  <img src="https://123admissions.com/assets/images/course/manipal.jpg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>

                                </div>
                                <div>
                                    <button >Manipal University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/jain"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="	https://123admissions.com/assets/images/course/jain.jpg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>

                                </div>
                                <div>
                                    <button >Jain Online University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/ohio"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Ohio.jpg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Ohio Northern University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/mift"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/MIT.jpg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Massachusetts Institute</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="college-m">
                                <div>
                                    <NavLink
                                        to={"/college"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >
                                        <img src="https://123admissions.com/assets/images/course/Johnson%20&%20Wales.jpeg" style={{ width: "100%", height: "200px" }}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    <button >Johnson & Wales University</button>
                                </div>
                                <div className='tex'>
                                    Post Graduate Certificate in Data Science & AI (Executive)

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Couses;
