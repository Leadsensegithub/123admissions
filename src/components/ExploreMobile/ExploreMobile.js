import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./ExploreMobile.css";
import IconBox from '../../assets/images.png'
import { useNavigate } from "react-router-dom";
import Assets from "../../assets/assets";
import download from "../../assets/downloadwhite.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";

const ExploreMobile = ({ setToggle, FromData, setfilter, fetchData }) => {
    const [goggle, setgoggle] = useState(true)
    console.log(FromData)

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
        setgoggle(false)

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





    return (
        <div
            className="exploremobile"
            ref={containerRef}
        >

            <div className="row">
                {goggle ? <div className="col-lg-12 bss">
                    {CausesData.map((deviations, index) => {

                        return (
                            <div key={index} className="col-lg-12">
                                <div className={index == active ? "app-button" : "app-button "} name={deviations?.CauseTile} onClick={(e) => handleClick(e, index)}>{deviations?.CauseTile}</div>

                            </div>
                        )
                    })}

                </div> : <></>}
                {goggle ? <></> : <div className="col-lg-12">
                    <div
                        onClick={() => setgoggle(!goggle)}
                    >
                        <div><FaAngleLeft style={{ marginTop: "-5px" }} /><b style={{ marginTop: "2px" }}>Back</b> </div>
                    </div>
                    <div className="">
                        <div className="row" style={{ overflowY: "scroll", zIndex: "33" }}>
                            {FromData?.map((uni, index) => (
                                <div key={index} className="col-lg-12">

                                    <div className="app-button-unis">
                                        <div className="row">

                                            <div className="col-12">
                                                <div className="university-content-ex">
                                                    <p style={{ fontSize: "20px", margin: "0px" }}>{uni?.universityName}</p>

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
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>

                </div>}

            </div>
        </div >
    );
};

export default ExploreMobile;
