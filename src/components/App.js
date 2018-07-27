import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h2 className="main-title">Super Squad</h2>
        <CharacterList />
      </div>
    )
  }
}

export default App;
