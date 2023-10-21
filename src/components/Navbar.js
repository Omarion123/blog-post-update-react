import React, { useState } from "react";
import MenuImage from "../components/svgs/menu.svg";
import XImage from "../components/svgs/x.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
import Login from "./Login";
const Navbar = () => {
  // Step 1: Create a state variable to manage menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Step 2: Define the handleClick function to toggle menu visibility
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="container">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearchengin} className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <h2 className="nameOfBanner">OMY-BLOGS</h2>
        <div className="icons">
          <FontAwesomeIcon className="iconfa" icon={faTwitter} />
          <FontAwesomeIcon className="iconfa" icon={faFacebook} />
          <FontAwesomeIcon className="iconfa" icon={faInstagram} />
        </div>
        <div className="menu-click">
          {/* <FontAwesomeIcon icon={faBars} className="menu-icon" />
        <AiOutlineClose className="close-icon" /> */}
          <img
            src={menuOpen ? XImage : MenuImage}
            alt={menuOpen ? "Close" : "Menu"}
            className={menuOpen ? "close" : "menu"}
            onClick={handleClick} // Step 3: Attach the handleClick function to the button
          />
        </div>
        <div className={`side-nav ${menuOpen ? "open" : "close"}`}>
          <div className="show-media">
            <h2 className="nameOfBanner-side">OMY-BLOGS</h2>
            <div className="icons-side">
              <FontAwesomeIcon className="iconfa" icon={faTwitter} />
              <FontAwesomeIcon className="iconfa" icon={faFacebook} />
              <FontAwesomeIcon className="iconfa" icon={faInstagram} />
            </div>
          </div>
          <div className="menus">
            <Link to="/" onClick={closeMenu}>
              <h2 className="home">Home</h2>
            </Link>
            <Link to="/aboutus" onClick={closeMenu}>
              <h2>About us</h2>
            </Link>
            <Link to="/contactus" onClick={closeMenu}>
              <h2>Contact us</h2>
            </Link>
            {/* <Link to="/Login" onClick={closeMenu}> */}
            {/* <Link
              to=""
              onClick={() => {
                setModalOpen(true);
                closeMenu();
              }}
            >
              <h2 className="login">LOGIN</h2>
            </Link> */}
            <button
              className="login-btn login-nav"
              onClick={() => {
                setModalOpen(true);
                closeMenu();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <Login setOpenModal={setModalOpen} />}
    </>
  );
};

export default Navbar;
