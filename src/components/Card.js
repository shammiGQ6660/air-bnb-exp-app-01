import React from "react";
//import expImg01 from "../assets/images/exp-image-01.png";
import starImg01 from "../components/images/star-1.png";

export default function Card(cardDetails) {
  // const ROOT_URL = "http://localhost:3000";
  return (
    <div className="card">
      <img src={cardDetails.img} className="card--image" alt="exp" />
      <div className="card--stats">
        <img src={starImg01} className="card--star" alt="star" />
        <span>{cardDetails.rating}</span>
        <span className="gray">({cardDetails.reviewCount}) *</span>
        <span className="gray">{cardDetails.country}</span>
      </div>
      <p>{cardDetails.title}</p>
      <p>
        <span className="bold">From ${cardDetails.price} </span> / Person
      </p>
    </div>
  );
}
