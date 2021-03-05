import React from "react";
import ReactDOM from "react-dom";
import "./search.css";

import { BrowserRouter as Router } from "react-router-dom";

const SearchList = ({tenantList=[]}) => {
  return (
    <>
    { tenantList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchList