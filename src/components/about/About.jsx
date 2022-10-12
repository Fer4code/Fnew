import React from "react";

import "./about.css";
import Aboutpic from "../../img/ab.JPG";
import ibm_badge from "../../img/ibmb.png"

const About = () => {

  
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Aboutpic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Thinking, planing, coding...
        </p>
        <p className="a-desc">
         Passionate Engineer, I believe in making things useful and easy for the nowadays human bean
         I do think that technology is our greattest resource now and will be in the future, as Engineer
         things can not be taken for granted.

         I consider myself as a doer, if there is something I would like to achieve I will seek of that, focused and motivated with, I am the kind of person that
         will look forward improve, for myself for personal life and for work, if working with a team commited to achieve a common goal, I beleive the team should
         also improved.

         Things we believe, Things can be done.
        </p>
        <div className="a-award">
          <img src={ibm_badge} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">IBM Award</h4>
            <p className="a-award-desc">
              IBM Professional Certificate about Applied Artificial Inteligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
