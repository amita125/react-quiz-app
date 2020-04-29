import React, { Fragment } from "react";


class Player extends React.Component{
  constructor (props) {
      super(props)
  };
  render() {
      return(
          <Fragment>
              <h4 style={(this.props.winnerNames.includes(this.props.userInfo.name)) ? {fontWeight: "bold"} : {fontWeight: "normal"}}>{this.props.userInfo.name}: {this.props.userInfo.score}/5</h4>
          </Fragment>
      )
  };
}



export default Player;
