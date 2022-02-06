import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";  
import emailjs from "emailjs-com";
import { ThemeContext } from '../../context';
import { useContext } from 'react';


const Contact = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2xp7y7f",
        "template_66upfvq",
        formRef.current,
        "user_xlYcjOhQ1EBgUQcbdfeww"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              9561739511
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ojas.palorkar@gmail.com
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/ojas-palorkar-64bb921a0/">
                <img className="c-icon" src={Linkedin} alt="" />
                Ojas Palorkar
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://www.instagram.com/_ojas_13/">
                <img className="c-icon" src={Instagram} alt="" />
                @_ojas_13
              </a>
            </div>
            <div className="c-info-item">
                
            Copyright © Ojas Palorkar 2022
              
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
