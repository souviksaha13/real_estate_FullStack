import React from 'react'
import './PropertyCards.css'
import {AiFillHeart} from 'react-icons/ai'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { Heart } from '../Heart/Heart'

export const PropertyCards = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card" onClick={()=> navigate(`../properties/${card.id}`)}>
        <Heart id = {card?.id}/>
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span className="orangeText">$</span>
        <span className='secondaryText'>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length:15})}</span>
      <span className="secondaryText">{truncate(card.description, {length:80})}</span>
    </div>
  )
}
