import { React, useEffect } from "react";
import "./css/MainContent-1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MainContent1 = () => {
  let dailyVisits = 100;
  let clients = 50;
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mainContent1">
      <div className="flex">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex-child-element"
        >
          <p className="head">Let's connect</p>
          <p className="head1">Getting You Connected To Your Audience</p>

          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <ul className="dc">
                <li>
                  {isVisible ? (
                    <CountUp end={dailyVisits} decimals={0} duration={1.5} />
                  ) : (
                    0
                  )}
                  k+
                </li>

                <li>
                  {isVisible ? <CountUp end={clients} duration={1.5} /> : 0}+
                </li>
              </ul>
            )}
          </VisibilitySensor>

          <ul className="under-dc">
            <li>Ad Spend</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className="flex-child-element">
          <div className="para">
            <p data-aos="fade-up" data-aos-once="true" className="right-para">
              <span>You Don’t Need More Traffic You need more CUSTOMER</span> You aren’t
              investing in another marketing agency to get more Google traffic
              or Facebook traffic. The ONLY reason you hire any marketing
              agency- Including DK Media - is to do one thing;
              <br />
              <span>Acquire more customers effectively and efficiently with your
              marketing budget.</span> At DK Media, we’ve learned that our job isn’t
              just to get you the clicks. Our job is to maximize your budget and
              give you as many ideal costumes as possible, no matter what
              changes come in the marketplace.
              <br />
              Platforms evolve quickly, and the short-term “hacks” do the job if
              you want to stick around long term. You need a robust marketing
              strategy that aligns your traffic with your back end to acquire
              customers after the click.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent1;
