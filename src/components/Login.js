import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import Toast from "react-hot-toast";
import { Animated } from "react-animated-css";

const Login = ({ setOpenModal, setIsLoginClicked }) => {
  const history = useHistory();
  const [loginActive, setLoginActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);
  const [forgotActive, setForgotActive] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIspending] = useState(false);
  const [profile, setProfile] = useState(null);
  // console.log(profile);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Create a data object with the user's email and password
      const data = {
        email,
        password,
      };

      try {
        setIspending(true);
        const response = await fetch(
          "https://lastlast.onrender.com/api/users/signIn/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData.data.fname);
          // TODO: to set image in the localstorage and retrieve them in singlepost
          localStorage.setItem("username", responseData.data.firstname);
          localStorage.setItem("profile", responseData.data.profile);
          // Assuming the response includes a token, you can save it to a secure location, such as localStorage.
          localStorage.setItem("token", responseData.token);
          localStorage.setItem("role", responseData.data.role);
          let role = localStorage.getItem("role");
          if (role === "admin") {
            // Redirect to a new page or perform any other action for a successful login.
            setEmail("");
            setPassword("");
            Toast.success("Admin Login successful");
            history.push("/dashboard");
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("password", password);
            setOpenModal(false);
            setIsLoginClicked(false);
            setIspending(false);
          } else {
            setEmail("");
            setPassword("");
            Toast.success("User Login successful");
            history.push("/home");
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("password", password);
            setOpenModal(false);
            setIsLoginClicked(false);
            setIspending(false);
          }
        } else {
          // Handle login failure, e.g., display an error message to the user.
          setEmail("");
          setPassword("");
          console.error("Login failed");
          Toast.error("Incorect username and password!");
          setIspending(false);
        }
      } catch (error) {
        // Handle network errors or other exceptions.
        console.error("An error occurred:", error);
      }
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Create a data object with the user's email and password
      // const data = {
      //   // profile,
      //   firstname,
      //   lastname,
      //   email,
      //   password,
      // };
      const formData = new FormData();

      // Append your form fields to the FormData object
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profile); // Append the image

      try {
        setIspending(true);
        const response = await fetch(
          "https://lastlast.onrender.com/api/users/signUp/",
          {
            method: "POST",
            // headers: {
            //   "Content-Type": "application/json",
            // },
            // body: JSON.stringify(data),
            body: formData,
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          // Redirect to a new page or perform any other action for a successful login.
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          Toast.success("User added successful");
          setRegisterActive(false);
          setForgotActive(false);
          setLoginActive(true);
        } else {
          // Handle login failure, e.g., display an error message to the user.
          setFirstname("");
          setFirstname("");
          setEmail("");
          setPassword("");
          console.error("user adding failed");
          Toast.error("Failed to add user");
          setIspending(false);
        }
      } catch (error) {
        // Handle network errors or other exceptions.
        console.error("An error occurred:", error);
        Toast.error("An error occurred:", error);
      }
    }
  };
  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      Toast.error("Please enter your email!");
    } else if (!email.includes("@")) {
      result = false;
      Toast.error("Please enter a valid email address!");
    }

    if (password === "" || password === null) {
      result = false;
      Toast.error("Please enter your password!");
    } else if (password.length < 8) {
      result = false;
      Toast.error("Password must be at least 8 characters long!");
    }
    return result;
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {loginActive && (
          <div className="login-container">
            <form onSubmit={handleLogin}>
              <div className="login-form">
                <div className="login-header">
                  <h1>Login Form</h1>
                  <p>
                    <span className="click-to-register">
                      <button
                        className="login-btn reg-btn"
                        onClick={() => {
                          setRegisterActive(true);
                          setForgotActive(false);
                          setLoginActive(false);
                        }}
                      >
                        Register
                      </button>
                    </span>
                  </p>
                  <Animated animationIn="headShake" animationOut="fadeOut">
                    <button
                      className="cancelBtn"
                      onClick={() => {
                        setOpenModal(false);
                        setIsLoginClicked(false);
                      }}
                    >
                      X
                    </button>
                  </Animated>
                </div>
                <div className="login-username">
                  <input
                    // required
                    type="text"
                    placeholder="Enter email..."
                    className="username-focus"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-password">
                  <input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <BiSolidHide className="login-password-hide-icon" /> */}
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
                {!isPending && (
                  <button type="submit" className="login-button">
                    Login
                  </button>
                )}
                {isPending && (
                  <button className="login-button disable-pointer-events">
                    Login in...
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
        {registerActive && (
          <div className="register-container">
            <div className="login-container">
              <div className="login-form">
                <form onSubmit={handleRegister}>
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
                      type="file"
                      required
                      placeholder="Insert image..."
                      // value={image}
                      // onChange={(e) => setImage(e.target.value)}
                      onChange={(e) => setProfile(e.target.files[0])}
                      className="file"
                    />
                  </div>
                  <div className="login-username">
                    <input
                      required
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Enter first name..."
                      className="username-focus"
                    />
                  </div>
                  <div className="login-username">
                    <input
                      required
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Enter last name..."
                      className="username-focus"
                    />
                  </div>
                  <div className="login-username">
                    <input
                      required
                      type="text"
                      placeholder="Enter email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="username-focus"
                    />
                  </div>
                  <div className="login-password">
                    <input
                      required
                      type="password"
                      placeholder="Enter password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <BiSolidHide className="login-password-hide-icon" /> */}
                  </div>
                  <div className="login-button register-button">
                    <button type="submit">Register Now</button>
                  </div>
                </form>
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
