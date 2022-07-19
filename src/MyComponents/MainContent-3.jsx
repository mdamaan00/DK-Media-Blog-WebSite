import { React, useEffect } from "react";
import Cards from "./Cards.jsx";
import "./css/MainContent-3.css";
import phone from "./images/phone.jpg";
import computer from "./images/computer.jpg";
import seo from "./images/seo.jpg";
import smm from "./images/smm.jpg";
import fb from "./images/fb.jpg";
import email from "./images/email.jpg";
import branding from "./images/branding.jpg";
import startup from "./images/startup.jpg";
import pr from "./images/pr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function MainContent3() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div  id="services" className="mainContent3">
      <div data-aos="fade-up" data-aos-once="true">
        <p className="u-heading">Our services</p>
        <h1 className="Heading-3">What do you need?</h1>
      </div>
      <div className="cards">
        <Cards
          image={phone}
          heading="Mobile Application & UI/UX"
          text="We offer dynamic and interactive UI/UX development services using the
            latest tools and technologies. Our designs improve the end- user
            experience and leave a long- lasting impact"
        />
        <Cards
          image={computer}
          heading="Website Development"
          text="Zedital services is one of the premier web development companies in India that provides Web Development
          services. We serve you with attractive and 
          eye catching web design which attracts customer to
          visit your website"
        />
        <Cards
          image={seo}
          heading="Search Engine Optimization"
          text=" We help you to improve your Google ranking and increase
          your organic (non-paid) website traffic. SEO is more
          than just incorporating keywords and we can help to
          optimize all elements."
        />
        <Cards
          image={smm}
          heading="Social Media Marketing"
          text="We help you with social media management and
          advertising to help you grow your business and
          reach new clients."
        />
        <Cards
          image={fb}
          heading="FB & Google Ad"
          text="We provide best Facebook and Google advertisement
          services in affordable and best price with trendy
          advertising concepts & ideas"
        />
        <Cards
          image={email}
          heading="E-mail Marketing"
          text="The writing and editing experience of email marketing
          can be a sticky point for many creators. Our email
          designer helps you breeze through the editing so you
          can focus on writing your content, the most important
          part of email."
        />
        <Cards
          image={branding}
          heading="Branding"
          text="We are Branding Agency, a studio made up of passionate people who love finding thoughtful, engaging and timeless solutions to our clients’ problems. We deliver beautiful and effective projects from brand identities, packaging, and signage to exhibition graphics, websites, and Ui/Ux design for mobile application."
        />
        <Cards
          image={startup}
          heading="Startup / Small Business Profile Management"
          text="A management profile is a description of the capabilities
          (skills and behaviours) and attitudes that an organization's
          manager require to drive the business strategy and lead
          their team."
        />
        <Cards
          image={pr}
          heading="PR & Verification"
          text="We produce story copyrights, content and scripts for Digital PR , communication and distribution strategy for reach and business outcomes through engaging with a network of online professional bloggers, online story tellers, online editors and publication platforms. And then you will receive a blue tick (verification) on your social profiles."
        />
      </div>
    </div>
  );
}

export default MainContent3;
