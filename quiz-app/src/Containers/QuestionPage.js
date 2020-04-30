import React, { Fragment } from "react";

import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components

import AnswerForm from "../Components/AnswerForm";
import Question from "../Components/Questions";

class QuestionPage extends React.Component{
    constructor (props) {
        super(props)
        this.state= {
            turnCount: 0,
            endQuiz: false
        }
        this.incrementTurn = this.incrementTurn.bind(this);
        this.resetTurn = this.resetTurn.bind(this);
        this.redirectScore = this.redirectScore.bind(this);
    }

    incrementTurn = () =>{
        this.setState({turnCount: this.state.turnCount + 1})
    }

    resetTurn = () =>{
        this.setState({turnCount: 0})
    }

    redirectScore = () =>{
        this.setState({endQuiz:true})
    }


    render() {
        if (this.state.endQuiz === true) {
            return <Redirect to='/score' />
        }
        return(
            <Fragment>
                <h3>{this.props.players[this.state.turnCount].name}, it's your turn!</h3>
                <Question question={this.props.questions[this.props.round].question}/>
                <AnswerForm players={this.props.players} turnCount={this.state.turnCount} resetRedirect={this.props.resetRedirect} redirectScore={this.redirectScore} incrementTurn={this.incrementTurn} resetTurn={this.resetTurn} incorrect_answers={this.props.questions[this.props.round].incorrect_answers} correct_answer={this.props.questions[this.props.round].correct_answer} incrementRound={this.props.incrementRound} incrementScore={this.props.incrementScore} round={this.props.round} resetRound={this.props.resetRound}/>
            </Fragment>
        )
    };
};

export default QuestionPage;
