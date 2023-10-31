import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class LineCharts extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    const { blogLength, usersLength, uniqueCategories, comments } = this.props;
    const data = [
      {
        name: "Posts",
        // value: blogLength,
        value: blogLength,
        // amt: 34,
      },
      {
        name: "Views",
        // value: 80,
        value: 23,
        // amt: 34,
      },
      {
        name: "Comments",
        // value: comments,
        value: comments,
        // amt: 56,
      },
      {
        name: "Categories",
        // value: uniqueCategories,
        value: uniqueCategories,
        // amt: 34,
      },
      {
        name: "Users",
        // value: usersLength,
        value: usersLength,
        // amt: 54,
      },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
