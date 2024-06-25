import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import axios from 'axios';



const FormModle = ({ success, setSuccess }) => {


    return (
        <Modal
            show={success}
            onHide={() => setSuccess(false)}
            className="p-5 formmodle"
        >
            <Modal.Body className="text-center formmodle_body">
                <p>We have received your form and will contact you shortly. Thank you!</p>
            </Modal.Body>
        </Modal>
    );
};



export default FormModle;
