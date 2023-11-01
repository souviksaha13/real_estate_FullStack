import React from 'react'
import './NoDataImage.css'

export const NoDataImage = ({title}) => {
  return (
    <>
        <div className='innerWidth flexColCenter no-data-container'>
            <img src="no data.png" alt="No Data"/>
            <span className="orangeText">You have not added any {title} yet</span>
        </div>
    </>
  )
}
