import React from "react";
import "./DemoProjects.css";
const DemoProjects = () => {
  const demoSites = [
    {
      site: "IsaiVids",
      status: "live",
      lang: "React-Redux",
      img: "iLogo.jpg",
      desc: "Professional landing page",
      link: "https://isaivids.netlify.app/",
    },
    {
      site: "Rough Paper",
      status: "live",
      lang: "React-Redux & Loc Storage",
      img: "Todo.jpg",
      desc: "A simple todo app",
      link: "https://rough-paper.netlify.app/",
    },
    {
      site: "Magic Moments",
      status: "live",
      lang: "React & Bootstrap",
      img: "ps.jpg",
      desc: "Photographer's site",
      link: "https://magic-moments.netlify.app/",
    },
    {
      site: "Calculator",
      status: "live",
      lang: "HTML, CSS, React",
      img: "calc.jpg",
      desc: "Calculator Application for practice",
      link: "https://isaivids.github.io/Calculator-demo/",
    },
    {
      site: "Contact Manager",
      status: "live",
      lang: "React & Loc Storage",
      img: "contact.jpg",
      desc: "web page for contact card ",
      link: "https://contact-manager.netlify.app",
    },
    {
      site: "Budget Tracker",
      status: "In progress",
      lang: "React, Context API, Local Storage",
      img: "budget.png",
      desc: "A complete buget manager",
      link: "https://ie-tracker.netlify.app/",
    },
  ];

  return (
    <div className="demo" id="demo">
      <div className="demo-title">
        <h1>Demo Projects</h1>
      </div>
      <div className="demo-container">
        {demoSites.map((site) => {
          return (
            <div className="card">
              <div className="card-header">
                <img src={site.img} alt="tcs-logo" />
              </div>
              <div className="card-body">
                <a
                  href={site.link}
                  rel="noreferrer"
                  target="_blank"
                  className={site.status === "live" ? "tag green" : "tag red"}
                >
                  {site.status}
                </a>

                <h4>{site.site}</h4>
                <p>{site.desc}</p>
                <div className="user">
                  <div className="user-info">
                    <h5>{site.lang}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoProjects;
