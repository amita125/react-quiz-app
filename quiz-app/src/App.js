import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components
import Navigation from "./Components/Navigation";
import HomePage from "./Containers/HomePage";
import QuestionPage from "./Containers/QuestionPage";
import ScorePage from "./Containers/ScorePage";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions:{},
      round:0,
      score: 0
    };
    this.incrementRound = this.incrementRound.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  componentDidMount = async () => {
    this.getQuestions();
  }

  getQuestions = async() => {
    const url = 'https://opentdb.com/api.php?amount=5&type=multiple';
    const questions = await (await fetch(url)).json();
    if(questions){
        console.log('success ', questions);
        this.setState({ questions: questions.results})
    } else {
        console.log('failure')
    }
  }

  incrementRound = () => {
    this.setState({round: this.state.round + 1})
  }

  incrementScore = () =>{
    this.setState({score: this.state.score +1})
  }




  render () {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path='/quiz' render={ (props) => <QuestionPage {...props}  questions={this.state.questions} round={this.state.round} incrementScore={this.incrementScore} incrementRound={this.incrementRound}/>}
               />
            <Route exact path="/score">
              <ScorePage />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  };
};

export default App;
