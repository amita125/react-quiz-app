import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components

import AnswerForm from '../Components/AnswerForm';
import Question from '../Components/Questions';

class QuestionPage extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            user1:3,
            user2:0,
            questions: [
                {
                    category: "Entertainment: Books",
                    type: "multiple",
                    difficulty: "medium",
                    question: "By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?",
                    correct_answer: "The Artful Dodger",
                    incorrect_answers: [
                        "Fagin",
                        "Bull&rsquo;s-eye",
                        "Mr. Fang"
                    ]
                },
                {
                    category: "Entertainment: Video Games",
                    type: "multiple",
                    difficulty: "easy",
                    question: "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
                    correct_answer: "Shao Kahn",
                    incorrect_answers: [
                        "Liu Kang",
                        "Shang Tsung",
                        "Raiden"
                    ]
                }
            ]
        };
    };
    render() {
        return(
            <Fragment>
                <Question question={this.state.questions[0].question}/>
                <AnswerForm  incorrect_answers={this.state.questions[0].incorrect_answers} correct_answer={this.state.questions[0].correct_answer} />
            </Fragment>
        )
    };
};

export default QuestionPage;
