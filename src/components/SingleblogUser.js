import React, { useState } from "react";
import Img1 from "./images/image1.jpeg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import toast from "react-hot-toast";
const Singleblog = () => {
  const { _id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`https://lastlast.onrender.com/api/post/one/${_id}`);
  const [commenting, setCommenting] = useState("");
  let username = localStorage.getItem("username");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append your form fields to the FormData object
    formData.append("header", username);
    formData.append("commentBody", commenting);

    // setIspending(true);

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    console.log("token", token);

    // Check if the token is available
    if (token) {
      // No need to set Content-Type explicitly; FormData sets it automatically
      // Create headers with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Make the fetch request with the headers and FormData
      fetch(`https://lastlast.onrender.com/api/commenting/comment/${_id}`, {
        method: "POST",
        headers: headers,
        body: formData, // Use FormData to send the data
      })
        .then((response) => {
          if (response.ok) {
            setCommenting("");
            // setIspending(false);
            console.log("blog added");
            toast.success("Comment added successfully");
            // Request was successful
            return response.json();
          } else {
            // Handle error
            // setIspending(false);
            console.error("Request failed with status:", response.status);
            toast.error("Request failed with status:", response.status);
            // You can also handle specific error codes here
          }
        })
        .catch((error) => {
          // Handle fetch errors
          // setIspending(false);
          toast.error("Fetch error:", error);
        });
    } else {
      console.error("Token not found in localStorage. Please log in.");
      toast.error("Token not found in localStorage. Please log in.");
    }
  };
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
      <h2 className="comment-head">Comments</h2>
      <div className="comment-side">
        <form onSubmit={handleSubmit}>
          <div className="username-input">
            Name: <input type="text" value={username} disabled />
          </div>
          <div className="comment-input">
            Comments:{" "}
            <input
              type="text"
              value={commenting}
              placeholder="Enter comment here..."
              onChange={(e) => setCommenting(e.target.value)}
            />
          </div>
          {/* <div className="comment-button">Comment</div> */}
          <button type="submit" className="comment-button">
            Comment
          </button>
        </form>
      </div>
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
