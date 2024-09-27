import React from "react";
import ReactDOM from "react-dom";
import "./avatar.css";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";

function Avatar() {
  return (
    <>
      <h1>PROFILE</h1>
      <div className="text">
        <BsBoxArrowRight size={35} />
        <h3 className="edit">Log Out</h3>
      </div>
      <div className="text">
        <AiOutlineUserAdd size={35} />
        <h3 className="edit">Add New Tenant</h3>
      </div>
    </>
  );
}

export default Avatar;

ReactDOM.render(
  <Router>
    <Avatar />
  </Router>,
  document.getElementById("root")
);
