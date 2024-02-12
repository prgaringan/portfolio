import React from "react";

import Figma from '../assets/Figma.png';
import Photoshop from '../assets/Photoshop.png';
import AI from '../assets/Illustrator.png';
import XD from '../assets/XD.png';
import Html from '../assets/Html.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/JS.png';
import ReactIc from '../assets/React.png';
import Git from '../assets/Git.png';
import Android from '../assets/AndroidStudio.png'
import Xcode from '../assets/Xcode.png'

import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="AboutMe">

            <h1>ABOUT ME</h1>
            <p>
                With over <b>four years of hands-on experience</b> as a Software Developer in the United Arab Emirates, I specialize in creating visually stunning and highly functional mobile applications and websites.
              <br></br>
              <br></br>
                Notable works include the <b>Driverslog Landing Website and Mobile App</b>, and the <b>Raktherm Mobile Application</b>. 
                <br></br>
              <br></br>
                My expertise lies in meticulous component design, showcasing a keen eye for detail and a genuine passion for crafting seamless user experiences. 

            </p>

            <h2>Tools & Skills</h2>

            <div className="Tools">
                <img src={Figma} alt="figma" />
                <img src={Photoshop} alt="photoshop" />
                <img src={AI} alt="AI" />
                <img src={XD} alt="XD" />
                <img src={Html} alt="Html" />
                <img src={CSS} alt="CSS" />
                <img src={JS} alt="JS" />
                <img src={Android}  alt="Android" />
                <img src={Xcode} alt="Xcode"/>
                <img src={ReactIc} alt="React" />
                <img src={Git} alt="Git" />
              
            </div>

          
        </div>
    )
}

export default AboutMe