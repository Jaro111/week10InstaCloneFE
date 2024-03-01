import myFetchFunc from "../../utils/fetchImages";
import { RandomCard } from "../RandomCard/RandomCard";
import "./Centre.css";
import { useState, useEffect } from "react";

export const Centre = (props) => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [photoId, setPhotoId] = useState("");

  useEffect(() => {
    randomFunc();
  }, []);

  const randomFunc = async () => {
    const photos = await myFetchFunc();
    const newArray = [...photos];
    console.log(newArray);
    setRandomPhotos(newArray);
  };
  //
  const clickPhoto = (item) => {
    setPhotoId(item.id);
    console.log(photoId);
    console.log(props.user);
    console.log("photographerId: ", item.photographer_id);
  };
  //
  return (
    <div className="centre">
      {props.photos === 0
        ? null
        : randomPhotos.map((item, index) => {
            return (
              <RandomCard
                key={index}
                photo={item.imageURLs.small}
                photoReg={item.imageURLs.regular}
                photoId={item.id}
                photographer={item.photographer_name}
                photographerId={item.photographer_id}
                likes={item.likes}
                clickPhoto={() => clickPhoto(item)}
              />
            );
          })}
    </div>
  );
};
