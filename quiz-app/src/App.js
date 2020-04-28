import React from "react";
import "./App.css";

import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components
import Navigation from "./Components/Navigation";
import HomePage from "./Containers/HomePage";
import QuestionPage from "./Containers/QuestionPage";
import ScorePage from "./Containers/ScorePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      category: "",
      level: "",
      players: [],
      data: [],
    };
    this.incrementRound = this.incrementRound.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }
    
  incrementRound = () => {
    this.setState({round: this.state.round + 1})
  }

  incrementScore = () =>{
    this.setState({score: this.state.score +1})
  }
 

  getFormData = async(e) => {
      const url = `https://opentdb.com/api.php?amount=5&type=multiplecategory=${e.category}&difficulty=${e.level}`;
      const questions = await (await fetch(url)).json();
      this.setState(
          {
            data: questions.results,
            category: e.category,
            players: e.players,
            level: e.level,
          })
  };


  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage loadFunction={this.getFormData} />
            </Route>
            <Route exact path='/quiz' render={ (props) => <QuestionPage {...props}  questions={this.state.questions} round={this.state.round} incrementScore={this.incrementScore} incrementRound={this.incrementRound}/>}
               />
            <Route exact path="/score">
              <ScorePage />
            </Route>
          </Switch>
        </Router>
      </div>


    );
  }
}


export default App;
