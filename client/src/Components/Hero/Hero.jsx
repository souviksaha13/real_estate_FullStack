import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="flexColStart hero-title">
            <div className="orange-circle" />
            {/* <motion.h1 initial={{y:"2rem", opacity:0}} animate={{y:"0", opacity:1}} transition={{
                        duration:4,
                        type: "spring"
                    }}>
                        Discover <br />
                        Most Suitable <br />
                        Property
                    </motion.h1> */}
            <h1 style={{margin:"0"}}>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  display: "block",
                }}
                sequence={[
                  `Discover\nMost Suitable\nProperty`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                  1000,
                  "",
                  1000,
                  `Discover\nMost Suitable\nProperty`
                ]}
                speed={25}
              />
            </h1>
          </div>

          <div className="flexColStart hero-des secondaryText">
            <span>Find a variety of property that suits you very easily.</span>
            <span>Forget all difficulties in finding a residence for you.</span>
            <span>Explore and find the most suitable property for your needs with us.</span>
          </div>
                
          <div className="black-box">
            hii
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./Hero_Image.jpg" alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
