import React from "react";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register-container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h1 className="reg-form-header">Register Form</h1>
            <p>
              Already have an account?
              <span className="click-to-register">
                <Link to="/login">Login</Link>
              </span>
            </p>
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
  );
};

export default Register;
