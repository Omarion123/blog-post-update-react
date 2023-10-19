// import React, { useEffect } from "react";
import { Animated } from "react-animated-css";
// import Img1 from "./images/image1.jpeg";
// import Img2 from "./images/image2.jpeg";
// import Img3 from "./images/image3.jpg";
// import Img4 from "./images/image4.jpg";
// import Img5 from "./images/image5.jpg";
// import Img6 from "./images/image6.jpg";
// import Img7 from "./images/image7.jpg";
// import Img8 from "./images/image8.jpg";
// import Img9 from "./images/image9.jpg";
// import Img10 from "./images/image10.jpg";
// import { useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
// import { faL } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  const url = "http://localhost:3000/blogs";
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="cards">
      {error && (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>
            <h2>{error}</h2>
          </div>
        </Animated>
      )}
      {isPending && (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>
            <h2>The blogs is loading.....</h2>
          </div>
        </Animated>
      )}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Cards;
