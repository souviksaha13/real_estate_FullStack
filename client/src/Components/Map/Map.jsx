import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "../GeoCoderMarker/GeoCoderMarker";

export const Map = ({ address, city, country }) => {
  return (

    // Create a map container using MapContainer component from react-leaflet
            //center = {[53.35, 18.8]} => initial center coordinates of the map
            //zoom={1} => initial zoom level of the map
            //scrollWheelZoom={false} => Disable the ability to zoom in/out with the scroll wheel
    <MapContainer
      center={[53.35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
      }}
    >

    {/* Add a TileLayer component to display the map tiles using OpenStreetMap as the source */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Add a GeoCoderMarker component with the combined address, city, and country as a single string */}
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};
