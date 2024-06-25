import React, { useEffect, useRef, useState } from "react";
import './BApayment.css';
import BA from '../../assets/UniversityLogo/Bharathidasa-01.png';
import IntlTelInput from "react-intl-tel-input";
import 'react-intl-tel-input/dist/main.css';

const AUpayment = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: false, // Set to false to hide the flag
            });
        }
    }, []);
    const [value, setvalue] = useState({
        name: "",
        email: "",
        number: ""
    })
    const [error, setError] = useState({})

    const handlePayment = async () => {
        const valid = validate()
        console.log('validate', valid)
        if (valid == true) {

            let data = new FormData();
            data.append('contact', value?.number);
            data.append('name', value?.name);
            data.append('email', value?.email);
            data.append('cou', 'AN');
            data.append('id', '98');

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.123admissions.com/api/v1/formall',

                data: data
            };

            const res = await fetch('https://api.123admissions.com/api/v1/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any headers your backend requires, like authorization token, etc.
                },
                body: JSON.stringify({
                    // Add any payload required by your backend for creating the order
                }),
            });

            const order = await res.json();
            const options = {
                key: 'rzp_live_03ijsdCrvMvOp9', // Replace with your actual Razorpay API key
                amount: order.amount,
                currency: order.currency,
                name: 'Andhra University',
                description: 'Purchase Description',
                image: 'https://api.123admissions.com/uploads/UniversityLogo/bharathidasan-university.png',
                order_id: order.id,
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    // Handle payment success
                },
                prefill: {
                    name: value?.name,
                    email: value?.email,
                    contact: value?.number,
                },
                notes: {
                    address: 'Customer Address',
                },
                theme: {
                    color: '#1EA698',
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

            console.log(rzp)
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setvalue(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const validate = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            number: ''
        };

        if (value.name.trim() === '') {
            newErrors.name = 'Please enter a name';
            isValid = false;
        }

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (value.email === '') {
            newErrors.email = 'Please enter an email address.';
            isValid = false;
        } else if (!value.email.match(validRegex)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        } else {
            newErrors.email = '';
            isValid = true;
        }


        if (value.number.trim() === '') {
            newErrors.number = 'Please enter a number';
            isValid = false;
        }

        setError(newErrors);

        return isValid;
    };

    return (
        <>
            <div className="AUpaymentmain">
                <h3>Secure payment page (Bharathidasan University)</h3>
                <div className="AUpayment">
                    <div className="payment-ui">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <img src={BA} alt="AN Logo" />
                            </div>
                            <div className="col-lg-12 col-12 mt-3">
                                <input className="form-control" placeholder="Enter you name" name="name" onChange={handleChange}></input>
                                <small style={{ color: "red", display: "flex" }}>{error?.name}</small>
                            </div>
                            <div className="col-lg-12 col-12 mt-3">
                                <input className="form-control" placeholder="Enter you Email" name='email' onChange={handleChange}></input>
                                <small style={{ color: "red", display: "flex" }}>{error?.email}</small>
                            </div>
                            <div className="col-lg-12 col-12 mt-3 mb-4">
                                <IntlTelInput
                                    inputProps={{ id: '91', name: 'india', ref: inputRef }}
                                    defaultCountry="in"
                                    onPhoneNumberChange={(isValid, value, countryData, number) => {
                                        setvalue(prevState => ({
                                            ...prevState,
                                            ['number']: value
                                        }));
                                    }}
                                    required
                                />
                                <small style={{ color: "red", display: "flex" }}>{error?.number}</small>
                            </div>
                            <div className="col-lg-12 col-12" style={{ textAlign: "center" }}>
                                <button onClick={handlePayment} className="payment-button">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 style={{ marginTop: "0px" }} className="h2tag">Now your are Paying for Bharathidasan University</h3>
            </div>
        </>
    );
};

export default AUpayment;
