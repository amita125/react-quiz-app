import React from "react";

class Question extends React.Component {
  render() {
    return (
      <div className="question-container1">
        <h3>Question : &nbsp;{this.props.qNumber + 1}</h3>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
