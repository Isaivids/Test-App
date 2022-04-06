import { FaBeer } from 'react-icons/fa';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='nav-wrapper'>
            <div className='nav-title'>
                <h2>Portfolio - Dilan</h2>
                <h2 onClick={()=>setMenu(!menu)}>X</h2>
            </div>
            <div className={menu ? 'nav-links' : "nav-links nav-active"} onClick={()=>setMenu(!menu)}>
                <NavLink to="/intro" className="nav-font" >Intro</NavLink>
                <NavLink to="/hobbies" className="nav-font" >Hobbies</NavLink>
            </div>
            <section className={menu ?'nav-icons':'nav-icons nav-active'} onClick={()=>setMenu(!menu)}>
                <p><FaBeer/></p>
                <p>Icon1</p>
                <p>Icon1</p>
            </section>
            </div>
    </div>
  )
}

export default Navbar