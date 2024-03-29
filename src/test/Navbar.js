import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [background, setBackground] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    scrollPosition >= 100 ? setBackground(true) : setBackground(false);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={background ? "nav bg" : "nav"}>
      <div className="nav-left">
        <div className="nav-name">
          <h3>Dilan Raj</h3>
          <FaCode className="logo" />
        </div>
        <div
          className={toggle ? "nav-ham change" : "nav-ham"}
          onClick={() => setToggle(!toggle)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={toggle ? "nav-right show" : "nav-right"}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navlinks")}
          to="/"
          onClick={() => setToggle(!toggle)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navlinks")}
          to="/contact"
          onClick={() => setToggle(!toggle)}
        >
          Contact
        </NavLink>
        <div className="nav-icons">
          <a
            href="https://github.com/Isaivids"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="social-icon-1" />
          </a>
          <a href="https://wa.me/7868047686" rel="noreferrer" target="_blank">
            <FaWhatsapp className="social-icon-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/dilan-raj"
            rel="noreferrer"
            target="_blank"
          >
            <SiLinkedin className="social-icon-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
