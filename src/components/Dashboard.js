import React from "react";
import { BsPostcardHeart } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="dash-head">Dashboard</h3>
      <div className="dashboard-grids">
        <div className="grid1">
          <div className="left-side">
            <h3>Post</h3>
            <h1>64</h1>
          </div>
          <div className="right-side">
            <BsPostcardHeart className="icon" />
          </div>
        </div>
        <div className="grid1">
          <div className="left-side">
            <h3>Category</h3>
            <h1>4</h1>
          </div>
          <div className="right-side">
            <BiCategoryAlt className="icon" />
          </div>
        </div>
        <div className="grid1">
          <div className="left-side">
            <h3>Users</h3>
            <h1>21</h1>
          </div>
          <div className="right-side">
            <AiOutlineUsergroupAdd className="icon" />
          </div>
        </div>
      </div>
      <Link to="/addblog">
        <div className="add-blog">
          <h2>Add item</h2>
          <MdAddCircleOutline className="icon" />
        </div>
      </Link>
      <div className="dashboard-items">
        <div className="dashboard-items-header">
          <div>
            <p>Title</p>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Action</p>
          </div>
        </div>
      </div>
      <div className="blog-items">
        <div className="items1">
          <div className="items-title">
            <p>Gaming</p>
          </div>
          <div className="items-description">
            <p>
              The series consists of eighteen main installments and several
              spin, includi..............
            </p>
          </div>
          <div className="items-action">
            <AiFillEdit className="icon" />
            <MdDelete className="icon" />
          </div>
        </div>
        <div className="items1">
          <div className="items-title">
            <p>Gaming</p>
          </div>
          <div className="items-description">
            <p>
              The series consists of eighteen main installments and several
              spin, includi..............
            </p>
          </div>
          <div className="items-action">
            <AiFillEdit className="icon" />
            <MdDelete className="icon" />
          </div>
        </div>
        <div className="items1">
          <div className="items-title">
            <p>Gaming</p>
          </div>
          <div className="items-description">
            <p>
              The series consists of eighteen main installments and several
              spin, includi..............
            </p>
          </div>
          <div className="items-action">
            <AiFillEdit className="icon" />
            <MdDelete className="icon" />
          </div>
        </div>
        <div className="items1">
          <div className="items-title">
            <p>Gaming</p>
          </div>
          <div className="items-description">
            <p>
              The series consists of eighteen main installments and several
              spin, includi..............
            </p>
          </div>
          <div className="items-action">
            <AiFillEdit className="icon" />
            <MdDelete className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
