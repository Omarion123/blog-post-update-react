import React, { useEffect, useState } from "react";
import { BsPostcardHeart } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { Animated } from "react-animated-css";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import HTMLReactParser from "html-react-parser";
import BarChart from "./BarChart";

const Dashboard = () => {
  // const labelValues = userData.map((data) => data.year);
  // const dataValues = userData.map((data) => data.userGain);

  // const [userData, setUserData] = useState({
  //   labels: labelValues,
  //   datasets: [
  //     {
  //       label: "users gained",
  //       data: dataValues,
  //     },
  //   ],
  // });
  const [loading, setLoading] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  // const [ispendingDelete, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let role = sessionStorage.getItem("role");
    if (email === "" || (email === null && role !== "admin")) {
      toast.error("login first");
      history.push("/");
    }
  }, []);
  // -------------------------------------------------------------------
  // const url = "https://lastlast.onrender.com/api/post/posts";
  const url = "https://lastlast.onrender.com/api/post/adminPosts";
  const urlUser = "https://lastlast.onrender.com/api/users/getAllUsers/";
  // const { data: blogs, isPending, error } = useFetch(url);
  // -------------------------------------------------------------------
  // ----------------------
  // const [blogs, setBlogs] = useState([]);
  // const [isPending, setIspending] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error("Could not fetch the resources, check the endpoints");
  //       }

  //       const responseData = await response.json();
  //       setBlogs(responseData.data); // Update the 'blogs' state
  //       console.log(responseData.data);
  //       setIspending(false);
  //       setError(null);
  //     } catch (err) {
  //       setIspending(false);
  //       setError(err.message);
  //     }
  //   };

  //   fetchData(); // Fetch data immediately
  // }, [url]);
  // --------------------------------

  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  console.log("Users might be: ", users);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchData function outside of useEffect
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Could not fetch the resources, check the endpoints");
      }

      const responseData = await response.json();
      setBlogs(responseData.data); // Update the 'blogs' state
      console.log(responseData.data);
      setIspending(false);
      setError(null);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  };
  const fetchUserData = async () => {
    try {
      const response = await fetch(urlUser, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Could not fetch the resources, check the endpoints");
      }

      const responseData = await response.json();
      // console.log("Users are:", responseData.data);
      setUsers(responseData.data);
      setIspending(false);
      setError(null);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []); // Empty dependency array to run only once on component mount
  // -------------------------------------------------------------------
  const uniqueCategories = blogs
    ? Array.from(new Set(blogs.map((blog) => blog.category))).length
    : 0;
  // const handleDelete = (id) => {
  //   console.log("deleted");
  //   console.log(id);
  // };

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this item?");

    if (result) {
      try {
        setPostIdToDelete(id); // Set the post ID that's being deleted

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
          fetchData();
          setPostIdToDelete(null); // Reset the post ID after deletion
        } else {
          // Handle the case where the deletion request was not successful
          toast.error("Failed to delete the post");
          setPostIdToDelete(null); // Reset the post ID in case of an error
        }
      } catch (error) {
        // Handle any fetch errors
        console.error("Fetch error:", error);
        toast.error("Fetch error:", error);
        setPostIdToDelete(null); // Reset the post ID in case of an error
      }
    } else {
      // Handle the cancel action here
      console.log("Deletion canceled");
    }
  };

  return (
    <div className="dashboard-container">
      {/* <BarChart /> */}
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
            {/* <h1>6</h1> */}
            <h1>{users.length}</h1>
          </div>
          <div className="right-side">
            <AiOutlineUsergroupAdd className="icon" />
          </div>
        </div>
      </div>
      <div className="add-and-viewchart">
        <div className="add-blog">
          <Link to="/addblog">
            <h2>Add item</h2>
            <MdAddCircleOutline className="icon" />
          </Link>
        </div>
        <div className="add-blog">
          <Link to="/dashboard-chart">
            <h2>View Charts</h2>
            <AiOutlineAreaChart className="icon" />
          </Link>
        </div>
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
                  {/* <p>{blog.title}</p> */}
                  <p>{blog.title ? blog.title.substring(0, 15) : ""}...</p>
                </div>
                <div className="items-image">
                  <img src={blog.image} />
                </div>
                <div className="items-description">
                  {blog &&
                    HTMLReactParser(
                      blog.description ? blog.description.substring(0, 90) : ""
                    )}
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
                        setLoading(true);
                      }}
                    />
                  )}
                  {loading && postIdToDelete === blog._id && (
                    <ClipLoader color={"#f79918"} loading={loading} size={50} />
                  )}
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
