import React from "react";
import Img1 from "./images/image1.jpeg";
const Singleblog = () => {
  return (
    <div className="singleblog-container">
      <div className="blog-title">
        <h1>Pro evultion soccer</h1>
      </div>
      <div className="image-title">
        <img src={Img1} alt="Ghost of tsushima" />
      </div>
      <div className="single-description">
        <div className="author-category-date">
          <div className="author-single">
            Author: <span>Karake Omar</span>
          </div>
          <div className="category-single">
            Category: <span>Gaming, business</span>
          </div>
          <div className="date-single">
            Date: <span>October 9, 2023</span>
          </div>
        </div>
        <div className="description">
          <p>
            eFootball Pro Evolution Soccer (eFootball PES), known as eFootball
            World Soccer Winning Eleven (eFootball WE)[a] in Japan, is a series
            of association football simulation video games developed by Konami
            Digital Entertainment Co., Ltd. and published by Konami. The series
            consists of eighteen main installments and several spin-offs,
            including the mobile game Pro Evolution Soccer Club Manager. Listed
            as one of the best-selling video game franchises, the series has
            sold 111 million copies worldwide, in addition to 400 million mobile
            downloads, December 2020.[1]
          </p>
        </div>
      </div>
      <h2 className="comment-head">Comments</h2>
      <div className="comment-side">
        <div className="username-input">
          Name: <input type="text" />
        </div>
        <div className="comment-input">
          Comments: <input type="text" />
        </div>
        <div className="comment-button">Comment</div>
      </div>
      <div className="first-comments">
        <div className="side-one">
          <img src={Img1} alt="avatar" />
        </div>
        <div className="side-two">
          <div className="username-comment">
            Name: <span>Omarion</span>
          </div>
          <div className="username-comment">
            Commented:{" "}
            <span>
              eFootball Pro Evolution Soccer (eFootball PES), known as eFootball
              World Soccer Winning Eleven (eFootball WE)[a] in Japan, is a
              series of association football simulation video games developed by
              Konami Digital Entertainment Co.
            </span>
          </div>
        </div>
      </div>
      <div className="first-comments">
        <div className="side-one">
          <img src={Img1} alt="avatar" />
        </div>
        <div className="side-two">
          <div className="username-comment">
            Name: <span>Omarion</span>
          </div>
          <div className="username-comment">
            Commented:{" "}
            <span>
              eFootball Pro Evolution Soccer (eFootball PES), known as eFootball
              World Soccer Winning Eleven (eFootball WE)[a] in Japan, is a
              series of association football simulation video games developed by
              Konami Digital Entertainment Co.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
