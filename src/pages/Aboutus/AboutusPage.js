import React, { useEffect, useState } from 'react';
import './AboutusPage.css';
import Assets from '../../assets/assets';
import Timeline from './timeline/Timeline';
import girl from '../../assets/Group 74.svg'
import Left from '../../assets/aboutus/Group 194.svg'
import rigth from '../../assets/aboutus/Group 195.svg'


function AboutusPage() {
    const cardData = [
        {
            className: 'g-card-3',
            text: '1Our track record speaks for itself. We measure our success by the success of our students, and we\'re proud of the achievements they\'ve made under our guidance.',
            name: 'Lena Oceretova',
            title: 'Academic Concealer, TN',
            imgSrc: girl,
        },
        {
            className: 'g-card',
            text: '2Our track record speaks for itself. We measure our success by the success of our students, and we\'re proud of the achievements they\'ve made under our guidance.',
            name: 'Lena Oceretova',
            title: 'Academic Concealer, TN',
            imgSrc: girl,
        },
        {
            className: 'g-card-2',
            text: '3Our track record speaks for itself. We measure our success by the success of our students, and we\'re proud of the achievements they\'ve made under our guidance.',
            name: 'Lena Oceretova',
            title: 'Academic Concealer, TN',
            imgSrc: girl,
        },
        {
            className: 'g-card-4',
            text: '4Our track record speaks for itself. We measure our success by the success of our students, and we\'re proud of the achievements they\'ve made under our guidance.',
            name: 'Lena Oceretova',
            title: 'Academic Concealer, TN',
            imgSrc: girl,
        },
        {
            className: 'g-card-5',
            text: '5Our track record speaks for itself. We measure our success by the success of our students, and we\'re proud of the achievements they\'ve made under our guidance.',
            name: 'Lena Oceretova',
            title: 'Academic Concealer, TN',
            imgSrc: girl,
        },
    ];
    const [startIndex, setStartIndex] = useState(0);

    const handleRightClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex + 3 < cardData.length ? prevIndex + 1 : prevIndex
        );
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const visibleClasses = [
        'g-card-3',
        'g-card',
        'g-card-2',
    ];

    return (
        <div className='aboutPage'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='aboutusvideo'>
                        <div className='row'>
                            <div className='col-lg-7'>
                                <div className='video'>
                                    <img src={Assets?.Video}></img>
                                </div>

                            </div>
                            <div className='col-lg-5' style={{ zIndex: "10" }}>
                                <div className='contetn-aboutus'>
                                    <h1>About<br></br>Us</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='missions'>
                                <h1>Our Mission 123Admissions</h1>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='conteent-card-about'>
                                <p>At 123Admissions, our mission is to empower students to achieve their academic and career aspirations by simplifying the admissions process for master's degree programs. We are dedicated to providing personalized guidance and support, ensuring that each student finds the best fit for their educational journey.</p>
                                <p>We take pride in our global partnerships, which allow us to place students in esteemed institutions both abroad and in their home country. Our extensive network of partner universities and colleges ensures that students have access to a wide range of opportunities, tailored to their unique goals and preferences.</p>
                                <h5>At 123Admissions, we believe in:</h5>
                                <p>Excellence: Striving for the highest standards in everything we do, from the quality of our services to the outcomes our students achieve.</p>
                                <p>Integrity: Conducting all our operations with honesty, transparency, and respect for all stakeholders.</p>
                                <p>Support: Providing comprehensive support at every step of the admissions process, from application to enrollment and beyond.</p>
                                <p>Global Reach: Leveraging our international partnerships to open doors to educational opportunities around the world.</p>
                                <p>Student Success: Focusing on the individual needs of each student, helping them to not only gain admission but to thrive in their chosen programs.</p>
                                <p>Join us at 123Admissions and take the first step towards a brighter future with a master's degree from a top-tier institution. Your success is our mission.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='OurJourney'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='our'>
                                    <h1>Our Journey</h1>
                                    <p>Since our founding 2015. And 123 admissions from initial consultation to post-admission assistance, we're committed to providing comprehensive support at every stage of your educational journey.</p>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                <Timeline />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='p-5'>
                        <div className='row'>
                            <div className='col-lg-12 mb-5'>
                                <div className='ipo'>
                                    <h1>Partnerships</h1>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='ipos'>
                                    <p>Coursera partners with more than 275 leading universities and companies
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
                </div>

                <div className='col-lg-12 mt-5'>
                    <div className='container' style={{ textAlign: "center" }}>

                        <h1>Students Say’s</h1>
                    </div>
                    <div className='fffff'>
                        <div className='arrow'>
                            <img src={Left} alt="Left arrow" onClick={handleLeftClick} />
                            <img src={rigth} alt="Right arrow" onClick={handleRightClick} />
                        </div>
                        {cardData.slice(startIndex, startIndex + 3).map((card, index) => (
                            <div key={index} className={visibleClasses[index]}>
                                <p>{card.text}</p>
                                <div style={{ textAlign: "center" }} className='mb-5'>
                                    <img src={card.imgSrc} alt={card.name} />
                                </div>
                                <p>{card.name}</p>
                                <p>{card.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='container'>
                        <div className='card-abpout'>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <h1 style={{ color: "white" }}>Collaborate with us to enhance your
                                        team's skills and capabilities.
                                    </h1>
                                </div>
                                <div className='col-lg-4'>
                                    <div style={{ textAlign: "center" }}>
                                        <button style={{ backgroundColor: "#F7C524", border: "none", borderRadius: "10px", padding: "10px", marginTop: "10%" }}>Learn more</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutusPage;
