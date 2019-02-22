import React from "react";
import Featured from "./featured/index";
import Matches from "./matches";
import MeetPlayers from "./meet_players";
import Promotion from "./promotion";

function Home() {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
      <Promotion />
    </div>
  );
}

export default Home;
