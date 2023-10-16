import React, { useState } from "react";
import MenuImage from "../components/svgs/menu.svg";
import XImage from "../components/svgs/x.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { ReactComponent as Close } from "./icons/9110796_x_icon.svg";
// import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  // Step 1: Create a state variable to manage menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  // Step 2: Define the handleClick function to toggle menu visibility
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearchengin} className="icon" />
        <input type="text" placeholder="Search..." style={{ color: "white" }} />
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
        {/* <div className="menus">
          <Link to="/">
            <h2 className="home">Home</h2>
          </Link>
          <Link to="/aboutus">
            <h2>About us</h2>
          </Link>
          <Link to="/contactus">
            <h2>Contact us</h2>
          </Link>
          <Link to="/Login">
            <h2 className="login">LOGIN</h2>
          </Link>
        </div> */}
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
          <Link to="/single-blog" onClick={closeMenu}>
            <h2>Single blog</h2>
          </Link>
          <Link to="/dashboard" onClick={closeMenu}>
            <h2>Dashboard</h2>
          </Link>
          <Link to="/addblog" onClick={closeMenu}>
            <h2>Add item</h2>
          </Link>
          <Link to="/Login" onClick={closeMenu}>
            <h2 className="login">LOGIN</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
