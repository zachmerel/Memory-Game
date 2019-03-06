//dependencies and importfiles
import React from "react";
import "./style.css";

//renders the header as a bootstrap jumbotron
const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Memory Click Game</h1>
        <h3 className="lead">
          Click on an image to earn points, but don't click on any of them more
          than once.
        </h3>
      </div>
    </div>
  );
};

export default Header;
