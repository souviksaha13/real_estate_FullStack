import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './Properties.css'
import { useProperties } from '../../Hooks/useProperties'

const Properties = () => {

  //Using a custom hook using reactQuery
  const {data, isError, isLoading} = useProperties()
  return (
    <div className="wrapper">
      <div className="paddings innerWidth flexColCenter properties-container">
        <SearchBar/>
      </div>
    </div>
  )
}

export default Properties