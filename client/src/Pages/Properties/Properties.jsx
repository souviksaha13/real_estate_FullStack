import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Properties.css";
import { useProperties } from "../../Hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { PropertyCards } from "../../Components/PropertyCards/PropertyCards";

const Properties = () => {
  //Using a custom hook using reactQuery
  const { data, isError, isLoading } = useProperties();
  console.log(data)
  
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
        <SearchBar />

        <div className="paddings flexCenter properties">
          {data ? (
            data.map((card, i) => <PropertyCards card={card} key={i} />)
          ) : (
            <span>No data available</span> // Display a message when data is not available
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
