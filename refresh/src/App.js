import React from 'react';
import Cardist from "./components/card-list"
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      monster: []
     }
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(callback => 
      this.setState({ monster: callback})
    )
  }
  render() { 
    return ( 
      <div>
        <Cardist monster={this.state.monster}/>
    
      </div>
     );
  }
}
 


export default App;
