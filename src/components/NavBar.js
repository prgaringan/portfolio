import React, { useState } from "react";
import "./NavBar.css"
import logo from '../assets/Logo.png'

const Navbar =()=>{

     const [IsOpen,setIsOpen]= useState(false);


    return(
        <div className="Navbar">

          <img src={logo} className="nav-logo" alt="logo"/>
          
          <div className={`nav-items ${IsOpen && "open"}`} >
            <a href="#">About Me</a>
            <a href="#">My Work</a>
            <a href="#">Contact Me</a>

          </div>
          <div className={`nav-toogle ${IsOpen && "open"}`} onClick={()=> setIsOpen(!IsOpen)}>
            <div className="bar"></div>

          </div>
        </div>
    )
}

export default Navbar