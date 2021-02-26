import React from "react";
import { Player } from "video-react";
import "../style/video.css";

export class Video extends React.Component {
  render() {
    return (
      <div className="item3">
        <Player controls autostart autoPlay src={this.props.src} />
        <p>Safety is a top priority, and there are many reasons to get vaccinated.</p>
      </div>
    );
  }
}
