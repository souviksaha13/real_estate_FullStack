import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Start the animation when the component is in view
      controls.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [controls, inView]);

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*Left Side */}
        <div className="flexColStart c-left">
          <motion.div
            initial={{ x: "-5rem", opacity: 0 }}
            animate={controls}
            transition={{
              duration: 3,
              type: "spring",
            }}
            ref={ref}
            className="flexColStart"
          >
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </span>
          </motion.div>
          <div className="flexColStart contactModes">
            {/*First row */}

            <div className="flexStart row">
              {/*1st Mode */}
              <div className="flexColCenter mode">
                {/* Below is the div for call icon and the number */}
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>012 430 145 16</span>
                  </div>
                </div>

                {/* Below is the button */}
                <div className="flexCenter button">Call Now</div>
              </div>
              {/*2nd mode */}
              <div className="flexColCenter mode">
                {/* Below is the div for call icon and the number */}
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>012 430 145 16</span>
                  </div>
                </div>

                {/* Below is the button */}
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/*2nd Row */}
            <div className="flexStart row">
              {/*3rd Mode */}
              <div className="flexColCenter mode">
                {/* Below is the div for call icon and the number */}
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span>012 430 145 16</span>
                  </div>
                </div>

                {/* Below is the button */}
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/*4th mode */}
              <div className="flexColCenter mode">
                {/* Below is the div for call icon and the number */}
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span>012 430 145 16</span>
                  </div>
                </div>

                {/* Below is the button */}
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/*right Side */}
        <div className="c-right">
          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={controls}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="contact.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
