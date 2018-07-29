import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class SquadList extends Component {
  render() {
    return (
      <div>
        <h4 className="squad-title">Squad Gang</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(hero => {
              return (
                <li className="list-group-item" key={hero.id}>
                  <div className="list-item">
                    {hero.name}
                  </div>
                  <div
                    className="list-item right-button"
                    onClick={() => this.props.removeCharacterById(hero.id)}
                    >
                    x
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { removeCharacterById })(SquadList);
