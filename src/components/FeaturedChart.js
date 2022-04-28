import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import React from "react";
import "./featuredChart.scss";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FeaturedChart() {
    const progress = 60
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Totla Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar styles={buildStyles({pathColor :'#6439ff',textColor:'#6439ff'})} value={progress} text={`${progress}%`} strokeWidth={5} />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">420$</p>
          <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et corrupti sequi?</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="targetAmount positive">20k$ <KeyboardArrowUp /></div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="targetAmount negative">20k$ <KeyboardArrowDown /></div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="targetAmount positive">20k$ <KeyboardArrowUp /></div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default FeaturedChart;
