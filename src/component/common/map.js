import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import GeoCoderMarker from './GeoCodeMarker'
const Map = ({address, city, country}) => {
  return (
    <MapContainer
    center={[0,0]}
    zoom={1}
    scrollWheelZoom={false}
    style={{
        height: "40vh",
        width: "100%",
        zIndex: 0,
       
    }}
    >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  )
}

export default Map