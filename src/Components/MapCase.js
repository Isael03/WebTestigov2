import React from 'react'
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapCase = (props)=>{
  const {latitud, longitud} = props
  return(   
  <Map
    google={props.google}
     style={{ width: "100%", height: "97%"}} 
    className={"map"}
    initialCenter={{ lat:latitud, lng: longitud}}
    zoom={18}
    onClick={props.onMapClicked}
  >
    <Marker
      title={"SUCESO"}
      name={"COPI"}
      position={{ lat: latitud, lng: longitud }}
    />
  </Map>
  )
}
   

  


export default GoogleApiWrapper({
    apiKey: "AIzaSyBzM2Wvl5NcJZ2Xz8nmGlp6Ij7dD4KbGF4"
  })(MapCase);