import React from "react";
import { Player } from "video-react";
import "../style/video.css";

export class Video extends React.Component {
  render() {
    return (
      <div className="item3">
        <Player controls autostart autoPlay src={this.props.src} />
      </div>
    );
  }
}
