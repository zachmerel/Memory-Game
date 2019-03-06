//dependencies and import files 
import React from "react";
import Score from '../Score/Score';
import "./style.css";

//renders the navbar with 3 elements navbar-text and score components still incomplete
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="navbar-brand navbar-element">Cubs Click Game</a>
      <span className="navbar-text navbar-element">Navbar text with an inline element</span>
      <span className='navbar-element'><Score /></span>
    </nav>
  );
};

export default Navbar;
