import React from "react";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import "./contact.css";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogContent from "@mui/material/DialogContent";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [userName, setUserName] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
      setOpen(true);
      setUserName('')
      setUserSubject('')
      setEmail('')
      setMessage('')      
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">I think that a webpage can not fully describe a person, please contact me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <Typography sx={{ pt:0, pl:0, pr:2, pb:0}}>You can find me on Telegram as</Typography>
              <Typography style={{ fontWeight: 600 }}>   fjmt0</Typography>
              
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <Typography style={{ fontWeight: 600 }}> Valencia, Venezuela</Typography>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>How big is your idea?</b> Get in touch. If you can imagine it, can be coded!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className={darkMode ? 'input-dm' : 'input'} type="text" placeholder="Name" name="user_name" value={userName} onChange={event => setUserName(event.target.value)}/>
            <input className={darkMode ? 'input-dm' : 'input'}type="text" placeholder="Subject" name="user_subject" value={userSubject} onChange={event => setUserSubject(event.target.value)}/>
            <input className={darkMode ? 'input-dm' : 'input'} type="email" placeholder="Email" name="user_email" value={email} onChange={event => setEmail(event.target.value)}/>
            <textarea className={darkMode ? 'input-dm' : 'input'} rows="5" placeholder="Message" name="message" value={message} onChange={event => setMessage(event.target.value)}/>
            <Button  type='submit' variant="contained" color="success" size='large' >
              Submit
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert variant="outlined" severity="success">
            Thanks for contacting me, I will be reaching you inmediately!
          </Alert>
        </DialogContent>
      </Dialog>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
