import React, { useEffect } from "react";
import "./RandomCard.css";
import { useState } from "react";

export const RandomCard = (props) => {
  return (
    <div className="imageCard">
      <div className="randomImage-Wrapper">
        <img className="randomImage" alt="randomPhoto" src={props.photo} />
      </div>
      <div className="randomImage-content">
        <p>gggfgffgfg</p>
        <p>dndfdnfdc</p>
      </div>
    </div>
  );
};
