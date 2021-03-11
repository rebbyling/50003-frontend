import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import search from "./components/Search/search";
import avatar from "./components/Avatar/avatar";
import home from "./components/Home/Home.js";
import auditCheck from "./components/AuditCheck/auditCheck.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function App() {
  return (
    <Router>
      {/* <div className="tableContainer">
        <TenantsList />
        <Link to="/Checklist" component={Checklist}>
          Checklist
        </Link>
        <Link to="/UploadedPhoto" component={UploadedPhoto}></Link>
      </div> */}
      <Navbar />
      <Switch>
        <Route path="/search" component={search} />
        <Route path="/" exact component={home} />
        <Route path="/avatar" component={avatar} />
      </Switch>
    </Router>
  );
}

export default App;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
