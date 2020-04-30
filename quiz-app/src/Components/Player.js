import React, { Fragment } from "react";

class Player extends React.Component {
  render() {
    return (
      <Fragment>
        <p
          className="playerScore"
          style={
            this.props.winnerNames.includes(this.props.userInfo.name)
              ? { border: "solid 3px red" }
              : { border: "none" }
          }
        >
          {this.props.userInfo.name}: {this.props.userInfo.score}/5
        </p>
      </Fragment>
    );
  }
}

export default Player;
