import React from "react";
import { Tag } from "../../ui/misc";

function MatchesHome() {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag linkto="/" bck="#0e1731" size="50px" color="#ffffff">
          Matches
        </Tag>
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkto="/the_team"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
}

export default MatchesHome;
