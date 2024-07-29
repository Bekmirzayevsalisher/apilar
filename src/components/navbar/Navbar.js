import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUserCog } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
import { useState } from 'react';



function Navbar() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='Navbar'>
        <div className="Navbar-logo"></div>
        <ul>
            <Link to={'/'}><li><a href="">Home</a></li></Link>
            <Link to={'/about'}><li><a href="">about</a></li></Link>
            <Link to={'/contact'}><li><a href="">contact</a></li></Link>
           
           
            
        </ul>
        <h1 className='fake'></h1>

        <div className="navbar-menu">
            {!menuOpen&& <TiThMenu onClick={()=>setMenuOpen(true)}/>}
            {menuOpen&& <FaXmark onClick={()=>setMenuOpen(false)}/>}
          {menuOpen&&
            <div className="navbar-menu-open" >
               <Link to={'/admin'}><li><a href="">Admin</a></li></Link>
             
              
            </div>
          }

        </div>
       
       
    </div>
  )
}

export default Navbar