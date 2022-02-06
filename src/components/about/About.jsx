import React from "react";
import "./about.css";
import ojas2 from "../../img/ojas2.png";
import Award from "../../img/award.png";
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={ojas2} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          I am Ojas, from Nagpur, Maharashtra.  
          </p>
          <br />
          <p className="a-desc">
            I am a freelance Web Developer. Actively freelancing on UpWork.
            Chiefly skilled in Front End Development: HTML, CSS, JavaScript, BootStrap, React.js and C/C++.
          </p>
          <div className="a-award">
            <a href="https://www.upwork.com/freelancers/~01eda2b54f435d7301"><img src={Award} alt="" className="a-award-img"/></a>
            <div className="a-award-texts">
              <h4 className="a-award-title"  style={{backgroundColor:darkMode? "#222":"white"}}>
                 Here's My UpWork Profile
              </h4>
              <p className="a-award-desc">
                
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
