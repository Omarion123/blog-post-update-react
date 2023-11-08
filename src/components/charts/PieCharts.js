import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default class PieCharts extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-of-two-levels-gor24";

  render() {
    const { blogLength, sumOfViews, usersLength, uniqueCategories, comments } =
      this.props;

    const data01 = [
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
    const data02 = [
      { name: "A1", value: 100 },
      { name: "A2", value: 300 },
      { name: "B1", value: 100 },
      { name: "B2", value: 80 },
      { name: "B3", value: 40 },
      { name: "B4", value: 30 },
      { name: "B5", value: 50 },
      { name: "C1", value: 100 },
      { name: "C2", value: 200 },
      { name: "D1", value: 150 },
      { name: "D2", value: 50 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#f79918"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
