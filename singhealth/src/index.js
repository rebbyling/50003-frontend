import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Checklist from "./checklist.js";
import UploadedPhoto from "./UploadPhoto";
import PlusBtn from "./PlusBtn";
import Navbar from "./components/Navbar/Navbar";
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
        <Link to="/UploadedPhoto" component={UploadedPhoto}></Link>
      </div>
      <Navbar />
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
