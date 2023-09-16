import React from "react";
import "./Company.scss";

const Company = ({ exp }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h2>{exp.designation}</h2>
        <p>{exp.company}</p>
        <span className="experience-date">
          {exp.startMonth} - {exp.currentEmployer ? "PRESENT" : exp.lastMonth}
        </span>
      </div>
      <span className="experience-description">{exp.role}</span>
      <span className="experience-location">{exp.location}</span>
    </div>
  );
};

export default Company;
