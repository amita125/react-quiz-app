import React, { Component } from "react";
import Form from "../Components/Form";

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body">
              <Form />
            </div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
