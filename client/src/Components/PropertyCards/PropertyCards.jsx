import React from 'react'
import './PropertyCards.css'
import {AiFillHeart} from 'react-icons/ai'

export const PropertyCards = ({card}) => {
  return (
    <div className="flexColStart r-card">
        <AiFillHeart size={24} color='white'/>
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span className="orangeText">$</span>
        <span className='secondaryText'>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  )
}
