import React, { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import "./SignUp.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Assets from "../../assets/assets";
import Select from 'react-select';
import FormModle from "../FromModle/FormModle";


const SignUp = () => {
    const [success, setSuccess] = useState(false)
    console.log(success)
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: true, // Set to false to hide the flag
            });
        }
    }, []);
    const navigator = useNavigate()
    const navigate = () => {
        navigator('/')
    }
    const options = [
        { value: 'BA', label: 'BA' },
        { value: 'BBA', label: 'BBA' },
        { value: 'BCA', label: 'BCA' },
        { value: 'B.Com', label: 'B.Com' },
        { value: 'MBA', label: 'MBA' },
        { value: 'MCA', label: 'MCA' },
        { value: 'M.Com', label: 'M.Com' },
        { value: 'MA.JMC', label: 'MA.JMC' },
        { value: 'MA English', label: 'MA English' },
        { value: 'MA Sociology', label: 'MA Sociology' },
        { value: 'MA Political Science', label: 'MA Political Science' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };
    const handleonclick = () => {
        setSuccess(true)
    }
    return (
        <>
            <div className="signupPage">
                <div className="row">
                    <div className="col-lg-12 col-12 mb-3">
                        <div onClick={navigate} className="hjjhjjhhjhh" style={{ textAlign: "start", color: "#545454" }}><FaAngleLeft />   <img src={Assets?.Logo} style={{ width: "17%" }}></img></div>
                    </div>
                </div>
                <div className="padding">
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-3 ">
                            <h5 style={{ textAlign: "start", fontSize: "19px" }}>Welcome! Sign up or Login</h5>
                        </div>

                        <div className="col-lg-12 mt-4">
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                required
                                placeholder={'Seclect courses'}
                            />
                        </div>

                        <div className="col-lg-12 col-12 mt-5 ">
                            <button className="btn btn-primary w-100" onClick={() => setSuccess(!success)}>Continue</button>
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

export default SignUp;
