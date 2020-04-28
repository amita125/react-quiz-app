import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//components
import Navigation from "./Components/Navigation";
import HomePage from "./Containers/HomePage";
import QuestionPage from "./Containers/QuestionPage";
import ScorePage from "./Containers/ScorePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      level: "",
      players: [{ name: "", score: "0" }],
      data: [],
    };
  }

  getFormData = (e) => {
    console.log(e);
    console.log(e.category);
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${e.category}&difficulty=${e.level}`
    )
      .then((response) => response.json())
      .then((quizData) => {
        this.setState(
          {
            data: quizData.results,
            category: e.category,
            players: e.players,
            level: e.level,
          },
          () => console.log("setState Completed", this.state)
        );
      });
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
            <Route exact path="/quiz/:id">
              <QuestionPage />
            </Route>
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
