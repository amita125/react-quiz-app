import React from "react";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import { withRouter } from "react-router";

//components

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ userAnswer: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.correct_answer.includes(this.state.userAnswer)
      ? this.props.incrementScore()
      : console.log("Wrong answer");
    this.props.round < 4
      ? this.props.incrementRound()
      : this.setState({ endQuiz: true });
  };

  render() {
    let answers = this.props.incorrect_answers.concat(
      this.props.correct_answer
    );

    answers = answers.map((x) => (
      <div key={x}>
        <label for={x}>{x} </label>
        <input
          name="answers"
          key={x}
          value={x}
          type="radio"
          onChange={this.handleChange}
        ></input>
      </div>
    ));
    if (this.state.endQuiz === true) {
      return <Redirect to="/score" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {answers}
        <input type="submit" value="Final answer"></input>
      </form>
    );
  }
}

export default AnswerForm;
