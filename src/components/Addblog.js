import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { MdSubtitles } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHeading } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
const Addblog = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const date = new Date().toISOString().slice(0, 10);

  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [ispending, setIspending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { image, category, author, date, title, heading, content };
    setIspending(true);
    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIspending(false);
      console.log("blog added");
      alert("Blog added successfully");
      setCategory("");
      setAuthor("");
      setTitle("");
      setHeading("");
      setContent("");
    });
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="file"
            />
          </div>
          <div className="image-select">
            <BiSolidCategoryAlt className="icon" />
            <input
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="image-select">
            <BsPersonBadgeFill className="icon" />
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="image-select">
            <MdSubtitles className="icon" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="image-select">
            <FaHeading className="icon" />
            <input
              type="text"
              required
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <div className="image-select">
            <CgDetailsMore className="icon" />
            {/* <input type="text-area" placeholder="Enter content..." /> */}
            <textarea
              rows="4"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
