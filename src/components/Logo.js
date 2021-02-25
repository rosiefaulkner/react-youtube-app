import React from "react";
import '../style/video.css';

const logo = {
    src: 'https://www.jencaremed.com/themes/chenmaster/public/img/logos/jencare-logo.svg',
    alt:'logo',
    width: '250px',
    height: 'auto',
};

export class Logo extends React.Component {
  render() {
    return (
        <img src={logo.src} alt={logo.alt} height={logo.height} width={logo.width} />
    );
  }
}
