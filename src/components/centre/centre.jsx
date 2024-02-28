import { count } from "mathjs";
import { RandomCard } from "../RandomCard/RandomCard";
import "./Centre.css";
import { useState, useEffect } from "react";

export const Centre = (props) => {
  return (
    <div className="centre">
      {props.photos === 0
        ? null
        : props.photos.map((item, index) => {
            return <RandomCard key={index} photo={item.imageURLs.small} />;
          })}
    </div>
  );
};
