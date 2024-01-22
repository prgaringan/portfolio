import React from "react";

import './Header.css'

import ProfileImage from '../assets/Profile_Image.png'

const Header = () => {
  return (
    <div className="Header">
      <h1>Hi 👋 , My name is Paul and I’m a</h1>
      <h2>FRONT-END DEVELOPER</h2>
      <h3><span>& UI / UX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Designer</span></h3>
      <img src={ProfileImage} alt="Profile" className="Profile" />
    </div>
  )
}

export default Header