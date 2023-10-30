import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Posts",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Views",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Comments",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Categories",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Users",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default class BarCharts extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
