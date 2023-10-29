import React from 'react'
import './Hero.css'
import {motion, spring} from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">

            {/* left-side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle"/>
                    <motion.h1 initial={{y:"2rem", opacity:0}} animate={{y:"0", opacity:1}} transition={{
                        duration:4,
                        type: "spring"
                    }}>
                        Discover <br />
                        Most Suitable <br />
                        Property
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des secondaryText">
                    <span>Find a variety of property that suits you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <SearchBar/>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"5rem", opacity:0}} animate={{x:"0", opacity:1}} transition={{
                        duration:4,
                        type: "spring"
                    }} className="image-container">
                    <img src="./hero-image.png" alt="image" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero