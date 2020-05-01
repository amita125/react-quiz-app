import React from "react";
import Parser from "html-react-parser";
class Question extends React.Component {
  render() {
    return (
      <div className="question-container1">
        <h3>Question : &nbsp;{this.props.qNumber + 1}</h3>

        <p>{Parser(String(this.props.question))}</p>
      </div>
    );
  }
}

export default Question;
