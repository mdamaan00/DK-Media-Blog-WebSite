import React, { useEffect } from "react";
import "./css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdFacebook } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  
  const alertSuccess = () => alert({ message: 'Thank you for subscribing!', type: 'success' });

  


  const subscribe = (e) => {
    e.preventDefault();
    alertSuccess();
    e.target.reset();
  }; 
 
  let newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <div className="footer-box">
      <div className="flex-box">
        <div className="flex-child-1">
          <div className="map">
            <p className="footer-headings">Our Office</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1333.5882027192645!2d73.01802211439681!3d19.021614351760743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb7806e89e4034ae!2sTower%202%20Grand%20Central%20Mall!5e0!3m2!1sen!2sin!4v1658222274026!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              
              loading="lazy"
            ></iframe>
            <p>
            Seawoods Grand Central Tower-2, Sector-40, Seawoods, Navi Mumbai, Maharashtra
            </p>
          </div>
        </div>
        <div className="flex-child-2">
          <div className="c2-sec-1">
            <p className="footer-headings">Say Hello</p>
            <p>
              If you are interested in working with us or just want to say hello
              simply drop us a line! <a className="e-mail-responsive" href="mailto:zeditalmarketingagency@gmail.com">zeditalmarketingagency@gmail.com</a>
            </p>
          </div>
          <div className="c2-sec-2">
            <p className="footer-headings">Quick Links</p>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonial</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex-child-3">
          <div className="c3-sec-1">
            <p className="footer-headings">subscribe us</p>
            <form onSubmit={subscribe}>
              <input
                type="email"
                name="email"
                id="subscribe-input"
                placeholder="Your e-mail..."
                required
              />
              <br />
              <button className="subscribe-btn">SUBMIT</button>
            </form>
          </div>
          <div className="c3-sec-2">
            <p className="footer-headings">Follow us on</p>
            <a href="/">
              <MdFacebook className="footer-icons" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <BsInstagram className="footer-icons" />
            </a>
            <a href="/">
              <AiFillTwitterCircle className="footer-icons" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <BsLinkedin className="footer-icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright© {year} DK Media</p>
      </div>
    </div>
  );
}

export default Footer;
