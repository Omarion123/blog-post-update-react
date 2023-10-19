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

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Router>
          <div className="header">
            <Navbar />
          </div>
          <div className="main others-main">
            <div className="container-main">
              <Switch>
                <Route exact path="/">
                  <Home />
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
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/forgot-password">
                  <Forgotpassword />
                </Route>
                <Route path="/blogs/:id">
                  <Singleblog />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/addblog">
                  <Addblog />
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
