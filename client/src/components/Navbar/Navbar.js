//dependencies and import files 
import React from "react";
// import Score from '../Score/Score';
import "./style.css";

//renders the navbar with 3 elements navbar-text and score components still incomplete
const Navbar = (props) => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="title-element navbar-brand ">Cubs Click Game</a>
      <span className="navbar-text navbar-element">Navbar text with an inline element</span>
      <span className='navbar-element'>Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
  );
};

export default Navbar;
