import react from "react";
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import Map from "./Map";

import React, { useRef, useState } from 'react';

const defaultcenter = [0,0];

const Getposition = () =>{
    const location = Map();

    return(
        
        <>
        {console.log("location " + location.coordinates.lat+ " " +location.coordinates.long)}
        {location.loaded && !location.error && (

        <MapContainer center={[location.coordinates.lat,location.coordinates.long]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
         
                <Marker position={[location.coordinates.lat,location.coordinates.long]}>
                    <Popup>
                        Here you are :-)
                    </Popup>
                </Marker>
        
        </MapContainer>
        )}
        </>
    )
    
}

export default Getposition;