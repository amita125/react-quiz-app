// child of the questionPage
import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components



class AnswerForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){

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
            <form onSubmit>
                {answers}
                <input type='submit' value='Final answer'></input>
            </form>
        )
    };
};

export default AnswerForm;

// const repoMap = this.props.data.map(x => 
//     <li key={x.id}><a href={x.html_url} target="_blank">{x.name} {x.updated_at}</a></li>);