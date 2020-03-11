import React from "react";
import "./Title.css";

const Title = props => {
  return (
    <>
      <h2>NASA Photo of the Day: {props.date}</h2>
      <h1>{props.title}</h1>
    </>
  );
};

export default Title;
