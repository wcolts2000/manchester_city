import { Promise } from "core-js";
import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { firebase, firebasePlayers } from "../../firebase";
import Stripes from "../../Resources/images/stripes.png";
import { firebaseLooper } from "../ui/misc";
import PlayerCard from "../ui/PlayerCard";

export default class TheTeam extends Component {
  state = {
    loading: true,
    players: []
  };

  componentDidMount = () => {
    firebasePlayers.once("value").then(snapshot => {
      console.log("SNAPSHOT: ", snapshot)
      const players = firebaseLooper(snapshot);
      console.log("PLAYERS: ", players)
      let promises = [];
      for (let key in players) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref("players")
              .child(players[key].image)
              .getDownloadURL()
              .then(url => {
                console.log("URL: ", url)
                players[key].url = url;
                resolve();
              }).catch(err => console.log("ERR: ", err))
          })
        );
      }
      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          players
        });
      });
    });
  };

  showPlayersByCategory = category =>
    this.state.players
      ? this.state.players.map((player, i) => {
          return player.position === category ? (
            <Fade left delay={i * 20} key={i}>
              <div className="item">
                <PlayerCard
                  number={player.number}
                  name={player.name}
                  lastname={player.lastname}
                  bck={player.url}
                />
              </div>
            </Fade>
          ) : null;
        })
      : null;

  render() {
    return (
      <div
        className="the_team_container"
        style={{ background: `url(${Stripes}) repeat` }}
      >
        {!this.state.loading ? (
          <div>
            <div className="team_category_wrapper">
              <div className="title">Keepers</div>
              <div className="team_cards">
                {this.showPlayersByCategory("Keeper")}
              </div>
            </div>
            <div className="team_category_wrapper">
              <div className="title">Defense</div>
              <div className="team_cards">
                {this.showPlayersByCategory("Defense")}
              </div>
            </div>
            <div className="team_category_wrapper">
              <div className="title">Midfield</div>
              <div className="team_cards">
                {this.showPlayersByCategory("Midfield")}
              </div>
            </div>
            <div className="team_category_wrapper">
              <div className="title">Strikers</div>
              <div className="team_cards">
                {this.showPlayersByCategory("Striker")}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
