import React from "react";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
const Forgotpassword = () => {
  return (
    <div className="register-container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h1 className="reg-form-header">Forgot password</h1>
            {/* <p>
              Already have an account? */}
            <span className="click-to-register">
              <Link to="/login">Login</Link>
            </span>
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
  );
};

export default Forgotpassword;
