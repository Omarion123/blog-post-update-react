import React from "react";
import Img1 from "./images/image1.jpeg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const Singleblog = () => {
  const { _id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`https://lastlast.onrender.com/api/post/one/${_id}`);
  return (
    <div className="singleblog-container">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <>
          <div className="blog-title">
            <h1>{blog.title}</h1>
          </div>
          <div className="image-title">
            <img src={blog.image} alt="Ghost of tsushima" />
          </div>
          <div className="single-description">
            <div className="author-category-date">
              <div className="author-single">
                Author: <span>{blog.author[0].fname}</span>
              </div>
              <div className="category-single">
                Category: <span>{blog.category}</span>
              </div>
              <div className="date-single">
                Date: <span>October 9, 2023</span>
              </div>
            </div>
            <div className="description">
              <p>{blog.content}</p>
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
          {/* <div className="first-comments">
            <div className="side-one">
              <img src={Img1} alt="avatar" />
            </div>
            <div className="side-two">
              <div className="username-comment">
                Name: <span>{blog.comments[0].user.fname}</span>
              </div>
              <div className="username-comment">
                Commented: <span>{blog.comments[0].commentBody}</span>
              </div>
            </div>
          </div> */}
        </>
      )}
      {blog && (
        <>
          {blog.comments.map((comment, index) => (
            <div key={index} className="first-comments">
              <div className="side-one">
                <img src={Img1} alt="avatar" />
              </div>
              <div className="side-two">
                <div className="username-comment">
                  Name: <span>{comment.user.fname}</span>
                </div>
                <div className="username-comment">
                  Commented: <span>{comment.commentBody}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Singleblog;
