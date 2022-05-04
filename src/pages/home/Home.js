import React from "react";
import Chart from "../../components/Chart";
import FeaturedChart from "../../components/FeaturedChart";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import TableList from "../../components/TableList";
import Widget from "../../components/Widget";
import "./home.scss";
import {data} from '../../data/chartData'
import { tableData } from "../../data/table";
const Home = () => {
  const widgedFetched = [
    {
      type: "Users",
      isMoney: false,
      num: 100,
      status : 'positive',
      lastTotal : 80
    },
    {
      type: "Orders",
      isMoney: false,
      num: 80,
      status : 'negative',
      lastTotal : 120
    },
    {
      type: "Earnings",
      isMoney: true,
      num: 20,
      status : 'negative',
      lastTotal : 60
    },
    {
      type: "Balance",
      isMoney: true,
      num: 130,
      status : 'positive',
      lastTotal : 120
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <NavBar />
        <div className="widgets">
          {widgedFetched.map(widged => <Widget {...widged} />)}
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart data={data} width={730} height={250} />
        </div>
        <div className="tableContainer">
          <div className="tableList">
            <TableList rows = {tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
