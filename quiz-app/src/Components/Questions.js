import React from "react";

class Question extends React.Component {
  render() {
    return (
      <div className="question-container">
        <h3>Question :</h3>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
