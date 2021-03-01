import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}));
  }
  
  render() {

      // Using destructuring, we can pull properties off of an 
      // existing object and set them to constants that we can use
      // Here we use the this.state object to pull the monsters and
      // searchField properties and assign them to constants.
    const { monsters, searchField } = this.state;

      // Now we write a function that filters the monsters and assign it to a constant
      // using the toLowerCase() method ensures that the search is NOT case sensitive
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => 
            this.setState({ searchField: e.target.value })}
        />
          {/* Pass in filteredMonsters to generate the filtered list */}
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }       
}   

export default App;
