import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import gallery from "./assets/galleryIcon.svg";
import camera from "./assets/cameraIcon.svg";
import { render } from "@testing-library/react";
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
        <div>
          <img className="uploadPopup" src={camera}></img>
          <h4 className="uploadPopup">Take Picture with Camera </h4>
        </div>

        <button onClick={this.togglePop}>
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
