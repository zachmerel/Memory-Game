import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import cards from "./Data/cards.json";
import "./App.css";
//this sets the state for the score,topscore, and whether or not the picture has been clicked
class App extends Component {
  state = {
    cards,
    message: "Click one of the players to begin!",
    score: 0,
    topScore: 0,
    navMsgColor: "navbar-text navbar-element",
    // the clicked property is a set which will only take unquie values in this case only ids that have been clicked
    clicked: new Set()
  };

  handleClick = id => {
    //destructuring setting the state for these props
    const { clicked, score, topScore } = this.state;
    //updates the state of score, topscore and clicked if the picture has not been clicked
    if (clicked.has(id) === false) {
      this.setState({ clicked: clicked.add(id) });
      this.setState({ score: score + 1 });
      let newTopScore = topScore <= score ? topScore + 1 : topScore;

      this.setState({
        topScore: newTopScore
      });
      this.setState({ message: "You guessed correctly!" });
      this.setState({ navMsgColor: "correct" });

      setTimeout(() => this.setState({ navMsgColor: "navbar-text navbar-element" }), 500);
      //clears the clicked prop to reset for next game and resets score to 0
    } else {
      clicked.clear();
      this.setState({ score: 0 });
      this.setState({ message: "You guessed incorrectly!" });
      this.setState({ navMsgColor: "incorrect" });
    }
    //shuffels the array in cards.json to get the position of the cards to shuffle
    const newShuffle = this.state.cards.sort(() => {
      return 0.5 - Math.random();
    });
    console.log("clicked", id);
    this.setState(prevState => {
      return {
        cards: newShuffle
      };
    });

  };

  //renders out the page and gets all the props from the other components
  render() {
    return (
      <div className="App">
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
          navMsgColor={this.state.navMsgColor}
        />
        <Header />
        <div className="row">
          {this.state.cards.map(player => (
            <Card
              key={player.id}
              id={player.id}
              name={player.name}
              image={player.image}
              clicked={player.clicked}
              handleClick={this.handleClick}
              handleScore={this.handleScore}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
