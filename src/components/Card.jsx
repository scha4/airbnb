import react from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-container">
      {props.item.openSpots === 0 && <div className="badge">{badgeText}</div>}
      {props.item.location === "Online" && (
        <div className="badge2">{badgeText}</div>
      )}

      <img src={props.item.coverImg} className="card-img"></img>
      <div className="stats">
        <img src="./img/icon.jpg" className="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  );
}
