import "./FullImageCard.css";

export const FullImageCard = (props) => {
  return (
    <div className="fullImageCard">
      <button className="backToCentreBtn" onClick={props.backToCentre}>
        BACK
      </button>
      <div className="fullImage-Wrapper">
        <img className="randomImage" alt="randomPhoto" src={props.fullPhoto} />
      </div>
      <div className="fullImag-content">
        <button className="photographerBtn" onClick={props.fullImgToUserCard}>
          {props.photographer}
        </button>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};
