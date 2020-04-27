import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components
import Navigation from "./Components/Navigation";
import HomePage from "./Containers/HomePage";
import QuestionPage from "./Containers/QuestionPage";
import ScorePage from "./Containers/ScorePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
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

export default App;
