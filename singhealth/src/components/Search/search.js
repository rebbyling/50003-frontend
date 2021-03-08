import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./search.css";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

import { BrowserRouter as Router } from "react-router-dom";
import { TenantsList } from "./TenantsList";

function Search() {
  return (
    <div>
      <h1 style={{ color: " #FF7C5E " }}>SEARCH</h1>
      <SearchBar />
      <TenantsList/>
    </div>
  );
}

export default Search;

ReactDOM.render(
  <Router>
    <Search />
  </Router>,
  document.getElementById("root")
);
