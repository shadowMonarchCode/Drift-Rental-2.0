import React from "react";

const Header = () => {
  return (
    <div id="header">
      {/* Logo with homepage link */}
      <div className="logo-space">
        <div className="image"></div>
        <p>Drift Rental</p>
      </div>

      <div style={{ display: "flex", gap: "32px" }}>
        {/* Toggle button */}
        <button>|||</button>

        {/* Header links */}
        <div className="nav-links">
          <ul>
            <li className="active">Home</li>
            <li>Rent</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Profile circle */}
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Header;
