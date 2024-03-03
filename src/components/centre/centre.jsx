import { myFetchFunc } from "../../utils/fetchImages";
import { RandomCard } from "../RandomCard/RandomCard";
import { FullImageCard } from "../FullImageCard/FullImageCard";
import { UserCard } from "../UserCard/UserCard";
import "./Centre.css";
import { useState, useEffect } from "react";

export const Centre = (props) => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [getFullPhoto, setGetFullPhoto] = useState(false);
  const [getPhotographer, setGetPhotographer] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    randomFunc();
    console.log(getFullPhoto);
  }, []);

  const randomFunc = async () => {
    const photos = await myFetchFunc();
    const newArray = [...photos];
    setRandomPhotos(newArray);
  };
  //
  const clickPhoto = (item) => {
    if (props.user.username) {
      setGetFullPhoto(true);
      console.log(!getFullPhoto);
      setPhotoUrl(item.imageURLs.regular);
      setPhotographer(item.photographer_name);
      setLikes(item.likes);
    }
  };

  const clickPhotographer = () => {
    setGetPhotographer(!getPhotographer);
    console.log(photographer);
    console.log(getPhotographer);
  };

  const backToCentre = () => {
    setGetFullPhoto(false);
  };

  const backFromUserCard = () => {
    setGetPhotographer(false);
  };

  const fullImgToUserCard = () => {
    setGetPhotographer(!getPhotographer);
    console.log(photographer);
  };

  //
  return (
    <div className="centre">
      {!getFullPhoto ? (
        props.photos === 0 ? null : (
          randomPhotos.map((item, index) => {
            return (
              <RandomCard
                key={index}
                photo={item.imageURLs.small}
                likes={item.likes}
                clickPhoto={() => clickPhoto(item)}
                clickPhotographer={() => clickPhotographer()}
              />
            );
          })
        )
      ) : !getPhotographer ? (
        <FullImageCard
          backToCentre={backToCentre}
          fullPhoto={photoUrl}
          photographer={photographer}
          likes={likes}
          fullImgToUserCard={fullImgToUserCard}
        />
      ) : (
        <UserCard
          backFromUserCard={backFromUserCard}
          photographer={photographer}
        ></UserCard>
      )}
    </div>
  );
};
