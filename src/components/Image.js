import React, { useState, useRef } from "react";
import "./Image.css";
import Loader from "react-loader-spinner";

const Image = (props) => {
  // const [loading, setLoading] = useState(props.loading);
  const { url } = props;
  return (
    <a href={url}>
      <img
        src={url}
        alt=""
        onLoad={() => {
          console.log("image loaded");
          props.setLoading(false);
        }}
      />
    </a>
  );
};

export default Image;
