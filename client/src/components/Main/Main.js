import React, { Component } from "react";
import Card from "../Card/Card";
import cards from '../../Data/cards.json'
import "./style.css";

class Main extends Component {
  state = {
    cards,
  };

  render() {
    return (
      <div className='card-grid'>
      {this.state.cards.map(player => (
        <Card
          key={player.id}
          image={player.image}
        />
      ))}
      </div>
    );
  }
}

export default Main;

//not dynamic way of setting up grid
{/* <div className="grid container ">
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
</div> */}


  //trying to load a images to put on my card here
// LoadImg = () => {
//     Img.getImgFile()
//       .then(res =>
//         this.setState({
//           image: //files[i] from images directory
//         })
//       )
//       .catch(err => console.log(err));
//   };