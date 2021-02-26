import React from "react";
import '../style/video.css';
// import { Player } from "video-react";
import { Video } from "./Video";

export const VideoList = ({videos, onVideoSelect}) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <Video
        key={video.etag}
        video={video}
      />
  );
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList;

// export class VideoList extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(e){
//         const text = e.target.value;
//         this.props.chooseVideo(text);
//     }

//   render() {
//     return (
//         <div className="item4">
//           <Player controls autostart autoPlay src={this.props.src} />
//           <p>Are you a candidate...</p>
//           <Player controls autostart autoPlay src={this.props.src} />
//           <p>How safe is the...</p>
//           <Player controls autostart autoPlay src={this.props.src} />
//           <p>Understanding your...</p>
//       </div>
//     );
//   }
// }
