import React from "react";
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
  return (
    <div className="chart-container">
      <div className="first-chart">
        <LineCharts />
        <PieCharts />
      </div>
      <div className="second-chart">
        <BarCharts />
      </div>
    </div>
  );
};

export default DashboardChart;
