import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="MenuIcon" onClick={this.handleClick}>
          <a href="#">
            <i className="search"> &nbsp;&nbsp;&nbsp;&nbsp;</i>
          </a>
          <a href="#">
            <i className="home"></i>
          </a>
          <a href="#">
            <i className="avatar"></i>
          </a>
          {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <img
                  src={require("../Navbar/" + item.image)}
                  alt={item.title}
                />
                <a className={MenuItems.cName} href={item.url}>
                  {item.title}
                  {item.cName}
                </a>
              </li>
            );
          })} */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
