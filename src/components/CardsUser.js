// import React, { useEffect } from "react";
import { Animated } from "react-animated-css";
// import { useState } from "react";
import Bloglist from "./Bloglist";
import BlogListUser from "./BloglistUser";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Cards = () => {
  const [loading, setLoading] = useState(true);

  const url = "https://lastlast.onrender.com/api/post/posts";
  // const url = "https://blogapi-uvr7.onrender.com/api/v1/blog/getAll";
  const { data: blogs, isPending, error } = useFetch(url);
  useEffect(() => {
    if (blogs) {
      setLoading(false);
    }
  }, [blogs]);
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
            <h2>
              The blogs is loading.....
              {loading && (
                <ClipLoader
                  className="my-clip-loader"
                  color={"#f79918"}
                  loading={loading}
                  size={25}
                />
              )}
            </h2>
          </div>
        </Animated>
      )}
      {blogs && <BlogListUser blogs={blogs} />}
    </div>
  );
};

export default Cards;
