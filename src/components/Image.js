import React from "react";
import "./Image.css";

const Image = image => {
  const { url } = image;
  return <img src={url} alt="" />;
};

export default Image;
