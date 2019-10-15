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

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  console.log("LOOPER DATA: ", data)
  return data;
};

export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i > 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};

export const validate = element => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "this field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};
