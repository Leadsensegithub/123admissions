import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./appAdminSidebar.css";
import axios from "../../axios/axios";

import moment from "moment";


const AppSidebar = ({ menuToggle, setMenuToggle }) => {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [iconToggle, seticonToggle] = useState(true);

  const date = new Date();



  const [open, setOpen] = useState();


  const sideMenu = (index) => {
    console.log("You have", index);

    setDropdownMenu(open != index ? true : !dropdownMenu);
    setOpen(index);
  };

  const Array = [
    {
      Title: "Dashboard",
      NavLink: "/dashboard"
    },
    {
      Title: "College Details",
      NavLink: "/universityList"
    },
    {
      Title: "Admission Form",
      NavLink: "/admission"
    },
    {
      Title: "Adv Banners",
      NavLink: "/banner"
    },
    {
      Title: "Student Placed",
      NavLink: "/student"
    },
    {
      Title: "Website Theme",
      NavLink: "/theme"
    },
    {
      Title: "Aboutus content",
      NavLink: "/aboutus"
    },
    {
      Title: "University preview",
      NavLink: "/preview"
    },
    {
      Title: "Website preview",
      NavLink: "/WebsitePreview"
    },
  ]

  return (
    <>
      <div className="app-admin-sidebar"
        style={{ width: "270px" }}
      >
        {Array?.map((d, index) => (<div>
          <NavLink
            to={d?.NavLink}
            className="mr-2 ml-2"
            activeclassName="active"
          >
            <div className="">{d?.Title}</div>
          </NavLink>
        </div>))}

      </div>
    </>
  );
};

export default AppSidebar;
