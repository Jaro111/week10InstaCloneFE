import "./RandomCard.css";

export const RandomCard = (props) => {
  return (
    <div className="imageCard">
      <div className="randomImage-Wrapper">
        <button className="photoButton" onClick={props.clickPhoto}>
          <img className="randomImage" alt="randomPhoto" src={props.photo} />
        </button>
      </div>
      <div className="randomImage-content">
        <button className="photographerBtn" onClick={props.clickPhotographer}>
          {props.photographer}
        </button>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};
