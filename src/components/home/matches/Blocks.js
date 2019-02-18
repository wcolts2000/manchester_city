import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import MatchesBlock from "../../ui/Matches_block";
import { firebaseLooper, reverseArray } from "../../ui/misc";
export default class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount = () => {
    firebaseMatches
      .limitToLast(7)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  };

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <div key={match.id} className="item">
            <div className="wrapper">
              <MatchesBlock match={match} />
            </div>
          </div>
        ))
      : null;

  render() {
    console.log(this.state.matches);
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
