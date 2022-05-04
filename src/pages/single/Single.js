import React from "react";
import "./single.scss";
import { users } from "../../data/users";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";
import Chart from "../../components/Chart";
import { userChart } from "../../data/chartData";
import { Table } from "@mui/material";
import { tableData } from "../../data/table";
import TableList from "../../components/TableList";
const Single = () => {
  const { userId } = useParams(); //:userId
  const intUserId = parseInt(userId.split(":")[1]); //output parseInt('userId')
  const user = users.filter((user) => user.id === intUserId)[0];
  return (
    <div className="single">
      <Sidebar />
      <div className="info">
        <NavBar />
        <div className="infoSpleter">
          <div className="infoContainer">
            <img src={user.imageUrl} alt="profile" className="profilePic" />
            <div className="moreInfo">
              <ul className="userInfo">
                <h1 className="InfoHeader">User's Full Name : </h1>
                <h2 className="InfoData">{`${user.firstName} ${user.lastName}`}</h2>
                <h1 className="InfoHeader">User's Email : </h1>
                <h2 className="InfoData">{user.email}</h2>
                <h1 className="InfoHeader">User's Age : </h1>
                <h2 className="InfoData">{user.age}</h2>
                <h1 className="InfoHeader">User's Status : </h1>
                <h2 className="InfoData">{user.status}</h2>
              </ul>
            </div>
          </div>
            <Chart data={userChart} width={500} height={150} />
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

export default Single;
