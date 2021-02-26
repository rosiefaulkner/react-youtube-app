// Libraries
import React from "react";
import "../style/video.css";

// Components
import { Video } from "./Video";
import { Menu } from "./Menu.js";
import { Header } from "./Header";
import { VideoList } from "./VideoList";
import { Footer } from "./Footer";

const VIDEOS = {
  about:
    "https://res.cloudinary.com/rosiefaulkner/video/upload/v1614226020/How_vaccines_work_against_COVID-19__Science_Simplified_ozgxmd.mp4",
  why:
    "https://res.cloudinary.com/rosiefaulkner/video/upload/v1614226450/yt1s.com_-_What_to_Expect_After_Getting_a_COVID19_Vaccine_360p_wbo0eu.mp4",
  faqs:
    "https://res.cloudinary.com/rosiefaulkner/video/upload/v1614226589/yt1s.com_-_Frequently_Asked_Questions_About_How_COVID19_Vaccines_Are_Made_360p_myurjw.mp4",
  side_effects:
    "https://res.cloudinary.com/rosiefaulkner/video/upload/v1614226679/yt1s.com_-_Vaccine_side_effects_are_actually_a_good_thing_360p_zfaytg.mp4",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.about };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }

  render() {
    return (
      <>
      <div className="grid-container">
        <Header />
        <Menu chooseVideo={this.chooseVideo} />
        <Video className="main" src={this.state.src} />
        <VideoList videos={this.state} />
        <Footer />
      </div>
      </>
    );
  }
}
