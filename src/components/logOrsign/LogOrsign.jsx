import React from "react";
import "./LogOrSign.css";
import { useState } from "react";
import { LogIn } from "../logIn/Login";
import { SignUp } from "../signUp/signUp";

export const LogOrSign = ({ setUser }, { setIslogged }) => {
  const [log, setLog] = useState(false);
  const [sign, setSign] = useState(false);

  const logInClick = () => {
    setLog(true);
    setSign(false);
  };

  const signUpClick = () => {
    setSign(true);
    setLog(false);
  };

  return (
    <div className="logOrSignContainer">
      {!log && !sign ? (
        <div className="LogSIgnButtons-wrapper">
          <button className="LogSIgnButtons" onClick={logInClick}>
            Log in
          </button>
          <button className="LogSIgnButtons" onClick={signUpClick}>
            Sign Up
          </button>
        </div>
      ) : log && !sign ? (
        <div className="logSignButtons">
          <LogIn setUser={setUser} />
          <button className="buttonInState" onClick={signUpClick}>
            Sign Up
          </button>
        </div>
      ) : (
        <div className="logSignButtons">
          <SignUp setUser={setUser} />
          <button className="buttonInState" onClick={logInClick}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};
