import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
const Login = ({ setOpenModal }) => {
  const [registerActive, setRegisterActive] = useState(false);
  const [loginActive, setLoginActive] = useState(true);
  const [forgotActive, setForgotActive] = useState(false);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {loginActive && (
          <div className="login-container">
            <div className="login-form">
              <div className="login-header">
                <h1>Login Form</h1>
                {/* <span>New to OMY-BLOGS </span> */}
                <p>
                  <span className="click-to-register">
                    {/* <Link
                      nClick={() => {
                        setRegisterActive(true);
                        setLoginActive(false);
                      }}
                    >
                      Register
                    </Link> */}
                    <button
                      className="login-btn reg-btn"
                      onClick={() => {
                        setRegisterActive(true);
                        setLoginActive(false);
                      }}
                    >
                      Register
                    </button>
                  </span>
                </p>
                <button
                  className="cancelBtn"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="login-username">
                <input
                  type="text"
                  placeholder="Enter username..."
                  className="username-focus"
                />
              </div>
              <div className="login-password">
                <input type="password" placeholder="Enter password..." />
                <BiSolidHide className="login-password-hide-icon" />
              </div>
              <div className="forgot-password">
                {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                <button
                  className="forgot-btn"
                  onClick={() => {
                    setRegisterActive(false);
                    setLoginActive(false);
                    setForgotActive(true);
                  }}
                >
                  Forgot Password?
                </button>
              </div>
              <div
                className="login-button"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <Link to="/dashboard">
                  <h1>Login</h1>
                </Link>
              </div>
            </div>
          </div>
        )}
        {registerActive && (
          <div className="register-container">
            <div className="login-container">
              <div className="login-form">
                <div className="login-header">
                  <h1 className="reg-form-header">Register Form</h1>
                  <p>Already have an account?</p>
                  <span className="click-to-register">
                    {/* <Link to="/login">Login</Link> */}
                    <button
                      className="login-btn"
                      onClick={() => {
                        setRegisterActive(false);
                        setForgotActive(false);
                        setLoginActive(true);
                      }}
                    >
                      Login
                    </button>
                  </span>
                </div>
                <div className="login-username">
                  <input
                    type="text"
                    placeholder="Enter first name..."
                    className="username-focus"
                  />
                </div>
                <div className="login-username">
                  <input
                    type="text"
                    placeholder="Enter last name..."
                    className="username-focus"
                  />
                </div>
                <div className="login-username">
                  <input
                    type="text"
                    placeholder="Enter username..."
                    className="username-focus"
                  />
                </div>
                <div className="login-password">
                  <input type="password" placeholder="Enter password..." />
                  <BiSolidHide className="login-password-hide-icon" />
                </div>
                <div className="login-button register-button">
                  <h1>Register Now</h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {forgotActive && (
          <div className="register-container">
            <div className="login-container">
              <div className="login-form">
                <div className="login-header">
                  <h1 className="reg-form-header">Forgot password</h1>
                  {/* <p>
                  Already have an account? */}
                  {/* <span className="click-to-register">
                    <Link to="/login">Login</Link>
                  </span> */}
                  <button
                    className="login-btn"
                    onClick={() => {
                      setRegisterActive(false);
                      setForgotActive(false);
                      setLoginActive(true);
                    }}
                  >
                    Login
                  </button>
                  {/* </p> */}
                </div>
                <div className="login-username">
                  <input
                    type="text"
                    placeholder="Username..."
                    className="username-focus"
                  />
                </div>
                <div className="login-password">
                  <input type="password" placeholder="New Password..." />
                  <BiSolidHide className="login-password-hide-icon" />
                </div>
                <div className="login-password">
                  <input type="password" placeholder="Confirm Password..." />
                  <BiSolidHide className="login-password-hide-icon" />
                </div>
                <div className="login-button register-button">
                  <h1>Update password</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
