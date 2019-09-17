import React from "react";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import "../Assets/css/Player.css";

const Video = props => {

  const route= props.route.toString()

  return (
    <div className="player-wrapper">
      <Player src={route} className="react-player" width="100%" height="100%" />
    </div>
  );
};
export default Video;
