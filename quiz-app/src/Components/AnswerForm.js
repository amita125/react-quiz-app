// child of the questionPage
import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

//components



class AnswerForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        // this.props.updateRound();
        this.props.round < 4 ? this.props.updateRound() : console.log('failure');
        
    }



    render() {
        let answers = this.props.incorrect_answers.concat(this.props.correct_answer);
        answers = answers.map(x => 
            <div>
                <label for={x}>{x} </label>
                <input name='answer' key={x} type="radio"></input>
            </div>
            
        );
        return(
            <form onSubmit={this.handleSubmit}>
                {answers}
                <input type='submit' value='Final answer'></input>
            </form>
        )
    };
};

export default AnswerForm;
