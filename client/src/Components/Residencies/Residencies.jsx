import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {PropertyCards} from "../PropertyCards/PropertyCards";

export const Residencies = () => {
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
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <motion.div
          initial={{ x: "-5rem", opacity: 0 }}
          animate={controls}
          transition={{
            duration: 3,
            type: "spring",
          }}
          ref={ref}
          className="r-head flexColStart"
        >
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </motion.div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {/*Mapping the slider.json info of popular residencies into cards in the carousel  */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCards card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}> &lt; </button>
      <button onClick={() => swiper.slideNext()}> &gt; </button>
    </div>
  );
};
