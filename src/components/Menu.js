import React from "react";
import '../style/video.css';

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const text = e.target.value;
        this.props.chooseVideo(text);
    }

  render() {
    return (
        <div className="btn-grid-container">
          <button value="about" onClick={this.handleClick}>ABOUT THE VACCINE</button>
          <button value="why" onClick={this.handleClick}>WHY GET THE VACCINE</button>
          <button value="faqs" onClick={this.handleClick}>FREQUENTLY ASKED QUESTIONS</button>
          <button value="side_effects" onClick={this.handleClick}>VACCINE SIDE EFFECTS</button>
      </div>
    );
  }
}
