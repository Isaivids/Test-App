import React from 'react'
import './Technical.css'
import {FaReact} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {AiFillDatabase} from 'react-icons/ai';
import {SiAdobephotoshop} from 'react-icons/si';
import {MdVideoSettings} from 'react-icons/md'

const Technical = () => {
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
      tech : "Photoshop", exp : "Expert", icon: <SiAdobephotoshop className='ps'/>
    },
    {
      tech : "Video Editing", exp : "Expert", icon: <MdVideoSettings className='vdo'/>
    },
  ]
  
  return (
    <div className='tech' id="tech">
      <div className='tech-left'>
        <div className='tech-left-title'>
          <h2>Technical knowledge</h2>
        </div>
        <div className='tech-cards'>
          {skills.map((skill)=>{
            return (
              <div class="card1" href="#">
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
          Right
      </div>
    </div>
  )
}

export default Technical