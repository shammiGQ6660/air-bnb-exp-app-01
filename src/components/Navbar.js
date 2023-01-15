import React from "react";
import logo from "../airBnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" alt="air-bnb-logo" src={logo} />
    </nav>
  );
}
