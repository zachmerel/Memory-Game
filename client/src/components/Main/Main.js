import React, { Component } from "react";
import Card from "../Card/Card";
import Img from '../../Services/Img'
import "./style.css";

class Main extends Component {
  state = {
    image: ""
  };

  //trying to load a images to put on my card here
LoadImg = () => {
    Img.getImgFile()
      .then(res =>
        this.setState({
          image: //files[i] from images directory
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="grid container ">
        <div className="row">
          <div className="grid-box col-md-3">
            <Card image={this.state.image} />
          </div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
        </div>
        <div className="row">
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
        </div>
        <div className="row">
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
        </div>
        <div className="row">
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
        </div>
        <div className="row">
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
          <div className="grid-box col-md-3">X</div>
        </div>
      </div>
    );
  }
}

export default Main;
