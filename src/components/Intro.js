import React from 'react'
import './Intro.css'
import Skills from './Skills';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import man from '../images/man.png'

const Intro = () => {
  return (
    <>
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
        <h2>Hii there</h2>
        <h1>I'm Dilan Raj</h1>
        <h3>Web Application Developer</h3>
        <div className='intro-ico'>
          <FaReact/><FaHtml5/><IoLogoJavascript/><AiOutlineVideoCameraAdd/>
        </div>
        <span>
          Researching, designing, implementing, and managing software programs.
          Testing and evaluating new programs.
          Identifying areas for modification in existing programs and subsequently developing these modifications.
          Writing and implementing efficient code.
        </span>
        <a href='#skills'><IoIosArrowDropdownCircle className='intro-icon'/></a>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-right-wrapper'>
          <img src={man} alt="Man" />
        </div>
      </div>
    </div>
    <Skills className="skills"/>
    </>
  )
}

export default Intro