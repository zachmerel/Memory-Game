//dependencies and import files
import React, { Component } from "react";
import Card from "../Card/Card";
import cards from "../../Data/cards.json";
import "./style.css";

//establishes class that gives state to props
class Main extends Component {
  state = {
    cards
  };

  handleClick = id => {
    const newShuffle = this.state.cards.sort(() => { return 0.5 - Math.random() })
    console.log('clicked', id)
    this.setState(prevState => {
      return {
        cards: newShuffle
      }
    })
  }

  //renders the card components and gets the state of the id and image?
  render() {
    return (
      <div className="row">
        {this.state.cards.map(player => (
          <Card
            key={player.id}
            id={player.id}
            name={player.name}
            image={player.image}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Main;
