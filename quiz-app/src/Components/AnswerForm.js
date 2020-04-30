import React from "react";


import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import {withRouter} from 'react-router';

//components



class AnswerForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userAnswer: null,
            turnCount: 0,
            endQuiz: false
        }
        this.userAnswer = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }
    
      
    shuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    }

    handleChange = (e) =>{
        this.userAnswer = e.target.value;
        // this.setState({userAnswer:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        (this.props.correct_answer.includes(this.userAnswer)) ? this.props.incrementScore(this.props.players[this.state.turnCount].name) : console.log('Wrong answer');

        this.setState({turnCount: this.state.turnCount +1}); 
        this.userAnswer = null;

        if(this.props.round < 4 && this.state.turnCount == this.props.players.length -1 ){
            this.props.incrementRound();
            this.setState({turnCount:0});
            
        } else if(this.props.round === 4 && this.state.turnCount == this.props.players.length -1){
            this.setState({endQuiz:true});
        };
    };


    render() {
        let answers = this.props.incorrect_answers.concat(this.props.correct_answer);
        answers = this.shuffle(answers);

        answers = answers.map(x => 
            <div>
                <label for={x}>{x} </label>
                <input name='answers' key={x} value={x} type="radio"  onChange={this.handleChange}></input>
            </div>   
        );
        
        if (this.state.endQuiz === true) {
            return <Redirect to='/score' />
        }
        return(
            <form onSubmit={this.handleSubmit}>
                {answers}
                <input type='submit' value='Final answer'></input>
            </form>
        )

  }
}

export default AnswerForm;
