import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import { MdSubtitles } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHeading } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import toast from "react-hot-toast";

import { useHistory } from "react-router-dom";

const Addblog = () => {
  const history = useHistory();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let role = sessionStorage.getItem("role");
    if (email === "" || (email === null && role !== "admin")) {
      toast.error("login first");
      history.push("/");
    }
  }, []);
  const [image, setImage] = useState(null);
  console.log(image);
  const [category, setCategory] = useState("");
  // const [author, setAuthor] = useState("");
  const createdAt = new Date().toISOString().slice(0, 10);
  let author = localStorage.getItem("username");
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [ispending, setIspending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append your form fields to the FormData object
    formData.append("image", image); // Append the image
    formData.append("category", category);
    formData.append("createdAt", createdAt);
    formData.append("author", author);
    formData.append("title", title);
    formData.append("header", heading);
    formData.append("description", description);

    setIspending(true);

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
      fetch("https://lastlast.onrender.com/api/post/create/", {
        method: "POST",
        headers: headers,
        body: formData, // Use FormData to send the data
      })
        .then((response) => {
          if (response.ok) {
            setImage(null);
            setTitle("");
            setImage(null);
            setCategory("");
            setHeading("");
            setDescription("");
            setIspending(false);
            console.log("blog added");
            toast.success("Blog added successfully");
            // Request was successful
            return response.json();
          } else {
            // Handle error
            setIspending(false);
            console.error("Request failed with status:", response.status);
            toast.error("Request failed with status:", response.status);
            // You can also handle specific error codes here
          }
        })
        .catch((error) => {
          // Handle fetch errors
          setIspending(false);
          toast.error("Fetch error:", error);
        });
    } else {
      console.error("Token not found in localStorage. Please log in.");
      toast.error("Token not found in localStorage. Please log in.");
    }
  };

  return (
    <div className="addblog">
      <form onSubmit={handleSubmit}>
        <h2>Add blog here!</h2>
        <div className="addblog-container">
          <div className="image-select">
            <ImAttachment className="icon" />
            <input
              type="file"
              required
              placeholder="Insert image..."
              // value={image}
              // onChange={(e) => setImage(e.target.value)}
              onChange={(e) => setImage(e.target.files[0])}
              className="file"
            />
          </div>
          <div className="image-select">
            <BiSolidCategoryAlt className="icon" />
            <input
              type="text"
              required
              placeholder="Enter category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* <div className="image-select">
            <BsPersonBadgeFill className="icon" />
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div> */}
          <div className="image-select">
            <MdSubtitles className="icon" />
            <input
              type="text"
              required
              value={title}
              placeholder="Enter title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="image-select">
            <FaHeading className="icon" />
            <input
              type="text"
              required
              value={heading}
              placeholder="Enter header..."
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <div className="image-select">
            <CgDetailsMore className="icon" />
            {/* <input type="text-area" placeholder="Enter content..." /> */}
            <textarea
              rows="4"
              required
              value={description}
              placeholder="Enter description..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="addbtn">
            {!ispending && (
              <button>
                <div className="add-blog-button">
                  <h1>Add blog</h1>
                  <IoIosAdd className="icon-add" />
                </div>
              </button>
            )}
            {ispending && (
              <button>
                <div className="add-blog-button">
                  <h1>Adding blog...</h1>
                  <IoIosAdd className="icon-add" />
                </div>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addblog;
