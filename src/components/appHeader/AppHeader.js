import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./AppHeader.css";
import IconBox from '../../assets/images.png'
import { useNavigate } from "react-router-dom";
import ExploreModual from "../ExploreModual/ExploreModual";
import axios from "axios";


import Assets from "../../assets/assets";
import ExploreMobile from "../ExploreMobile/ExploreMobile";
import { BsPerson } from "react-icons/bs";
import icon from '../../assets/icon/Vector.svg'
const AppHeader = ({ setMenuToggle }) => {
  const [toggle, setToggle] = useState(false)
  const [toggleVeri, setToggleVeri] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [FromData, setFromdata] = useState([]);
  const [Filter, setfilter] = useState('India');
  const [searchData, setSearchData] = useState([])
  const [MobileToggle, setMobileToggle] = useState(false)

  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const handleCheckboxChange = () => {
    navigate('/sample')
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.123admissions.com/api/v1/getalluniversity?Key=${Filter}&type=1`, {

      });
      setFromdata(response?.data?.data?.university)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const search = async () => {
      try {
        const response = await axios.get(`https://api.123admissions.com/api/v1/getalluniversity?search=${event.target.value}`, {

        });
        setSearchData(response?.data?.data?.university)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    search()
  };


  useEffect(() => {
    fetchData();

  }, [Filter]);
  const HomePage = () => {
    navigate('/')
  }
  const navigatesignup = () => {
    navigate('/signup')
  }
  const MenuPage = () => {
    navigate('/menu')
  }
  return (
    <>
      <div className={`user-app-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="row">
          <div className="col-2">
            <div className="logo"
            >
              <img src={Assets?.Logo}
                style={{
                  cursor: "pointer"
                }}
                onClick={HomePage}
              ></img>
            </div>
          </div>
          <div className="col-2">

            <div className="explore-mores mt-1">
              <button className="btn event_explore_more"


                onClick={() => setToggle(!toggle)}>Explore More </button>
              {toggle ? <div

              >

                <ExploreModual
                  setToggle={setToggle}
                  FromData={FromData}
                  setfilter={setfilter}
                  fetchData={fetchData}
                  Filter={Filter}
                />
              </div> : ""}
            </div>

          </div>
          <div className="col-4">

            <div className="search-input mt-1">
              <input type="search" class="form-control" value={searchTerm}
                onChange={handleSearchChange} placeholder="Search"></input>
              <img src={Assets?.Search_input}></img>
            </div>
            {/* <div style={{ position: "absolute", width: "40%", marginTop: "20px" }}>
              <div className="card">
                <div className="card-body">
                  {searchData.map((d) => (<p>{d?.universityName}</p>))}
                </div>
              </div>
            </div> */}

          </div>
          <div className="col-2">
            <div className="icon-box mt-1">
              <button className="btn event_study_abroad" onClick={() => handleCheckboxChange()}>Study Abroad</button>
            </div>
          </div>
          <div className="col-2">
            <div className="signup mt-1">
              <button className="btn event_sign_up">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Mobile">
        <div className="row">
          <div className="col-1">
            <div className="icon"
              onClick={MenuPage}
            >☰</div>
          </div>
          <div className="col-4">
            <div style={{ marginLeft: "5px" }}>
              <img src={Assets?.Logo} style={{ width: "55%" }} onClick={HomePage}></img>
            </div>
          </div>
          <div className="col-5">
            <button className="btn event_explore_more"


              onClick={() => setToggle(!toggle)}>Explore More</button>


          </div>
          <div className="col-2">
            <img src={icon} style={{ width: "58%", marginTop: "11px" }} onClick={navigatesignup}></img>
          </div>
        </div>
        <div className="row">
          {toggle ? <div

          >
            <ExploreMobile
              setToggle={setToggle}
              FromData={FromData}
              setfilter={setfilter}
              fetchData={fetchData}
              Filter={Filter}
            />
          </div> : ""}
        </div>

      </div>
    </>
  );
};

export default AppHeader;
