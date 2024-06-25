import React, { useEffect, useState } from "react";
import AppContent from "../components/AppContent";
import AppHeader from "../components/appHeader/AppHeader";
import AppSidebar from "../components/appSidebar/AppSidebar";
import Aboutus from "../components/aboutus/Aboutus";

import bot from '../assets/bot/Group.svg'
import Whatapps from '../assets/bot/whatapp.svg'
import { FiPhoneCall } from "react-icons/fi";
import './De.css'
import Loader from "../components/Loader/loader";
const DefaultLayout = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const openWhatsApp = () => {
    const phoneNumber = '919940762388'; // Replace with the phone number you want to open
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  const openCall = () => {
    const phoneNumber = '919940762388'; // Replace with the phone number you want to call
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl);
  };
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Set success to true after 10 seconds (10000 milliseconds)
  //   const timer = setTimeout(() => {
  //     setLoading(true);
  //   }, 10000);

  //   // Cleanup the timer if the component is unmounted before 10 seconds
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      {
        loading ?
          <div className="App">

            < AppHeader setMenuToggle={setMenuToggle} />
            <div className="wrapper" style={{ overflow: "scroll" }}>

              <div className="body">

                <AppContent />

                <div className="distop whatappp" style={{
                  width: "100%",


                }}>

                  <img
                    src={Whatapps}
                    style={{
                      width: "70px",
                      position: "fixed",
                      zIndex: "1000",
                      display: "inline-block",
                      bottom: "0",
                      right: "0",
                      marginBottom: "20px",
                      marginRight: "20px",
                      cursor: "pointer",
                      animation: "heartbeat 1s infinite",
                    }}
                    alt="WhatsApp Icon"
                    onClick={openWhatsApp}
                  />




                </div>
                <div className="mobile" style={{
                  width: "100%",
                  position: "fixed",
                  zIndex: "1000",
                  // display: "inline-block",
                  bottom: "0",
                  left: "0",
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: "white"

                }}>
                  <div className="row">
                    <div className="col-6">
                      <button className="btn" style={{ backgroundColor: "white", width: "100%", border: "1px solid black", display: "flex", justifyContent: "center" }}
                        onClick={openCall}
                      ><div style={{ marginRight: "5px" }}><FiPhoneCall /></div>  Call Us</button>
                    </div>
                    <div className="col-6">
                      <button className="btn" style={{ backgroundColor: "var(--green1)", color: "white", width: "100%" }}
                        onClick={openWhatsApp}
                      ><img src={Whatapps} style={{ width: "20px", marginRight: "10px", animation: "heartbeat 1s infinite", }} ></img>Live Chat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Aboutus />
            </div>
          </div > : <Loader />
      }
    </>
  );
};

export default DefaultLayout;
