import { BiMenuAltRight } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import {CgCloseO} from 'react-icons/cg'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='nav-wrapper'>
            <div className='nav-title'>
                <h2>Dilan Raj</h2>
                <h2>{menu ? <CgCloseO className='menu-icon' onClick={()=>setMenu(!menu)}/> : <BiMenuAltRight className='menu-icon' onClick={()=>setMenu(!menu)}/>}</h2>
            </div>
            <div className={menu ? 'nav-links' : "nav-links nav-active"} onClick={()=>setMenu(!menu)}>
                <NavLink to="/" className="nav-font" >Intro</NavLink>
                <NavLink to="/hobbies" className="nav-font" >Hobbies</NavLink>
            </div>
            <section className={menu ?'nav-icons':'nav-icons nav-active'} onClick={()=>setMenu(!menu)}>
                <a href="https://github.com/Isaivids" target="_blank"><BsGithub className='social-icon-1'/></a>
                <a href="https://wa.me/7868047686" target="_blank"><FaWhatsapp className='social-icon-2'/></a>
                <a href="https://app.netlify.com/teams/isaivids/overview" target="_blank"><SiNetlify className='social-icon-3'/></a>
            </section>
            </div>
    </div>
  )
}

export default Navbar