import React from "react";
import Featured from "./featured/index";
import Matches from "./matches";
import MeetPlayers from "./meet_players";

function Home() {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
    </div>
  );
}

export default Home;
