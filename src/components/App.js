import React, {Component} from 'react';
import CharacterList from './CharacterList';
import SquadList from './SquadList';
import SquadRank from './SquadRank';
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 className="main-title">Super Squad Team Gang</h2>
      <div className="main-content-div">
      <div className="col-md-5">
        <CharacterList/>
      </div>
      <div className="col-md-5">
        <SquadList/>
      </div>
      <div className="col-md-2">
        <SquadRank />
      </div>
      </div>
    </div>
    )
  }
}

export default App;
