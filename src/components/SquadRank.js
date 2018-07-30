import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadRank extends Component {

strength() {
  let strength = 0;
  this.props.heroes.forEach(hero => strength += hero.strength);
  return strength;
}

intelligence() {
  let intelligence = 0;
  this.props.heroes.forEach(hero => intelligence += hero.intelligence);
  return intelligence;
}

speed() {
  let speed = 0;
  this.props.heroes.forEach(hero => speed += hero.speed);
  return speed;
}

  render() {
    return (
      <div>
        <h4 className="rank-title">Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength:</b>
            <h6>{this.strength()}</h6>
          </li>
          <li className="list-group-item">
            <b>Overall Intellegence:</b>
            <h6>{this.intelligence()}</h6>
          </li>
          <li className="list-group-item">
            <b>Overall Speed:</b>
            <h6>{this.speed()}</h6>
          </li>
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

export default connect(mapStateToProps, null)(SquadRank);
