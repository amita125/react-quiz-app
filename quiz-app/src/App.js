import React from "react";
import "./App.css";

import { Redirect, Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

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
      players: [{name:'', score:0}],
      data: [],
      redirect: false
    };
    this.incrementRound = this.incrementRound.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.getFormData = this.getFormData.bind(this);
  }
    
  incrementRound = () => {
    this.setState({round: this.state.round + 1})
  }
  
  incrementScore = (pName ) => {
    this.setState({
      players: this.state.players.map( player => 
        (player.name === pName ? Object.assign(player, { score: this.state.score+1 }) : player)
      )
    });
  }
 

  getFormData = async e => {
      const url = `https://opentdb.com/api.php?amount=5&type=multiple&category=${e.category}&difficulty=${e.level}`;
      const questions = await (await fetch(url)).json();
      if(questions){
        this.setState(
          {
            data: questions.results,
            category: e.category,
            players: e.players,
            level: e.level,
            redirect: true

          }
        )
      }
      else{
        console.log('failed')
      }
    
      
      
  };


  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' render={ (props) => <HomePage {...props}  loadFunction={this.getFormData} redirect={this.state.redirect} />}
               />
            <Route exact path='/quiz' render={ (props) => <QuestionPage {...props} players={this.state.players} questions={this.state.data} round={this.state.round} incrementScore={this.incrementScore} incrementRound={this.incrementRound}/>}
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
