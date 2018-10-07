import React, { Component } from 'react';
import Course from "./component/Course";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row col-md-12">
            <Course name="php" />
            <Course name="laravel" />
            <Course name="nodejs" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
