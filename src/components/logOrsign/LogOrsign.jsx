import React from "react";
import "./LogOrSign.css";
import { LogIn } from "../logIn/Login";
import { SignUp } from "../signUp/signUp";

export const LogOrSign = ({ setUser }) => {
  return (
    <div className="logOrSignContainer">
      <LogIn setUser={setUser} />
      <SignUp setUser={setUser} />
    </div>
  );
};
