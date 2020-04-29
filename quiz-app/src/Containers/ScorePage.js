import React, { Fragment } from "react";
import Player from "../Components/Player.js";

class ScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.getWinner = this.getWinners.bind(this);
  }
  getWinners(array) {
    let winners = [{ name: null, score: 2 }];
    let winnerNames = [];
    //For every element in usersInfo
    for (let index = 0; index < array.length; index++) {
      if (array[index].score === winners[0].score) {
        winners.push(array[index]);
        winnerNames.push(array[index].name);
      } else if (array[index].score > winners[0].score) {
        winners = [array[index]];
        winnerNames = [array[index].name];
      }
      console.log(winners);
    }
    return winnerNames;
  }
  render() {
    const usersInfo = [
      { name: "Steven", score: 1 },
      { name: "Liam", score: 3 },
      { name: "Matt", score: 4 },
      { name: "Amita", score: 4 },
    ];
    let winnerNames = this.getWinners(usersInfo); //this.props.usersInfo is an array with multiple users, each with a name and a score
    console.log(winnerNames);
    let players = usersInfo.map((x) => (
      <Player userInfo={x} winnerNames={winnerNames} />
    ));
    return (
      <Fragment>
        <h3>Scores:</h3>
        {players}
      </Fragment>
    );
  }
}

export default ScorePage;
