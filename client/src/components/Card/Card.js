//dependencies and import files
import React from "react";
import "./style.css";

//returns the Card component with the image,name and id props
const Card = props => {
  return (
    <div
      key={props.id}
      onClick={() => {
        (props.handleClick(props.id));
      }}
      className="cardStyle"
    >
      <img src={props.image} alt={props.name} id={props.id} />
    </div>
  );
};

export default Card;
