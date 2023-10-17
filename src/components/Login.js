import React from "react";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h1>Login Form</h1>
          <p>
            New to <span>OMY-BLOGS </span>
            <span className="click-to-register">
              <Link to="/register">Register</Link>
            </span>
          </p>
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
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="login-button">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
