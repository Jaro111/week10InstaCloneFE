import React, { useEffect } from "react";
import "./RandomCard.css";
import { useState } from "react";

export const RandomCard = (props) => {
  return <img alt="randomPhoto" src={props.photo} />;
};
