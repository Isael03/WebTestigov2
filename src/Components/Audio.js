import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import "../Assets/css/Player.css";

const Audio = ({src}) => {
  return (

      <ReactAudioPlayer src={src}
  controls />


  );
};

export default Audio;
