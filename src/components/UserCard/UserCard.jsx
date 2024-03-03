import "./UserCard.css";
import { getPhotographer } from "../../utils/fetchImages";
import { getPhotographerPhotos } from "../../utils/fetchImages";
import { RandomCard } from "../RandomCard/RandomCard";
import { FullImageCard } from "../FullImageCard/FullImageCard";
import { useState } from "react";
import { useEffect } from "react";

export const UserCard = (props) => {
  const [userData, setUserData] = useState({});
  const [userPhotos, setUserPhotos] = useState([]);
  const [userfullPhoto, setUserFullPhoto] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    photographerDataFunc();
    photographerPhotosFunc();
  }, []);

  const photographerDataFunc = async () => {
    const data = await getPhotographer(props.photographer);
    setUserData(data);
    console.log(data);
  };

  const photographerPhotosFunc = async () => {
    const photos = await getPhotographerPhotos(props.photographer);
    setUserPhotos(photos);
  };

  const clickPhoto = (item) => {
    setUserFullPhoto(!userfullPhoto);
    setPhotoUrl(item.imageURLs.regular);
  };

  const backToCentre = () => {
    setUserFullPhoto(!userfullPhoto);
  };
  return (
    <div className="UserCard">
      <div>
        <button
          style={{ display: !userfullPhoto ? "block" : "none" }}
          onClick={props.backFromUserCard}
        >
          back
        </button>
        <div className="UserDetails">
          <p>User name: {props.photographer}</p>
          <p>Name: {userData.name}</p>
          <p>Likes: {userData.likes}</p>
        </div>
        <div className="UserPhotos"></div>
      </div>
      <div className="centre">
        {!userfullPhoto ? (
          props.photos === 0 ? null : (
            userPhotos.map((item, index) => {
              return (
                <RandomCard
                  key={index}
                  photo={item.imageURLs.small}
                  likes={item.likes}
                  clickPhoto={() => clickPhoto(item)}
                />
              );
            })
          )
        ) : (
          <FullImageCard
            // backToCentre={backToCentre}
            fullPhoto={photoUrl}
            backToCentre={backToCentre}
          />
        )}
      </div>
    </div>
  );
};
