import React, {Component} from 'react';
import CharacterList from './CharacterList';
import SquadList from './SquadList';
import SquadRank from './SquadRank';
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 className="main-title">
        <span className="s">S</span>
        <span className="u">u</span>
        <span className="p">p</span>
        <span className="e">e</span>
        <span className="r">r</span>
        <span> </span>
        <span className="s">S</span>
        <span className="q">q</span>
        <span className="u">u</span>
        <span className="a">a</span>
        <span className="d">d</span>
        <span> </span>
        <span className="t">T</span>
        <span className="ee">e</span>
        <span className="a">a</span>
        <span className="m">m</span>
        <span> </span>
        <span className="G">G</span>
        <span className="a">a</span>
        <span className="n">n</span>
        <span className="g">g</span>
      </h2>
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
