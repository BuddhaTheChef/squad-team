import React, {Component} from 'react';
import CharacterList from './CharacterList';
import SquadList from './SquadList';
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 className="main-title">Super Squad</h2>
      <div className="main-content-div">
      <div className="col-md-6">
        <CharacterList/>
      </div>
      <div className="col-md-6">
        <SquadList/>
      </div>
      </div>
    </div>
    )
  }
}

export default App;
