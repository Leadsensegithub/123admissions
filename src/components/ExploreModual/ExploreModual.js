import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./ExploreModual.css";
import IconBox from '../../assets/images.png'
import { useNavigate } from "react-router-dom";
import Assets from "../../assets/assets";
import download from "../../assets/downloadwhite.svg";
import { IoLocationSharp } from "react-icons/io5";

const ExploreModual = ({ setToggle, FromData, setfilter, fetchData }) => {

    const CausesData = [
        {
            CauseTile: "India",

        },
        {
            CauseTile: "US",

        },
        {
            CauseTile: "Germany",

        },
        {
            CauseTile: "France",

        },
        {
            CauseTile: "Canada",

        },
        {
            CauseTile: "Finland",

        },

    ]
    const containerRef = useRef(null);
    const [activeCause, setActiveCause] = useState(null);
    const [active, setActive] = useState(0);

    const handleClickCause = (cause) => {
        setActiveCause(cause);
        setActive(null); // Reset active  when cause is clicked
    };
    const navigate = useNavigate()
    const handleClick = (e, index) => {
        setActive(index)
        const name = e.target.getAttribute('name');
        setfilter(name)

        // fetchData()

    };
    const NavigateUniversity = (url, id) => {
        // window.open("/sample", "_blank");

        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('university', id);
        window.open(`${url}`, "_blank");
        setToggle(false);
    };
    const OnclickNavigate = (url, id) => {
        // console.log("id", id)
        const decodedUrl = decodeURIComponent(url);
        const cleanedUrl = decodedUrl.replace(/[%0-9\s]+/g, '-');
        sessionStorage.setItem('courses', id);
        window.open(`/sample?${cleanedUrl}`, "_blank");
    }






    return (
        <div className="exploremodual-app-header"
            ref={containerRef}
        >
            <div className="row">
                <div className="col-lg-3 bss">
                    {CausesData.map((deviations, index) => {

                        return (
                            <div key={index} className="col-lg-12">
                                <div className={index == active ? "app-button active" : "app-button "} name={deviations?.CauseTile} onClick={(e) => handleClick(e, index)}>{deviations?.CauseTile}</div>
                                <hr></hr>
                            </div>
                        )
                    })}

                </div>
                <div className="col-lg-8 hhj">
                    <div className="univercity">
                        <div className="row">
                            {FromData?.map((uni, index) => (
                                <div key={index} className="col-lg-12">

                                    <div className="app-button-unis">
                                        <img src={'https://api.123admissions.com' + uni?.uploadPathcollegeImage} style={{ width: "30%" }}></img>
                                        <div className="university-content-ex">
                                            <p style={{ fontSize: "1vw", margin: "0px" }}>{uni?.universityName}</p>

                                            <div className="btn-y">
                                                <div>
                                                    <IoLocationSharp />
                                                    {uni?.location}<br></br>
                                                    <small>MBA in Data Science</small><br></br>
                                                    <small>MSc Data Engineering</small><br></br>
                                                    <div
                                                        style={{ cursor: "pointer", color: "#9E9E9E" }}
                                                        onClick={() => NavigateUniversity(uni?.url, uni?.id)}
                                                    >
                                                        view all
                                                    </div>

                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ExploreModual;
