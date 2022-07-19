import { React, useEffect } from "react";
import "./css/MainContent-4.css";
import Carousel,{consts} from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import test1 from "./images/test1.jpeg";
import test2 from "./images/test2.jpeg";
import test3 from "./images/test3.jpeg";
import test4 from "./images/test4.jpeg";
import test5 from "./images/test5.jpeg";
import test6 from "./images/test6.jpeg";
import test7 from "./images/test7.jpeg";
import test8 from "./images/test8.jpeg";

function MainContent4() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
  ];

  const myArrow = ({type,onClick, isEdge}) => {
    const pointer = type === consts.PREV ? '<' : '>'
    return(
        <button onClick={onClick} disabled={isEdge}>{pointer}</button>
    )
  }
  return (
    <div id="testimonials" className="mainContent4">
      <div
        className="main-heading-4"
        data-aos="fade-right"
        data-aos-once="true"
        renderArrow={myArrow}
      >
        
      </div>
      <div data-aos="zoom-in" data-aos-once="true" className="black-back flex4">
      <p className="u-heading testimonials">Testimonials</p>
        <h2 className="Heading-4">What our client say about us?</h2>

        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="col2 flex-child-element4"
        >
          <Carousel itemsToShow={1} breakPoints={breakPoints}>
            <CarouselCard
              image={test1}
              name={"LARA"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarHalf style={{ color: "gold" }} />
                </>
              }
              content={
                "Zedital Marketing Agency re-analyzed keyword prioritization and campaign development by getting more keywords that would help conversion from people doing Google searches."
              }
            />
            <CarouselCard
              image={test2}
              name={"HARISH"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                </>
              }
              content={
                "Zedital has helped our company to launch our complete business online including digital strategy, digital brand launch, e-commerce web shop, social media marketing and content production."
              }
            />
            <CarouselCard
              image={test3}
              name={"SANYA"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStar style={{ color: "gold" }} />
                </>
              }
              content={
                "We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Zedital Marketing Agency is doing that for us."
              }
            />
            <CarouselCard
              image={test4}
              name={"JOSEPH"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarHalf style={{ color: "gold" }} />
                </>
              }
              content={
                "Zedital Agency has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional."
              }
            />
            <CarouselCard
              image={test5}
              name={"ROHIT"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarHalf style={{ color: "gold" }} />
                </>
              }
              content={
                "We would highly recommend Zedital Marketing Agency to any business that needs a hand improving their internet traffic or their business."
              }
            />
            <CarouselCard
              image={test6}
              name={"DAVID"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                </>
              }
              content={
                "The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!"
              }
            />
            <CarouselCard
              image={test7}
              name={"VIPUL"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStar style={{ color: "gold" }} />
                </>
              }
              content={
                "Zedital is one stop shop for all things digital. We are growing and expanding to Agra, Delhi NCR and Bangalore as well. Thanks to Zedital Marketing Agency."
              }
            />
            <CarouselCard
              image={test8}
              name={"GAURAV"}
              star={
                <>
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                  <BsStarFill style={{ color: "gold" }} />
                </>
              }
              content={
                "I highly recommend Zedital for all things creative, design, UI/UX, content, technical e-commerce set-up and digital performance marketing."
              }
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MainContent4;
