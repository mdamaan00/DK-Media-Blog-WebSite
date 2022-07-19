import React, { useEffect } from "react";
import "./css/MainContent-3.1.css";
import Circle from "./Circle.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
function MainContent31() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mainContent31">
      <p data-aos="fade-up" data-aos-once="true" className="u-heading">Strategy</p>
      <h1 data-aos="fade-up" data-aos-once="true" className="Heading-31">Your Business Growth Plan</h1>
      <div data-aos="slide-up" data-aos-once="true" className="circle-div">
        <Circle
          num="1"
          curr="Discovery Call"
          content="We try to get to know the business and the people better. We identify the real problem and ways to help you fix it."
        />
      </div>
      <div data-aos="slide-up" data-aos-once="true" data-aos-delay="200" className="circle-div">
        <Circle
          num="2"
          curr="Strategic Action Plan (SAP)"
          content="We do a detailed analysis and create an Action Plan"
        />
      </div>
      <div data-aos="slide-up" data-aos-once="true" data-aos-delay="300" className="circle-div">
        <Circle
          num="3"
          curr="Onboarding"
          content="All formalities and Onboarding process is done"
        />
      </div>
      <div data-aos="slide-up" data-aos-once="true" data-aos-delay="400" className="circle-div">
        <Circle
          num="4"
          curr="Unleash Your True Business Potential"
          content="You run your business and We'll Run your marketing"
        />
      </div>
    </div>
  );
}

export default MainContent31;
