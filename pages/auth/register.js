import React from "react";
import Register from "../../components/Register";

export default function register() {
  return (
    <div id="auth">
      <div className="left-fixed">
        <div className="logo"></div>
        <p>Welcome to</p>
        <h1>Drift Rental</h1>
      </div>
      {/* <div><Image src={design} alt="Design" /></div> */}
      <Register />
      {/* <div><Image src={design} alt="Design" /></div> */}
    </div>
  );
}
