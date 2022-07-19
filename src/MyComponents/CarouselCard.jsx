import React from "react";
import "./css/CarouselCard.css";

function CarouselCard({image,name,star,content}) {
  return (
    <div className="carouselCard">
      <div className="content">
          
          
          <p>{content}</p>
        </div>
      
      <div className="cimage">
            <img src={image} alt="" />
           
        </div>
        <h3>{name}</h3>
    </div>
  );
}

export default CarouselCard;