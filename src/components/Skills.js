import React from 'react'
import './Skills.css'
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { MdVideoSettings } from 'react-icons/md';
import { AiFillDatabase } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaAngleDoubleDown } from 'react-icons/fa';


import tcs from '../images/tcs.jpg'

function Skills() {

const skills = [
  {
    tech : "React JS", Exp : "Intermediate", icon: <FaReact className='react'/>
  },
  {
    tech : "HTML & CSS", Exp : "Advanced", icon: <FaHtml5 className='html'/>
  },
  {
    tech : "Mainframe", Exp : "Beginner", icon: <AiFillDatabase className='mf'/>
  },
  {
    tech : "Photoshop", Exp : "Expert", icon: <SiAdobephotoshop className='ps'/>
  },
  {
    tech : "Video Editing", Exp : "Expert", icon: <MdVideoSettings className='vdo'/>
  },
]

  return (
  <div className='skills' id='skills'>
    <div className='skills-left'>
      <div className='container'>
        {skills.map((skill)=>{
          return (
            <div className='content'>
              <div>
                <span>{skill.tech}</span>
                <span>{skill.Exp}</span>
              </div>
              <div>
              {skill.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className='skills-right'>
      <div className='right-container'>
        <div class="card">
          <div class="card-header">
            <img src={tcs} alt="tcs-logo" />
          </div>
          <div class="card-body">
            <span class="tag">Present</span>
            <h4>Application Developer</h4>
            <p>To develop a modern web application from a legacy system</p>
              <div class="user">
                <BiCurrentLocation className='loc'/>
                  <div class="user-info">
                    <h5>Chennai</h5>
                  </div>
               </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  );
}

export default Skills;