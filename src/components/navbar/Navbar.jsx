import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { LogOrSign } from "../logOrsign/LogOrsign";

export const Navbar = ({ setUser }) => {
  return (
    <div className="navbar">
      <div className="navLeft"></div>
      <div className="navCentre">
        <h2>BLABLABLA</h2>
      </div>
      <div className="navRight">
        <LogOrSign setUser={setUser} />
      </div>
    </div>
  );
};
