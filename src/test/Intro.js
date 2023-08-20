import React, { useRef } from "react";
import "./intro.css";
import Technical from "./Technical";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { FaJs } from "react-icons/fa";
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

  const description = [
    "Motivated junior web developer looking for a role as full-stack web developer. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion.",
  ];
  const desc1 = ["Hi I'm Dilan"];
  return (
    <>
      {/* <div className='intro'>
      <div className='intro-left'>
        <div className='wrapper-left'>
          <div className='content-left'>
            <span>Hii there &#9995;</span>
            <h2>I'm Dilan</h2>
            <h5>Web Application Developer & Designer</h5>
            <p>{description}</p>
            <div className='wrapper-left-icons'>
              <p><FaReact /></p>
              <p><FaHtml5/></p>
              <p><FaCss3/></p>
              <p><SiAdobexd/></p>
              <p><FaJs/></p>
            </div>
            <div className='wrapper-left-btn'>
              <NavLink to="#skills" onClick={()=>{scrollPage(skills.current)}}>Tech</NavLink>
              <NavLink to="#demo" onClick={()=>{scrollPage(demo.current)}}>Demo</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='multi-bg'>
          <span></span>
        </div>
      </div>
    </div>
    <div className='pages'>
      <Technical skills={skills}/>
      <DemoProjects />
    </div> */}

      <div className="home">
        <div className="content">
          <p>{desc1}</p>
          <span>{description}</span>
          <div className="buttons">
            <NavLink
              to="#skills"
              className= "nav-link"
              onClick={() => {
                scrollPage(skills.current);
              }}
            >
              Tech skills
            </NavLink>
            <NavLink
              to="#demo"
              className= "nav-link"
              onClick={() => {
                scrollPage(demo.current);
              }}
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
      <Technical skills={skills} />
      <DemoProjects />
    </>
  );
};

export default Intro;
