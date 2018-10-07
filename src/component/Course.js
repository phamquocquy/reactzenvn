import React, { Component } from 'react';
import Lesson from './Lesson';

class App extends Component {
  render() {
    return (
      <div className="card col-md-4">
        <div className="card-header">
          {this.props.name}
          
        </div>
        <ul className="list-group list-group-flush">
          <Lesson name="chuong 1" >pham van quy</Lesson>
          <Lesson name="chương 2" />
          <Lesson name="chương 3" />
        </ul>
      </div>
    );
  }
}

export default App;
