import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import cards from "./Data/cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    clicked: new Set()
  };

  handleClick = id => {
    const { clicked, score, topScore } = this.state;

    if (clicked.has(id) === false) {
      // this.state.clicked.add(id)
      this.setState({ clicked: clicked.add(id) });
      this.setState({ score: score + 1 });
      let newTopScore = topScore <= score ? topScore + 1 : topScore;

      this.setState({
        topScore: newTopScore
      });
    } else {
      clicked.clear();
      this.setState({ score: 0 });
    }

    console.log("this.state.clicked after", clicked);
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
  // handleScore = (id , clicked) => {

  // }
  // handleScore = () => {
  //   console.log("this is the score function")
  //   console.log("this.state.score",this.state.score)
  //   console.log("cards.clicked", cards.clicked)
  //   if (cards.clicked === 0) {
  //     let { score, topScore } = this.state;
  //     let newScore = score++;
  //     let newTopScore = newScore > topScore ? newScore : topScore;
  //     this.setState(updateScore => {
  //       return {
  //         score: newScore,
  //         topScore: newTopScore
  //       };
  //     });
  //   } else {
  //     console.log("hitting the else")
  //     this.setState(newScore => {
  //       return {
  //         score: 0
  //       };
  //     });
  //   }
  // };
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
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
