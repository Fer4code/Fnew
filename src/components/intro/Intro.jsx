import "./intro.css";
import Me from "../../img/638.jpg";
import { ThemeContext } from '../../context'
import React,{ useContext } from "react";



const Intro = () => {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Fernando Martinez</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Computer Engineer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">AI developer</div>
              <div className="i-title-item">Technical Support</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">IT Security Analyst</div>
            </div>
          </div>
          <p className="i-desc">
            I am passionate in creation, innovation and automatization of the enviroment we live, work and enjoy.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className={darkMode ? 'i-bg' : 'i-bgd'}></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
