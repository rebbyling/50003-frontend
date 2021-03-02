import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

function Avatar() {
  return <div>avatar pg</div>;
}

export default Avatar;

ReactDOM.render(
  <Router>
    <Avatar />
  </Router>,
  document.getElementById("root")
);
