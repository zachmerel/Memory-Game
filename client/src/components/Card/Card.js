import React from "react";
import "./style.css";

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name}/>
    </div>
  );
};

export default Card;
