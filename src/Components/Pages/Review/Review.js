import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Review = () => {
  const data = [
    {
      month: "Jan",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Feb",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 132405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 100900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 161000,
    },
    {
      month: "Sep",
      investment: 700000,
      sell: 670,
      revenue: 261000,
    },
    {
      month: "Oct",
      investment: 700000,
      sell: 670,
      revenue: 210000,
    },
    {
      month: "Nov",
      investment: 700000,
      sell: 670,
      revenue: 319980,
    },
    {
      month: "Dec",
      investment: 1000000,
      sell: 670,
      revenue: 601000,
    },
  ];
  return (
    <div className="pt-32">
      <div>
        <div className="xl:w-1/2 xl:mx-auto">
          <div className="font-mono font-bold">
            <h1 className="mt-10 mb-10 font-mono text-xl text-center text-pink-600 xl:mb-16 xl:text-4xl">
              Our warehouse has been recharted according to the full year month
            </h1>
            <ResponsiveContainer width="100%" aspect="2">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#db2777" />
                <YAxis stroke="#db2777" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sell"
                  stroke="#db2777"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="font-mono font-bold">
            <h2 className="mt-10 mb-10 font-mono text-xl text-center text-pink-600 xl:text-4xl xl:mb-16">
              Our WereHouse Investment Vs Sell
            </h2>
            <ResponsiveContainer width="100%" aspect={2}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#db2777" />
                <YAxis stroke="#db2777" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stroke="#db2777"
                  fill="#db2777"
                  fillOpacity={0.3}
                />
                <Area
                  type={"monotone"}
                  dataKey="revenue"
                  stroke="#ff4500"
                  fill="#ff4500"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
