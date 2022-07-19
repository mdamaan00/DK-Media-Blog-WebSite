import { React, useEffect } from "react";
import "./css/MainContent-6.css";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; 
import emailjs from 'emailjs-com';
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

function MainContent6() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


  const alertSuccess = () => alert({ message: 'Your message sent successfully!', type: 'success' });
  
  const alertError = () => alert({ message: 'Something went wrong try again!', type: 'error' });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_hujp9ji', e.target, 'user_A8Rxeh2BKndfFPuqCDnUe')
      .then((result) => {
        alertSuccess();
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
          alertError();
      });
      e.target.reset();
  }; 
 

  return (
    <div id="contactus" className="mainContent6">
       <AlertContainer floatingTime={4500}/>
       
      <div className="heading5">
        <h1 data-aos="fade-right" data-aos-once="true">
          Contact Us
        </h1>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="underline6"
        ></div>
      </div>
      <p data-aos="fade-up" data-aos-once="true" className="para6-1">
        Fill out the form below and one of our advisor's will get in touch
        promptly, alternatively you can email us at{" "}
        <a className="e-mail-responsive" href="mailto:zeditalmarketingagency@gmail.com">zeditalmarketingagency@gmail.com</a>
      </p>

      <div
        data-aos="zoom-in-up"
        data-aos-once="true"
        className="black-back flex6"
      >
        <div
          data-aos="flip-up"
          data-aos-once="true"
          className="flex-child-element6 c6-col1"
        >
          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdLocationPin style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>Address</p>
              <p>
                Seawoods Grand Central Tower-2, Sector-40, Seawoods, Navi Mumbai, Maharashtra
              </p>
            </div>
          </div>

          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdPhone style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>Mobile number</p>
              <a href="tel:+918527419334">+91 8080919144</a>
            </div>
          </div>
          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdMail style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>E-Mail</p>
              <a className="e-mail-responsive" href="mailto:zeditalmarketingagency@gmail.com">zeditalmarketingagency@gmail.com</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-once="true" className="c6-col2">
          {" "}
        </div>
        <div
          data-aos="flip-down"
          data-aos-once="true"
          className="flex-child-element6 c6-col3"
        >
          <div className="form-content">
            <h2>Send Message</h2>
            <form onSubmit={sendEmail}>
              <div className="txt-field">
                <input type="text" name="name" required />
                <span></span>
                <label>Full name</label>
              </div>
              <div className="txt-field">
                <input type="email" name="email" required />
                <span></span>
                <label>E-Mail</label>
              </div>
              <div className="txt-field">
                <input type="text" name="message" required />
                <span></span>
                <label>Type your message</label>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent6;
