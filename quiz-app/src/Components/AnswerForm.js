import React from "react";

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
      : console.log("Error incrementing round");
  };

  render() {
    let answers = this.props.incorrect_answers.concat(
      this.props.correct_answer
    );

    answers = answers.map((x) => (
      <div key={x}>
        <label htmlFor={x}>{x} </label>
        <input
          name="answers"
          key={x}
          value={x}
          type="radio"
          onChange={this.handleChange}
        ></input>
      </div>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        {answers}
        <input type="submit" value="Final answer"></input>
      </form>
    );
  }
}

export default AnswerForm;
