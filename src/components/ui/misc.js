import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ linkto, bck, size, color, link, children, add }) => {
  const template = (
    <div
      style={{
        background: bck,
        fontSize: size,
        color: color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "righteous",
        ...add
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return <Link to={linkto}>{template}</Link>;
  } else {
    return template;
  }
};
