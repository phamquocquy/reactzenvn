import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <li className="list-group-item">{this.props.name}{this.props.children}</li>
    );
  }
}

export default App;
