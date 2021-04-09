import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/cardlist-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <Cardlist monsters={this.state.monsters}></Cardlist>
      </div>
    );
  }
}

export default App;
