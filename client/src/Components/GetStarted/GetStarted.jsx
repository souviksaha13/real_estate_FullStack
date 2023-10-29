import React from 'react'
import './GetStarted.css'

export const GetStarted = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling effect
        });
      };

  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">
                    Get Started with Homyz
                </span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us.
                <br/>
                    Find your residence soon.
                </span>
                <button className='button' onClick={()=>scrollToTop()}>
                    {/*In the vdo this button is for mailing */}
                    Get Started
                </button>
            </div>
        </div>
    </section>
  )
}
