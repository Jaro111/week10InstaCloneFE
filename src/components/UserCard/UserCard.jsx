import "./UserCard.css";
import { getPhotographer } from "../../utils/fetchImages";
import { getPhotographerPhotos } from "../../utils/fetchImages";
import { useState } from "react";
import { useEffect } from "react";

export const UserCard = (props) => {
  const [userData, setUserData] = useState({});
  const [userPhoto, setUserPhoto] = useState("");

  console.log(userPhoto);
  useEffect(() => {
    photographerDataFunc();
  }, []);

  const photographerDataFunc = async () => {
    const data = await getPhotographer(props.photographer);
    setUserData(data);
    userData.profile_image > 0
      ? setUserPhoto(userData.profile_image.small)
      : null;

    console.log(data);
  };

  return (
    <div className="UserCard">
      <button onClick={props.backFromUserCard}>back</button>
      <div className="UserDetails">
        <p>User name: {props.photographer}</p>
        <p>Name: {userData.name}</p>
        <p>Likes: {userData.likes}</p>
      </div>
      <div className="UserPhotos"></div>
    </div>
  );
};
