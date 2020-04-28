import React, { Component } from "react";
import Form from "../Components/Form";
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body">
              <Form />
              <Link to='/quiz'><p>questions</p></Link>
            </div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
