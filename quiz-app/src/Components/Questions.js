//display the question
import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components



class Question extends React.Component{
    render() {
        return(
            <div className="question-container">
                <h3>Question :</h3>
                <p>{this.props.question}</p>
            </div>
        )
    };
};

export default Question;