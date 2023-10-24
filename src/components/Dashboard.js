import React, { useEffect, useState } from "react";
import { BsPostcardHeart } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { Animated } from "react-animated-css";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [ispending, setIspending] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let role = sessionStorage.getItem("role");
    if (email === "" || (email === null && role !== "admin")) {
      toast.error("login first");
      history.push("/");
    }
  }, []);
  const url = "https://lastlast.onrender.com/api/post/posts";
  const { data: blogs, isPending, error } = useFetch(url);
  const uniqueCategories = blogs
    ? Array.from(new Set(blogs.map((blog) => blog.category))).length
    : 0;
  // const handleDelete = (id) => {
  //   console.log("deleted");
  //   console.log(id);
  // };
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API endpoint with the id as a parameter
      const response = await fetch(
        `https://lastlast.onrender.com/api/post/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your authorization header
          },
        }
      );

      if (response.ok) {
        // Handle a successful deletion
        toast.success("Post deleted successfully");
        setIspending(false);
        // You can also perform additional actions here, such as updating the UI
      } else {
        // Handle the case where the deletion request was not successful
        toast.error("Failed to delete the post");
        setIspending(false);
      }
    } catch (error) {
      // Handle any fetch errors
      console.error("Fetch error:", error);
      toast.error("Fetch error:", error);
      setIspending(false);
    }
  };

  return (
    <div className="dashboard-container">
      <h3 className="dash-head">Dashboard</h3>
      <div className="dashboard-grids">
        <div className="grid1">
          <div className="left-side">
            <h3>Post</h3>
            {/* <h1>64</h1> */}
            {blogs && <h1>{blogs.length}</h1>}
          </div>
          <div className="right-side">
            <BsPostcardHeart className="icon" />
          </div>
        </div>
        <div className="grid1">
          <div className="left-side">
            <h3>Categorys</h3>
            {/* <h1>4</h1> */}
            {blogs && <h1>{uniqueCategories}</h1>}
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
      <div className="add-blog">
        <Link to="/addblog">
          <h2>Add item</h2>
          <MdAddCircleOutline className="icon" />
        </Link>
      </div>
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
        {/* ----------------------------------------------- */}
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
        {blogs && (
          <>
            {blogs.map((blog) => (
              <div className="items1" key={blog._id}>
                {/* <Link to={`/blogs/${blog.id}`}> */}
                <div className="items-title">
                  <p>{blog.title}</p>
                </div>
                <div className="items-description">
                  {blog && blog.description
                    ? blog.description.substring(0, 100)
                    : ""}
                  ...
                </div>
                <div className="items-action">
                  <Link to={`/update/${blog._id}`}>
                    <AiFillEdit className="icon" />
                  </Link>
                  {!isPending && (
                    <MdDelete
                      className="icon"
                      onClick={() => {
                        handleDelete(blog._id);
                        setIspending(true);
                      }}
                    />
                  )}
                  {ispending && <AiOutlineLoading3Quarters className="icon" />}
                </div>
                {/* </Link> */}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
