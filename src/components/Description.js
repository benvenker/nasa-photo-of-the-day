import React from "react";
import "./Description.css";

const Description = image => {
  const { description } = image;
  return <p>{description}</p>;
};

export default Description;
