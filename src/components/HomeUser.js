import React from "react";
// import Cards from "./Cards";
import CardsUser from "./CardsUser";
import { Link } from "react-router-dom";
// import Img1 from "./images/image1.jpeg";
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to OMY-BLOGS</h1>
        <div className="hero-section-button">
          <Link to="/aboutus">
            <h2>Learn more --&gt;</h2>
          </Link>
        </div>
      </div>
      <CardsUser />
    </div>
  );
};

export default Home;
