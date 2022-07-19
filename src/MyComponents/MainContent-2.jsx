import React from "react";
import "./css/MainContent-2.css";
import video from "./videos/video.mp4";

function MainContent2() {
  return (
    <video
      className="mainContent2"
      autoPlay
      loop
      muted
      preload="auto"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default MainContent2;
