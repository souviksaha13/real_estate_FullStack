import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import './Property.css'
import { FaShower } from "react-icons/fa";          //Fashower is used for bathroom icon
import { AiTwotoneCar } from "react-icons/ai";         //for parking icon
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";      //for address and room icon
import { Map } from "../../Components/Map/map";

export const Property = () => {
    const {pathname} = useLocation();
    const id = pathname.split("/").slice(-1)[0]
    console.log(id)
    const {data, isError, isLoading} = useQuery(
        "resd",
        ()=> getProperty(id)
    )

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
    
    return( 
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
            
                {/*Like Button */}
                <div className="like">
                    <AiFillHeart size={24} color='white'/>
                </div>

                {/*image */}
                <img src={data?.image} alt="" srcset="" />

                <div className="flexCenter property-details">
          
          {/* left */}
                <div className="flexColStart left">
                    {/* header */}
                    <div className="flexStart head">
                        <span className="primaryText">{data?.title}</span>
                        <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                            $ {data?.price}
                        </span>
                    </div>

                    {/* facilities */}
                    <div className="flexStart facilities">
                        {/* bathrooms */}
                        <div className="flexStart facility">
                            <FaShower size={20} color="#1F3E72" />
                            <span>{data?.facilities?.bathrooms} Bathrooms</span>
                        </div>

                        {/* parkings */}
                        <div className="flexStart facility">
                            <AiTwotoneCar size={20} color="#1F3E72" />
                            <span>{data?.facilities.parkings} Parking</span>
                        </div>

                        {/* rooms */}
                        <div className="flexStart facility">
                            <MdMeetingRoom size={20} color="#1F3E72" />
                            <span>{data?.facilities.bedrooms} Room/s</span>
                        </div>
                    </div>

                    {/* description */}

                    <span className="secondaryText" style={{ textAlign: "justify" }}>
                    {data?.description}
                    </span>

                    {/* address */}

                    <div className="flexStart" style={{ gap: "1rem" }}>
                    <MdLocationPin size={25} />
                    <span className="secondaryText">
                        {data?.address}{" "}
                        {data?.city}{" "}
                        {data?.country}
                    </span>
                    </div>
                </div>

            {/*Right */}
                <div className="map">
                    <Map address={data?.address} city={data?.city} country={data?.country}/>
                </div>
                </div>
            </div>
        </div>
    );
};
