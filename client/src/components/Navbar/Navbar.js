//dependencies and import files
import React from "react";
import "./style.css";

//renders the navbar with 3 elements
const Navbar = props => {
  return (
    // <div className="navbar">
      <nav className='navbar sticky-top'>
        <span className="navbar-element">
          <a className="title-element navbar-brand ">Cubs Click Game</a>
        </span>
        <span className={props.navMsgColor}>{props.message}</span>

        <span className="navbar-element">
          Score: {props.score} | Top Score: {props.topScore}
        </span>
      </nav>
    // </div>
  );
};

export default Navbar;
