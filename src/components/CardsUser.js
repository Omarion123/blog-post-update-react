// import React, { useEffect } from "react";
import { Animated } from "react-animated-css";
// import { useState } from "react";
import Bloglist from "./Bloglist";
import BlogListUser from "./BloglistUser";
import useFetch from "./useFetch";
const Cards = () => {
  const url = "https://lastlast.onrender.com/api/post/posts";
  // const url = "https://blogapi-uvr7.onrender.com/api/v1/blog/getAll";
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
      {blogs && <BlogListUser blogs={blogs} />}
    </div>
  );
};

export default Cards;
