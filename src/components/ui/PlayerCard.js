import React from "react";

function PlayerCard(props) {
  return (
    <div className="player_card_wrapper">
      <div
        className="player_card_thmb"
        style={{ background: `#f2f9ff url(${props.bck})` }}
      />
      <div className="player_card_info">
        <div className="player_card_number">{props.number}</div>
      </div>
      <div className="player_card_name">
        <span>{props.name}</span>
        <span>{props.lastname}</span>
      </div>
    </div>
  );
}

export default PlayerCard;
