import { React, useEffect } from "react";
import "./css/starter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import animationData from "./lotties/marketing.json";
import {FcCalendar} from 'react-icons/fc';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Starter() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="Heading">
    
      <div className="flex starter-flex">
        <div className="flex-child-element starter-child-1">
          <p data-aos="zoom-in-up" data-aos-once="true" className="mainHeading">
            We Help Ecommerce Brands To Achieve Massive Success
          </p>
          <p data-aos="zoom-out-down" data-aos-once="true" className="Quote">
            Stop wasting your time and money on ineffective campaigns and outdated strategies
            <br/>
            <strong>It's time to make your ad-spend count</strong>
          </p>
          <div className="flex-btn">
            <a
              data-aos="fade-down"
              data-aos-once="true"
              className="flex-btn-child btn-1"
              rel="noreferrer"
              href="/#calendly"
            >
              Let's Talk
              <span className="calendar-icon" ><FcCalendar/></span>
              
            </a>
          </div>
        </div>
        <div className="flex-child-element starter-child-2">
        <div className="starter-lottie">
        <Lottie options={defaultOptions} />
      </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Starter;
