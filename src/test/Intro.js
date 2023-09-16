import React, { useRef } from "react";
import "./intro.css";
import Technical from "./Technical";
import DemoProjects from "./DemoProjects";
import { NavLink } from "react-router-dom";

const Intro = () => {
  const skills = useRef(null);
  const demo = useRef(null);

  const scrollPage = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };

  const description =
    " Aspiring Frontend Developer with 2+ years of hands-on experience in building responsive and user-friendly web applications using React and Angular. I am passionate about creating visually appealing and modern user interfaces, and I am seeking a challenging position where I can continue to grow my skills and contribute to the success of innovative projects.";
  const desc1 = "Hi I'm Dilan";
  return (
    <>
      <div className="home">
        <div className="content">
          <p>{desc1}</p>
          <span>{description}</span>
          <div className="buttons">
            <NavLink
              to="#skills"
              className="nav-link"
              onClick={() => {
                scrollPage(skills.current);
              }}
            >
              Tech skills
            </NavLink>
            <NavLink
              to="#demo"
              className="nav-link"
              onClick={() => {
                scrollPage(demo.current);
              }}
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
      <Technical />
      <DemoProjects />
    </>
  );
};

export default Intro;
