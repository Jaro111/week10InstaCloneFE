import React from "react";
import "./navbarLogged.css";

export const NavbarLogged = (props) => {
  return (
    <div className="navbar">
      <div className="navLeft"></div>
      <div className="navCentre">
        <h2>BLABLABLA</h2>
      </div>
      <div className="navRightLogged">
        <p className="userDetailsNavbar">User: {props.user}</p>
      </div>
    </div>
  );
};