import React, { useState } from "react";
import LineCharts from "./charts/Linechart";
import BarCharts from "./charts/BarCharts";
import PieCharts from "./charts/PieCharts";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
const DashboardChart = () => {
  const history = useHistory();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let role = sessionStorage.getItem("role");
    if (email === "" || (email === null && role !== "admin")) {
      toast.error("login first");
      history.push("/");
    }
  }, []);
  const url = "https://lastlast.onrender.com/api/post/adminPosts";
  const urlUser = "https://lastlast.onrender.com/api/users/getAllUsers/";
  const urlComments = "https://lastlast.onrender.com/api/commenting/comments/";
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  console.log("Comments are: ", comments);
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
      setIspending(false);
      setError(null);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  };
  const fetchCommentData = async () => {
    try {
      const response = await fetch(urlComments, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Could not fetch the resources, check the endpoints");
      }

      const responseData = await response.json();
      setComments(responseData.data);
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
      setUsers(responseData.data);
      setIspending(false);
      setError(null);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  };

  const uniqueCategories = blogs
    ? Array.from(new Set(blogs.map((blog) => blog.category))).length
    : 0;
  useEffect(() => {
    fetchData();
    fetchUserData();
    fetchCommentData();
  }, []); // Empty dependency array to run only once on component mount
  return (
    <div className="chart-container">
      <div className="first-chart">
        <LineCharts
          comments={comments.length}
          uniqueCategories={uniqueCategories}
          blogLength={blogs.length}
          usersLength={users.length}
        />
        <PieCharts />
      </div>
      <div className="second-chart">
        <BarCharts
          comments={comments.length}
          uniqueCategories={uniqueCategories}
          blogLength={blogs.length}
          usersLength={users.length}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
