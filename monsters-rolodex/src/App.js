import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/cardlist-components';
import Searchbar from './components/search-bar-component/searchbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value, title: e.target.value });
  }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1>{title}</h1>
        <Searchbar
          placeholder="Search For A Monster"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}
export default App;
