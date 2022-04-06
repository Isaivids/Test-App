import React from 'react'
import './Intro.css'
import Skills from './Skills'

const Intro = () => {
  return (
    <>
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
        <h2>Hii there</h2>
        <h1>I'm Dilan Raj</h1>
        <h3>Web Application Developer</h3>
        <span>
          Researching, designing, implementing, and managing software programs.
          Testing and evaluating new programs.
          Identifying areas for modification in existing programs and subsequently developing these modifications.
          Writing and implementing efficient code.
        </span>
        </div>
      </div>
      <div className='intro-right'>
        Right
      </div>
    </div>
    <Skills className="skills"/>
    </>
  )
}

export default Intro