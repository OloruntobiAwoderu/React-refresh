import React from "react";
import Cardist from "./components/card-list";
import { searchBox } from "./components/searchbox";
import "./App.css";
import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(callback => this.setState({ monsters: callback }));
  }
  handleChange = e => this.setState({ searchField: e.target.value });
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Input
          type="search"
          placeholder={`search monsters`}
          onChange={this.handleChange}
        />

        <Cardist monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
