import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaCode } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';


const Navbar = () => {

const [toggle, setToggle] = useState(false)
  return (
    <div className='nav'>
        <div className='nav-left'>
            <div className='nav-name'>
              <h3>Dilan Raj</h3>
              <FaCode />
              </div>
            <div className={toggle?"nav-ham change":"nav-ham"} onClick={()=>setToggle(!toggle)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
        </div>
        <div className={toggle ?'nav-right show' : 'nav-right'}>
            <NavLink className="navlinks" to="/" onClick={()=>setToggle(!toggle)}>Home</NavLink>
            <NavLink className="navlinks" to="/contact" onClick={()=>setToggle(!toggle)}>Contact</NavLink>
            <div className='nav-icons'>
                <a href="https://github.com/Isaivids" rel="noreferrer" target="_blank"><BsGithub className='social-icon-1'/></a>
                <a href="https://wa.me/7868047686" rel="noreferrer" target="_blank"><FaWhatsapp className='social-icon-2'/></a>
                <a href="https://app.netlify.com/teams/isaivids/overview" rel="noreferrer" target="_blank"><SiNetlify className='social-icon-3'/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar