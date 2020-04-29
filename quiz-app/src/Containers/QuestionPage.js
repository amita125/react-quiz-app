import React, { Fragment } from "react";

import AnswerForm from "../Components/AnswerForm";
import Question from "../Components/Questions";

class QuestionPage extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="QuestionPage">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="question-container">
              <div className="insideQuestion">
                <Fragment>
                  <Question
                    question={this.props.questions[this.props.round].question}
                  />
                  <AnswerForm
                    players={this.props}
                    incorrect_answers={
                      this.props.questions[this.props.round].incorrect_answers
                    }
                    correct_answer={
                      this.props.questions[this.props.round].correct_answer
                    }
                    incrementRound={this.props.incrementRound}
                    incrementScore={this.props.incrementScore}
                    round={this.props.round}
                  />
                </Fragment>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id="cornerQuestionPage"></div>
        </div>
      </div>
    );
  }
}

export default QuestionPage;
