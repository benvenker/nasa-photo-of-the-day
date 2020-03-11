import React from "react";
import "./Title.css";

const Title = image => {
  const { title } = image;
  return (
    <>
      <h2>NASA Photo of the Day</h2>
      <h1>{title}</h1>
    </>
  );
};

export default Title;
