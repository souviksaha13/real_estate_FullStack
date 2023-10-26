import React from 'react'
import { Contact } from "../Components/Contact/Contact";
import Hero from "../Components/Hero/Hero";
import { Residencies } from "../Components/Residencies/Residencies";
import { Value } from "../Components/Value/Value";
import { GetStarted } from "../Components/GetStarted/GetStarted";

export const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
          <Hero />
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
    </div>
  )
}
