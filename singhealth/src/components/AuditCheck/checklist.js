import React from "react";
import ReactDOM from "react-dom";
import "./auditCheck.css";
import { FnbTable } from "../fnbTable";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const Checklist = () => {
  return (
    <div>
      <h1>Audit No. 1</h1>
      <p className="viewDetails">View Tenant Details</p>
      <h4>for Tenant A</h4>
      <h3>Safety</h3>
      <div className="tableContainer">
        <FnbTable />
      </div>
      <h3>Health</h3>
      <div className="tableContainer">
        <FnbTable />
      </div>
      <h3>Uploaded Photos</h3>
    </div>
  );
};

export default Checklist;

ReactDOM.render(<Checklist />, document.getElementById("root"));
