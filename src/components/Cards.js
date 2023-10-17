import React, { useEffect } from "react";
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
import { useState } from "react";
import Bloglist from "./Bloglist";
import { faL } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIspending(false);
        });
    }, 3000);
  }, []);
  return (
    <div className="cards">
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
