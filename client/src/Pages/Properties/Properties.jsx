import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Properties.css";
import { useProperties } from "../../Hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { PropertyCards } from "../../Components/PropertyCards/PropertyCards";
import { useState } from "react";

const Properties = () => {
  //Using a custom hook using reactQuery
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("")
  
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="paddings innerWidth flexColCenter properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {data ? (
            data.filter(
              (property)=>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
              
            ).map((card, i) => <PropertyCards card={card} key={i} />)
          ) : (
            <span>No data available</span> // Display a message when data is not available
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
