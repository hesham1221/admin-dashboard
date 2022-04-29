import React from "react";
import "./chart.scss";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {name : 'january' , total : 400},
    {name : 'febuary' , total : 300},
    {name : 'march' , total : 500},
    {name : 'april' , total : 100},
    {name : 'may' , total : 150},
    {name : 'june' , total : 700},
    {name : 'july' , total : 500},
    {name : 'august' , total : 200},
    {name : 'september' , total : 230},
    {name : 'october' , total : 120},
    {name : 'november' , total : 505},
    {name : 'december' , total : 201},

  ];
  return (
    <div className="chart">
      <div className="title">
        Last Year Revenue
      </div>
      <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="grey" />
        <CartesianGrid className='chartGrid' strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
