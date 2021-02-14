import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { TenantsList } from "./components/TenantsList";
import { FnbTable } from "./components/fnbTable";
import Checklist from "./checklist.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function App() {
  return (
    <BrowserRouter>
      <div className="tableContainer">
        {/* <TenantsList /> */}
        <Link to="/Checklist" component={Checklist}>
          Checklist
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
