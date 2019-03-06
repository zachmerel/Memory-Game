import React from "react";
import "./style.css";

const Card = props => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    />
  );
};

export default Card;
