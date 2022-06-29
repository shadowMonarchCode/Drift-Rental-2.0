import React from "react";
import LoginPage from "../../components/Login.jsx";

const Login = () => {
  return (
    <div id="auth">
        <div className="left-fixed">
          <div className="logo"></div>
          <p>Welcome to</p>
          <h1>Drift Rental</h1>
        </div>
        {/* <div><Image src={design} alt="Design" /></div> */}
        <LoginPage />
        {/* <div><Image src={design} alt="Design" /></div> */}
    </div>
  );
};

export default Login;
