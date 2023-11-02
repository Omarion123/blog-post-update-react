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

export default class BarCharts extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  render() {
    const { blogLength, sumOfViews, usersLength, uniqueCategories, comments } =
      this.props;
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
        value: sumOfViews,
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
          <Bar
            dataKey="value"
            fill="#8884d8"
            background={{ fill: "#f79918" }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
