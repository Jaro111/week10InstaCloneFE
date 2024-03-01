import myFetchFunc from "../../../utils/fetchImages";
import { RandomCard } from "../../RandomCard/RandomCard";
import "./centreLogged.css";
import { useState, useEffect } from "react";

export const CentreLogged = (props) => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [photo, setPhoto] = useState("");

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
            return (
              <RandomCard
                key={index}
                photo={item.imageURLs.small}
                photographer={item.photographer_name}
                likes={item.likes}
                clickPhoto={props.clickPhoto}
                // displayPhoto={dispalyPhotoFunc}
              />
            );
          })}
    </div>
  );
};
