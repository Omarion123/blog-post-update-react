// import React, { useEffect } from "react";
import { Animated } from "react-animated-css";
// import { useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
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
