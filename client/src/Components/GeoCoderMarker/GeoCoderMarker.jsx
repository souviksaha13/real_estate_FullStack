import React from 'react'
import { useState, useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder'

// Create a default Leaflet icon with custom marker and shadow images
let DefaulIcon = L.icon ({
    iconUrl : icon, 
    shadowUrl: iconShadow
})
// Set the default icon for all markers
L.Marker.prototype.options.icon = DefaulIcon

const GeoCoderMarker = ({address}) => {

    // Access the map using the useMap hook
    const map = useMap()

    // Initialize the marker's position state with default coordinates
    const [position, setPosition] = useState([60, 19])

    // Use useEffect to perform geocoding when the 'address' prop changes
    useEffect(()=> {
        // Use the Esri Leaflet Geocoder(ELG) to geocode the provided address
        ELG.geocode().text(address).run((err, results, response)=> {
            if(results?.results?.length > 0){
                const {lat, lng} = results?.results[0].latlng

                // Update the marker's position with the geocoded coordinates lat=>latitude and lng=>longitude
                setPosition([lat, lng])

                // Fly to the geocoded location on the map with a zoom level of 10
                map.flyTo([lat, lng], 10)
            }
        })
    }, [address]); // This effect runs whenever the 'address' prop changes

  return (
    <Marker position={position} icon={DefaulIcon}>
        <Popup/>
    </Marker>
  )
}

export default GeoCoderMarker