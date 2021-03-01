import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";

export default class GallerySelect extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  state = {
    selectedFile: null,
    displayFile: null,
  };
  fileSelectedHandler = (event) => {
    console.log(event);
    this.setState({
      displayFile: URL.createObjectURL(event.target.files[0]),
      selectedFile: event.target.files[0],
    });
  };
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("", fd) //use end point of mySQL
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="popup">
        <input type="file" onChange={this.fileSelectedHandler} />
        <img src={this.state.displayFile} />
        <button className="uploadButton" onClick={this.fileUploadHandler}>
          Upload
        </button>
      </div>
    );
  }
}
ReactDOM.render(<GallerySelect />, document.getElementById("root"));
