// //dependencies and import files
// import React, { Component } from "react";
// import Card from "../Card/Card";
// import cards from "../../Data/cards.json";
// import "./style.css";

// //establishes class that gives state to props
// class Main extends Component {
//   state = {
//     cards,
//     score: 0,
//     topScore: 0
//   };

//   handleClick = id => {
//     const newShuffle = this.state.cards.sort(() => { return 0.5 - Math.random() })
//     console.log('clicked', id)
//     this.setState(prevState => {
//       return {
//         cards: newShuffle
//       }
//     })
//   }
//   handleScore = () => {
//     if (cards.clicked === 0) {
//       let {score, topScore} = this.state
//       let newScore = score++;
// 			let newTopScore = newScore > topScore ? newScore : topScore;
//       this.setState(updateScore => {
//         return {
//           score: newScore,
//           topScore: newTopScore
//         };
//       });
//     } else {
//       this.setState(newScore => {
//         return {
//           score: 0
//         };
//       });
//     }
//   };

//   //renders the card components and gets the state of the id and image?
//   render() {
//     return (
//       <div className="row">
//         {this.state.cards.map(player => (
//           <Card
//             key={player.id}
//             id={player.id}
//             name={player.name}
//             image={player.image}
//             handleClick={this.handleClick}
//             handleScore={this.handleScore}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Main;
