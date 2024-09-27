import React from "react";
import ReactDOM from "react-dom";
import "./search.css";
import searchIcon from "./eva_search-outline.svg";

import { BrowserRouter as Router } from "react-router-dom";

const SearchBar = ({ keyword, /*setKeyword */}) => {
  return (
    <form className='flex'>
      <input
        className="searchBar "
        key="random1"
        value={keyword}
        placeholder={"Search Tenant, Location..."}
        // onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="searchButton " type="submit">
        <img src={searchIcon} alt="Search Button" />
      </button>
    </form>
  );
};

export default SearchBar;
