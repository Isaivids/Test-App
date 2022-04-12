import React from 'react'
import './Technical.css'
import tcs2 from '../images/tcs2.jpg'
import {FaReact} from 'react-icons/fa';
import {FaHtml5, FaJs, FaPhotoVideo} from 'react-icons/fa';
import {AiFillDatabase} from 'react-icons/ai';

const Technical = ({skils}) => {
  const skills = [
    {
      tech : "React JS", exp : "Intermediate", icon: <FaReact className='react'/>
    },
    {
      tech : "HTML & CSS", exp : "Advanced", icon: <FaHtml5 className='html'/>
    },
    {
      tech : "Mainframe", exp : "Beginner", icon: <AiFillDatabase className='mf'/>
    },
    {
      tech : "Adobe PS,XD,AI", exp : "Expert", icon: <FaPhotoVideo className='ps'/>
    },
    {
      tech : "Javascript", exp : "Intermediate", icon: <FaJs className='vdo'/>
    },
  ]
  
  return (
    <div className='tech' id="skills" ref={skills}>
      <div className='tech-left'>
        <div className='tech-left-title'>
          <h2>Technical knowledge</h2>
        </div>
        <div className='tech-cards'>
          {skills.map((skill)=>{
            return (
              <div className="card1" href="#">
                <div className='card-left'> 
                  <h3>{skill.tech}</h3>
                  <p>{skill.exp}</p>
                </div>
                <div className='card-right'> 
                  <span>{skill.icon}</span>
                </div>
            </div>
            );
          })}
        </div>
      </div>
      <div className='tech-right'>
        <h2>Experience</h2>
          <div className='right-card'>
            <img src={tcs2} alt="tcs" />
            <div className='right-desc'>
              <h4>Tata Consultancy Services</h4>
              <p>Developer</p>
              <p>March 2021 - Present</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Technical