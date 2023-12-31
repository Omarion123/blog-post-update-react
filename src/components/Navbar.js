import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  const isDashboardPage = location.pathname === "/dashboard";
  const isAddBlogPage = location.pathname === "/addblog";
  const isHome = location.pathname === "/home";
  const isDashboardChart = location.pathname === "/dashboard-chart";
  // const isUpdate = location.pathname === "/update/:_id";
  const isUpdate = location.pathname.startsWith("/update/");
  const isBloglistUser = location.pathname.startsWith("/blogsUser/");
  const isUserRole = localStorage.getItem("role");
  useEffect(() => {
    console.log(isUserRole);
  }, [isUserRole]);
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
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  return (
    <>
      {/* <div className="container"> */}
      <div className={`container ${isLoginClicked ? "login-clicked" : ""}`}>
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

          {/* {!isDashboardPage && !isAddBlogPage && !isUpdate && ( */}
          {!(
            isDashboardPage ||
            isDashboardChart ||
            isAddBlogPage ||
            isUpdate ||
            isHome ||
            isBloglistUser ||
            isUserRole === "user"
          ) && (
            <div className="menus second-menu">
              <Link to="/" onClick={closeMenu}>
                <h2 className="home">Home</h2>
              </Link>
              <Link to="/aboutus" onClick={closeMenu}>
                <h2>About us</h2>
              </Link>
              <Link to="/contactus" onClick={closeMenu}>
                <h2>Contact us</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  setModalOpen(true);
                  closeMenu();
                  setIsLoginClicked(true);
                }}
              >
                Login
              </button>
            </div>
          )}

          {isUserRole === "user" && (
            <div className="menus third-menu">
              <Link to="/" onClick={closeMenu}>
                <h2 className="home">Home</h2>
              </Link>
              <Link to="/aboutus" onClick={closeMenu}>
                <h2>About us</h2>
              </Link>
              <Link to="/contactus" onClick={closeMenu}>
                <h2>Contact us</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  closeMenu();
                  history.push("/");
                  sessionStorage.clear();
                  localStorage.clear();
                  Toast.success("User Logged out successfully");
                }}
              >
                Logout
              </button>
            </div>
          )}

          {isAddBlogPage && (
            <div className="menus first-menu">
              <Link to="/dashboard" onClick={closeMenu}>
                <h2>Dashboard</h2>
              </Link>
              <Link to="/dashboard-chart" onClick={closeMenu}>
                <h2>Charts</h2>
              </Link>
              <Link to="/addblog" onClick={closeMenu}>
                <h2>Add blog</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  closeMenu();
                  history.push("/");
                  sessionStorage.clear();
                  localStorage.clear();
                  Toast.success("Admin Logged out successfully");
                }}
              >
                Logout
              </button>
            </div>
          )}
          {isDashboardPage && (
            <div className="menus first-menu">
              <Link to="/dashboard" onClick={closeMenu}>
                <h2>Dashboard</h2>
              </Link>
              <Link to="/dashboard-chart" onClick={closeMenu}>
                <h2>Charts</h2>
              </Link>
              <Link to="/addblog" onClick={closeMenu}>
                <h2>Add blog</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  closeMenu();
                  history.push("/");
                  sessionStorage.clear();
                  localStorage.clear();
                  Toast.success("Admin Logged out successfully");
                }}
              >
                Logout
              </button>
            </div>
          )}
          {isDashboardChart && (
            <div className="menus first-menu">
              <Link to="/dashboard" onClick={closeMenu}>
                <h2>Dashboard</h2>
              </Link>
              <Link to="/dashboard-chart" onClick={closeMenu}>
                <h2>Charts</h2>
              </Link>
              <Link to="/addblog" onClick={closeMenu}>
                <h2>Add blog</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  closeMenu();
                  history.push("/");
                  sessionStorage.clear();
                  localStorage.clear();
                  Toast.success("Admin Logged out successfully");
                }}
              >
                Logout
              </button>
            </div>
          )}
          {isUpdate && (
            <div className="menus first-menu">
              <Link to="/dashboard" onClick={closeMenu}>
                <h2>Dashboard</h2>
              </Link>
              <Link to="/dashboard-chart" onClick={closeMenu}>
                <h2>Charts</h2>
              </Link>
              <Link to="/addblog" onClick={closeMenu}>
                <h2>Add blog</h2>
              </Link>
              <button
                className="login-btn login-nav"
                onClick={() => {
                  closeMenu();
                  history.push("/");
                  localStorage.clear();
                  sessionStorage.clear();
                  Toast.success("Admin Logged out successfully");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <Login
          setOpenModal={setModalOpen}
          setIsLoginClicked={setIsLoginClicked}
        />
      )}
    </>
  );
};

export default Navbar;
