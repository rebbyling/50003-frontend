import plusBtn from "./assets/Picture Upload.svg";
import React, { Component } from "react";
import "./index.css";
import PopUp from "./UploadPhoto";

export default class PlusBtn extends React.Component {
  state = {
    visible: false,
  };

  showPopup = () => {
    this.setState({
      visible: !this.state.visible,
    });
    console.log("click");
  };
  render() {
    return (
      <div onClick={this.showPopup}>
        <img class="plusbtn" src={plusBtn} alt="upload pictures" />
        {this.state.visible ? <PopUp toggle={this.showPopup} /> : null}
      </div>
    );
  }
}
