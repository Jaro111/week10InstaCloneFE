import myFetchFunc from "../../utils/fetchImages";
import { RandomCard } from "../RandomCard/RandomCard";
import "./Centre.css";
import { useState, useEffect } from "react";

export const Centre = (props) => {
  const [randomPhotos, setRandomPhotos] = useState([]);

  useEffect(() => {
    randomFunc();
  }, []);

  const randomFunc = async () => {
    const photos = await myFetchFunc();
    const newArray = [...photos];
    setRandomPhotos(newArray);
    console.log(newArray[0].imageURLs.small);
    console.log(randomPhotos);
  };

  return (
    <div className="centre">
      {props.photos === 0
        ? null
        : randomPhotos.map((item, index) => {
            return <RandomCard key={index} photo={item.imageURLs.small} />;
          })}
    </div>
  );
};
