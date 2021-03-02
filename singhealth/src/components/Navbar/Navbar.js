import React, { Component } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const changeColor = () => {
    console.log("test");
  };
  return (
    <nav className="">
      <IconContext.Provider value={{ color: "#4460a9", size: "40px" }}>
        <ul className="NavbarItems">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={changeColor}>
                <Link to={item.url}>{item.image}</Link>
              </li>
            );
          })}
        </ul>
      </IconContext.Provider>
      {/* <div className="MenuIcon" onClick={this.handleClick}>
          <a href="#">
            <i className="search"> &nbsp;&nbsp;&nbsp;&nbsp;</i>
          </a>
          <a href="#">
            <i className="home"></i>
          </a>
          <a href="#">
            <i className="avatar"></i>
          </a> */}
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
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
