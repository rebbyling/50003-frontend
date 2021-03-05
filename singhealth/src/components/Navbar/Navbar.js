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
    </nav>
  );
}

export default Navbar;
