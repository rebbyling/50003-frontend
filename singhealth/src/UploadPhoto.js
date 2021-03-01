import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import gallery from "./assets/galleryIcon.svg";
import cameraIcon from "./assets/cameraIcon.svg";
import GallerySelect from "./SelectFromGalleyPopup";

export default class UploadPhotos extends React.Component {
  state = {
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div className="upload">
        {/* <button onClick={this.togglePop}>
          <img className="uploadPopup" src={cameraIcon}></img>
          <h4 className="uploadPopup">Take Picture with Camera </h4>
        </button>
         */}
        <button className="Gallery" onClick={this.togglePop}>
          <img
            className="galleryMargin"
            src={gallery}
            alt="upload from gallery"
          ></img>
          <h4 className="galleryMargin">Select from Gallery</h4>
        </button>
        {this.state.seen ? <GallerySelect toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

ReactDOM.render(<UploadPhotos />, document.getElementById("root"));
