import React from 'react'
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapCase = (props)=>(
      <Map
    google={props.google}
     style={{ width: "100%", height: "100%"}} 
    className={"map"}
    initialCenter={{ lat:-27.3664, lng: -70.3331}}
    zoom={18}
    onClick={props.onMapClicked}
  >
    <Marker
      title={"SUCESO"}
      name={"COPI"}
      position={{ lat: -27.3664, lng: -70.3331 }}
    />
  </Map>

  
)

export default GoogleApiWrapper({
    apiKey: "AIzaSyBzM2Wvl5NcJZ2Xz8nmGlp6Ij7dD4KbGF4"
  })(MapCase);