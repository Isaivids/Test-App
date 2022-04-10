import React from 'react'
import './intro.css'
import Technical from './Technical'
import { FaCss3 } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiAdobexd } from 'react-icons/si'
import { FaPhotoVideo } from 'react-icons/fa'

const Intro = () => {

const description =["Motivated junior web developer looking for a role as full-stack web developer. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion."]

  return (
    <>
    <div className='intro'>
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
              <p><FaPhotoVideo/></p>
            </div>
            <div className='wrapper-left-btn'>
              <a href='#tech'>Tech</a>
              <a>Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='multi-bg'>
          <span>
            
          </span>
        </div>
      </div>
    </div>
    <div>
      <Technical />
    </div>
    </>
  )
}

export default Intro