import React from "react";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import "../Assets/css/Player.css";

const Video = props => {
  return (
    <div className="player-wrapper">
      <Player className="react-player" width="100%" height="100%">
        <source /* src="/Images/Most Epic Music Ever׃ Mosane.mp4" */ {...props}/>
      </Player>
    </div>
  );
};
export default Video;
