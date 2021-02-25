import React from "react";
import { Searchbar } from './Searchbar';
import '../style/video.css';

export class Header extends React.Component {
  render() {
    return (
        <div className="item1">
            <div className="header">
                <Searchbar />
            </div>
        </div>
    );
  }
}
