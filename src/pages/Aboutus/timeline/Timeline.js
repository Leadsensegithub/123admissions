import React, { useState, useEffect } from "react";
import './Timeline.css'

const fields = {
    title: "Yearly Horizontal Timeline",
    years_timeline: [
        {
            year: "MARCH 2015",
            body:
                "Incorporated, Created Adserver"
        },
        {
            body:
                "Real time bidding of advertisement",
            year: "FEBRUARY 2016"
        },
        {
            body:
                "Created CRM",
            year: "JANUARY 2018"
        },
        {
            body:
                "Created Ed tech platform",
            year: "MAY 2019"
        },
        {
            body:
                "Admission Partners with Liba Jain University, ",
            year: "SEPTEMBER 2020"
        },
        {
            body:
                "Online Manipal University, gold Gate University, Upgrad",
            year: "2021-2024"
        },

    ]
};

function Timeline() {
    const [yearSelected, setYearSelected] = useState(1999);
    const [keySelected, setKeySelected] = useState(0);
    const { title, years_timeline } = fields;

    const handleOnTimelineClick = (e, year, key) => {
        setYearSelected(year);
        setKeySelected(key);
    };

    useEffect(() => {
        setYearSelected(years_timeline[keySelected].year);
    }, [keySelected, years_timeline]);

    return (
        <div className="timemaon">
            <div className="yyyyyyyyyyyyyy">
                <div className="arrows">
                    <button
                        onClick={() => {
                            setKeySelected(
                                keySelected > 0
                                    ? keySelected - 1
                                    : years_timeline.length - 1
                            );
                        }}
                        aria-label="Left button"
                    >
                        ⬅
                    </button>
                </div>
                <div className="arrows">
                    <button
                        onClick={() => {
                            setKeySelected(
                                keySelected < years_timeline.length - 1
                                    ? keySelected + 1
                                    : 0
                            );
                        }}
                        aria-label="Right button"
                    >
                        ⮕
                    </button>
                </div>
            </div>
            <section className="wrapper">
                {/* <h2>{title}</h2> */}
                <div className="timeline">
                    <ul>
                        {years_timeline.map((item, key) => (
                            <li

                            >
                                <button
                                    onClick={(e) =>
                                        handleOnTimelineClick(e, item.year, key)
                                    }
                                    className={
                                        item.year === yearSelected ? "mm active" : "mm"
                                    }
                                    id={item.year}
                                >
                                    {item.year}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="panel">

                    <div className="content">
                        {years_timeline.map((item, key) => (
                            <div
                                key={key}
                                className={`tab ${yearSelected === item.year && "selected"
                                    }`}
                            >
                                <h4>{item.year}</h4>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Timeline;
