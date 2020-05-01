import React, { Fragment } from "react";
import Player from "../Components/Player.js";

class ScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.getWinner = this.getWinners.bind(this);
  }
  getWinners(array) {
    let winners = [{ name: null, score: 1 }];
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
    let winnerNames = this.getWinners(this.props.players);
    console.log(winnerNames);
    let players = this.props.players.map((x) => (
      <Player userInfo={x} winnerNames={winnerNames} key={x.name} />
    ));

    return (
      <div className="container-fluid" id="scorePage">
        <div className="row">
          <div className="col-lg-4" id="leftScorePage"></div>
          <div className="col-lg-5">
            <div className="Score-body">
              <div className="score-container">
                <Fragment>
                  <h1>Game Over!!!! </h1>
                  <br />
                  <br />
                  <br />
                  <h2>
                    <span role="img" aria-label="medal">
                      🥇
                    </span>
                    Winner Player : {`${winnerNames}`}
                  </h2>
                  <br />
                  <br />
                  <h1>
                    <span role="img" aria-label="Trophy">
                      🏆
                    </span>
                    Scores:
                  </h1>
                  <br />
                  <br />

                  {players}

                  <br />
                  <br />
                </Fragment>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id="cornerScorePage"></div>
        </div>
      </div>
    );
  }
}

export default ScorePage;
