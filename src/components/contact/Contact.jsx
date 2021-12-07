import React from "react";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "email_js",
        "FerMdev_template",
        formRef.current,
        "user_p088LNGjGU9Yu9gWfW97f"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
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
          <h1 className="c-title">We can discuss your project & doubts</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              You can find me at Telegram! fjmt0
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Valencia, Venezuela
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>How big is your idea?</b> Get in touch. If you can imagine it, can be coded!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className={darkMode ? 'input-dm' : 'input'} type="text" placeholder="Name" name="user_name" />
            <input className={darkMode ? 'input-dm' : 'input'}type="text" placeholder="Subject" name="user_subject" />
            <input className={darkMode ? 'input-dm' : 'input'} type="email" placeholder="Email" name="user_email" />
            <textarea className={darkMode ? 'input-dm' : 'input'} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
