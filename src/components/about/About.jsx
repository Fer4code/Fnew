import React from "react";
import "./about.css";
import Aboutpic from "../../img/ab.JPG";

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

         Things we believe, Things can be done.
        </p>
        <div className="a-award">
          <img src={Aboutpic} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
