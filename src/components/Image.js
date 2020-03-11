import React from "react";
import "./Image.css";

const Image = image => {
  const { url, hdurl } = image;
  return (
    <a href={hdurl}>
      <img src={url} alt="" />
    </a>
  );
};

export default Image;
