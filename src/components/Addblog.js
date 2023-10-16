import React from "react";
import { ImAttachment } from "react-icons/im";
import { MdSubtitles } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHeading } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
const Addblog = () => {
  return (
    <div className="addblog">
      <h2>Add blog here!</h2>
      <div className="addblog-container">
        <div className="image-select">
          <ImAttachment className="icon" />
          <input type="file" placeholder="Select image..." className="file" />
        </div>
        <div className="image-select">
          <BiSolidCategoryAlt className="icon" />
          <input type="text" placeholder="Enter category here..." />
        </div>
        <div className="image-select">
          <BsPersonBadgeFill className="icon" />
          <input type="text" placeholder="Enter author here..." />
        </div>
        <div className="image-select">
          <MdSubtitles className="icon" />
          <input type="text" placeholder="Enter title here..." />
        </div>
        <div className="image-select">
          <FaHeading className="icon" />
          <input type="text" placeholder="Enter heading here..." />
        </div>
        <div className="image-select">
          <CgDetailsMore className="icon" />
          {/* <input type="text-area" placeholder="Enter description..." /> */}
          <textarea
            id="myTextArea"
            rows="4"
            placeholder="Type your blog here..."
          ></textarea>
        </div>
        <div className="addbtn">
          <div className="add-blog-button">
            <h1>Add blog</h1>
            <IoIosAdd className="icon-add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
