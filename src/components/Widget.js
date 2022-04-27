import {
  AccountBalance,
  AddShoppingCartOutlined,
  IndeterminateCheckBoxOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Paid,
  PersonOutlined,
} from "@mui/icons-material";
import React from "react";
import "./widget.scss";
const Widget = ({ type, isMoney, num, status, lastTotal }) => {
  const Icon = () => {
    switch (type) {
      case "Users":
        return <PersonOutlined className="icon" />;
      case "Orders":
        return <AddShoppingCartOutlined className="icon" />;
      case "Earnings":
        return <Paid className="icon" />;
      case "Balance":
        return <AccountBalance className="icon"/>;
        default :
        return <IndeterminateCheckBoxOutlined />
    }
  };
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">{`${num}${isMoney ? "$" : ""}`}</span>
        <span className="link">See all {type}</span>
      </div>
      <div className="right">
        <div className={`percentage ${status}`}>
          {status === "positive" ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {status === "positive"
            ? `${Math.round(((num - lastTotal) / lastTotal) * 100)}%`
            : `${Math.round(((lastTotal - num) / lastTotal) * 100)}%`}
        </div>
        <Icon/>
      </div>
    </div>
  );
};

export default Widget;
