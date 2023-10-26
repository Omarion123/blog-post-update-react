import React from "react";
import "./App.css";
import "./components/css/layout.css";
import "./components/css/Navbar.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgotpassword from "./components/Forgotpassword";
import Singleblog from "./components/Singleblog";
import Dashboard from "./components/Dashboard";
import Addblog from "./components/Addblog";
import Loginmodel from "./components/Loginmodel";
import { Toaster } from "react-hot-toast";
import Update from "./components/Update";
import SingleblogUser from "./components/SingleblogUser";
import HomeUser from "./components/HomeUser";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Router>
          <div className="header">
            <Navbar />
            <Toaster position="top-center" />
          </div>
          <div className="main others-main">
            <div className="container-main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/home">
                  <HomeUser />
                </Route>
                <Route path="/aboutus">
                  <Aboutus />
                </Route>
                <Route path="/contactus">
                  <Contactus />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                {/* test */}
                <Route path="/loginapi">
                  <Loginmodel />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/forgot-password">
                  <Forgotpassword />
                </Route>
                <Route path="/blogs/:_id">
                  <Singleblog />
                </Route>
                <Route path="/blogsUser/:_id">
                  <SingleblogUser />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/addblog">
                  <Addblog />
                </Route>
                <Route path="/update/:_id">
                  <Update />
                </Route>
              </Switch>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
