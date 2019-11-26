import React from "react";
import Cardist from "./components/card-list";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(callback => this.setState({ monster: callback }));
  }
  render() {

    const { monster, searchField } = this.state
    const filteredMonsters = monster.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <Cardist monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
