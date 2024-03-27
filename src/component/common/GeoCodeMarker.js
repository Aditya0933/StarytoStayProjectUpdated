// import React, { useEffect, useState } from 'react'
// import { Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet'
// import "leaflet/dist/leaflet.css"
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import * as ELG from 'esri-leaflet-geocoder'

// let DefaulIcon = L.icon ({
//     iconUrl : icon, 
//     shadowUrl: iconShadow
// })
// L.Marker.prototype.options.icon = DefaulIcon


// const GeoCoderMarker = ({address}) => {

//     const map = useMap()
//     const [position, setPosition] = useState([26.462692,80.323457])

//     useEffect(()=> {
//         ELG.geocode().text(address).run((err, results, response)=> {
//             if(results?.results?.length > 0){
//                 const {lat, lng} = results?.results[0].latlng;
//                 console.log(lat,lng);
//                 setPosition([lat, lng])
//             }
//         })
//         map.flyTo(position, 10)
//     },)
// //AIzaSyCPzeZfdw1z7w7_OFAS62DmVYK-UZmqHgg
//   return (
//     <Marker position={position} icon={DefaulIcon}>
//         <Popup/>
//     </Marker>
//   )
// }

// export default GeoCoderMarker

// i



import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([26.462692, 80.323457]);

  useEffect(() => {
    console.log(address);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            address
          )}&key=060105f16a72453d9a449475a4b7cfdd`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.results?.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            setPosition([lat, lng]);
          } else {
            console.error('Geocoding error: No results found.');
          }
        } else {
          console.error('Error fetching geocoding data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching geocoding data:', error);
      }
    };
    fetchData();
  }, [address, map]);

  useEffect(()=>{
    map.flyTo(position, 15);
  },[position])

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup />
    </Marker>
  );
};

export default GeoCoderMarker;
