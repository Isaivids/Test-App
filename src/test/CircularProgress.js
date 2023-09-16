import React from "react";
import "./CircularProgress.scss";
const CircularProgress = ({ percentage, level }) => {
  return (
    <div className="circular-percentage-indicator">
      <svg viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <span className="percentage-text">{level}</span>
    </div>
  );
};

export default CircularProgress;
