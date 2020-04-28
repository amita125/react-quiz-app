
import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components

import AnswerForm from '../Components/AnswerForm';
import Question from '../Components/Questions';

class QuestionPage extends React.Component{
    constructor (props) {
        super(props)
    };
    render() {
        return(
            <Fragment>
                <Question question={this.props.questions[this.props.round].question}/>
                <AnswerForm  incorrect_answers={this.props.questions[this.props.round].incorrect_answers} correct_answer={this.props.questions[this.props.round].correct_answer} incrementRound={this.props.incrementRound} incrementScore={this.props.incrementScore} round={this.props.round}/>
            </Fragment>
        )
    };
};

export default QuestionPage;
