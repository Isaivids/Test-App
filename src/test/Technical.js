import React from "react";
import "./Technical.scss";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaJs, FaPhotoVideo } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import CircularProgress from "./CircularProgress";
import Company from "./Company";

const Technical = () => {
  const experience = [
    {
      company: "Tata Consultancy Services",
      startMonth: "03/2021",
      lastMonth: "10/2022",
      currentEmployer: false,
      location: "Chennai",
      designation: "Assistant System Engineer",
      role: "Developer(React)",
    },
    {
      company: "Infosys Limited",
      startMonth: "10/2022",
      lastMonth: "N/A",
      currentEmployer: true,
      location: "Chennai",
      designation: "Associate Business Analyst",
      role: "Developer(Angular)",
    },
  ];
  const skills = [
    {
      tech: "React",
      exp: "Expert",
      icon: <FaReact className="react" />,
    },
    {
      tech: "Angular",
      exp: "Intermediate",
      icon: <FaHtml5 className="html" />,
    },
    {
      tech: "Node",
      exp: "Beginner",
      icon: <AiFillDatabase className="mf" />,
    },
    {
      tech: "Next JS",
      exp: "Intermediate",
      icon: <FaPhotoVideo className="ps" />,
    },
    {
      tech: "Aws & DevOps",
      exp: "Intermediate",
      icon: <FaJs className="vdo" />,
    },
  ];

  const CheckPercentage = (exp) => {
    let returnValue = 0;
    switch (exp) {
      case "Beginner":
        returnValue = 25;
        break;
      case "Intermediate":
        returnValue = 50;
        break;
      case "Expert":
        returnValue = 70;
        break;
      case "Advanced":
        returnValue = 90;
        break;
      default:
        returnValue = 15;
        break;
    }
    return returnValue;
  };

  return (
    <div id="skills" ref={skills}>
      <p>Technical Skills</p>
      <div className="tech">
        {skills.map((skill, index) => (
          <div className="circle">
            <CircularProgress
              percentage={CheckPercentage(skill.exp)}
              level={skill.exp}
              key={index}
            />
            <span>{skill.tech}</span>
          </div>
        ))}
      </div>
      <p>IT Experience</p>
      <div className="experience">
        {experience.map((exp, index) => (
          <div className="square">
            <Company exp={exp} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical;
