import React from "react";
import logo from "./logo.svg";
import "./App.css";
//components
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body"></div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
      <footer>
        <p>&copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
