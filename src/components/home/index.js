import React from "react";
import Featured from "./featured/index";
import Matches from "./matches";

function Home() {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
    </div>
  );
}

export default Home;
