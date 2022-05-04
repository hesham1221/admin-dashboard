import {
  ChatBubbleOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import avatar from "../assets/imgs/gamer.png";
import React, { useContext } from "react";
import "./navbar.scss";
import { Badge } from "@mui/material";
import { DarkModeContext } from "../App";
const NavBar = () => {
  const { setDarkmode, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div
            onClick={() => {
              setDarkmode((dark) => !dark);
              localStorage.setItem("Hpanel_darkMode", !darkMode);
            }}
            className="item"
          >
            <DarkModeOutlined />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <Badge badgeContent={4}>
              <NotificationsNoneOutlined />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={5}>
              <ChatBubbleOutlined />
            </Badge>
          </div>
          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
