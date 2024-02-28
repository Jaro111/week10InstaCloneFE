import React, { useEffect } from "react";
import "./RandomCard.css";
import { useState } from "react";

export const RandomCard = (props) => {
  return (
    <div className="imageCard">
      <div className="randomImage-Wrapper">
        <button className="photoButton">
          <img className="randomImage" alt="randomPhoto" src={props.photo} />
        </button>
      </div>
      <div className="randomImage-content">
        <button className="photographerBtn">{props.photographer}</button>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};
