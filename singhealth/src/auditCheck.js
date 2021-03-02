import React from "react";
import "./index.css";
import Checklist from "./checklist.js";
import UploadedPhoto from "./UploadPhoto";

import { Link } from "react-router-dom";
function auditCheck() {
  return (
    <div className="tableContainer">
      {/* <TenantsList /> */}
      <Link to="/Checklist" component={Checklist}>
        Checklist
      </Link>
      <Link to="/UploadedPhoto" component={UploadedPhoto}></Link>
    </div>
  );
}

export default auditCheck;
