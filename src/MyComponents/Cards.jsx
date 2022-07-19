import React, { useEffect } from "react";
import "./css/Cards.css";
import "aos/dist/aos.css";
import AOS from "aos";
function Cards({ image, heading, text }) {
  useEffect(() => {
    AOS.init({ duration: 1500});
  }, []);
  return (
    <div data-aos="zoom-in-up" data-aos-once="true" className="Cards">
      <img className="image" src={image} alt="" />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Cards;
