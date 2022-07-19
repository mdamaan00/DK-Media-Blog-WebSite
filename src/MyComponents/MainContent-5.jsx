import { React, useEffect, useState } from "react";
import "./css/MainContent-5.css";
import core_values from "./images/core_values.png";
import { TiTick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

function MainContent5() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [showMore , setShowMore] = useState(false);
  const text = "DK Media is a boutique Marketing Agency built by passionate marketers. We provide end-to-end digital marketing services like Ui/Ux design, Paid ads, SEO(Search Engine Optimization), Email Marketing, Influencer marketing, Marketing consultation, and much more to help your e-commerce brand grow. We are built for speed and efficiency to help you compete with the ever-changing digital landscape. Delivering the right message in the right context on a massive scale in today's digital space requires expertise. We have expertise in growing e-commerce brands and have worked with 50+ e-com brands since 2018 and have rich experience from the hundreds of social media campaigns, hundreds of keywords ranked on the first page of Google, plenty of motion & static content produced, millions of media money spent & revenues generated for them. We are a result-oriented agency and can provide you a predictable and exponential growth. We like it when the client talks about results and numbers. Don't believe it? Let's talk";
  return (
    <div id="aboutus" className="mainContent5">
      <div className="heading5">
        <h1 data-aos="fade-right" data-aos-once="true">
          Why choose DK Media?
        </h1>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="underline5"
        ></div>
      </div>
      <p  className="para5-1" data-aos="fade-up"
          data-aos-once="true" >
        <p >
          {showMore?text:`${text.substring(0,394)+"..."}`}
          
        </p>
        <button className="showmore-btn" onClick={()=> setShowMore(!showMore)}>
            {showMore?"Show less":"Show more"}
          </button>
        
      </p>
      <div className="flex flex-item-5">
        <div
          data-aos="flip-right"
          data-aos-once="true"
          className="flex-child-element"
        >
          <span className="helper"></span>
          <img className="core_values" src={core_values} alt="" />
        </div>
        <div className="flex-child-element second-item">
          <div data-aos="flip-left" data-aos-once="true">
            <h1>What You Get In a Relationship with DK Media-</h1>
            
          </div>
          <ul className="list5">
            {}
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong>An ideal team:</strong>  highly technical, wildly creative and strategic, design-focused, industry veterans in web design and digital marketing
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> <strong>Amazing people:</strong>  some of the most honest, talented, and friendly folks in the industry
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> <strong>Proactivity:</strong>  we get the things done and make less work for you!
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong>Exceptionally responsive and transparent</strong>  communication that wows clients
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong>Dedicated communication channel</strong>  built on collaboration viaText, Slack,  and Zoom
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong> Top-notch project management and transparency</strong>
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong>Dedicated capacity</strong>  for your project
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /><strong>24/7 support</strong>  for all your problems and queries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent5;
