import React from "react";
import ReactDOM from "react-dom";
import "./search.css";

import { BrowserRouter as Router } from "react-router-dom";

function Search() {
  return <div>search pg</div>;
}

export default Search;

ReactDOM.render(
  <Router>
    <Search />
  </Router>,
  document.getElementById("root")
);
