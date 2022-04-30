import React from "react";
import "./sidebar.scss";
import {AccountCircle, Assessment, CreditCard, Dashboard,ExitToApp,LocalShipping,Notifications,Person,Psychology,SettingsApplications,SettingsSystemDaydream,ShoppingBag} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">HPanel</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li onClick={() => navigate('/',{replace : true})}>
              <Dashboard className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li onClick={() => navigate('/users',{replace : true})}>
              <Person className="icons"/>
            <span>Users</span>
          </li>
          <li>
              <ShoppingBag className="icons"/>
            <span>Products</span>
          </li>
          <li>
              <CreditCard className="icons"/>
            <span>Orders</span>
          </li>
          <li>
              <LocalShipping className="icons"/>
            <span>Deliery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <Assessment className="icons"/>
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icons"/>
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li>
              <SettingsSystemDaydream className="icons"/>
            <span>System Health</span>
          </li>
          <li>
              <Psychology className="icons"/>
            <span>Logs</span>
          </li>
          <li>
              <SettingsApplications className="icons"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
              <AccountCircle className="icons" />
            <span>Profile</span>
          </li>
          <li>
              <ExitToApp className="icons"/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className="bottom">
          <div></div>
          <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
