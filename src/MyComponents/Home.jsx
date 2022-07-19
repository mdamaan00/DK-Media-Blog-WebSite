import React from "react";
import Starter from "./Starter.jsx";
import MainContent1 from "./MainContent-1.jsx";
import MainContent2 from "./MainContent-2.jsx";
import MainContent3 from "./MainContent-3.jsx";
import MainContent31 from "./MainContent-3.1.jsx";
import MainContent4 from "./MainContent-4.jsx";
import MainContent5 from "./MainContent-5.jsx";
import MainContent6 from "./MainContent-6.jsx";
import { InlineWidget } from "react-calendly";
function Home() {
  document.getElementsByClassName('switcher')[0].style.display="";
  return (
    <div>
      <Starter />
      <MainContent1 />
      <MainContent2 />
      <MainContent3 />
      <MainContent4 />
      <div id="calendly">
        <InlineWidget
          url="https://calendly.com/dk-media/discovery-call"
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "ff725e",
            textColor: "4d5055",
          }}
          styles={{
            height: "700px",
            width: "auto",
          }}
        />
      </div>
      <MainContent5 />
      <MainContent31 />
      <MainContent6 />
    </div>
  );
}

export default Home;
