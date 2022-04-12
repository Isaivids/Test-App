import React from 'react'
import './DemoProjects.css';
const DemoProjects = () => {

  const demoSites =[
    {
      site: "E-Shopping", status: "Progress", lang: "HTML, CSS, React", img: "shop.jpg", desc: "web application for a shopping site"
    },
    {
      site: "Calculator", status: "Progress", lang: "HTML, CSS, React", img: "calc.jpg", desc: "Calculator Application for practice"
    },
    {
      site: "Contact Manager", status: "live", lang: "HTML, CSS, React", img: "contact.jpg", desc: "web page for contact card "
    },
  ]

  return (
    <div className='demo' id="demo" >
        <div className='demo-title'>
          <h1>Demo Projects</h1>
          <p>*Projects under deployment</p>
        </div>
       <div className='demo-container'>
        {demoSites.map((site)=>{
          return(
            <div className="card">
            <div className="card-header">
              <img src={site.img} alt="tcs-logo" />
            </div>
            <div className="card-body">
              <span className={site.status === "live"?"tag green" : "tag red"}>{site.status}</span>
              <h4>{site.site}</h4>
              <p>{site.desc}</p>
                <div className="user">
                    <div className="user-info">
                      <h5>{site.lang}</h5>
                    </div>
                </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default DemoProjects