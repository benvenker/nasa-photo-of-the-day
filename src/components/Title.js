import React from "react";
import "./Title.css";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: bold;
`;

const H2 = styled.h2`
  font-weight: bold;
`;

const Title = props => {
  return (
    <>
      <H2>Nasa Photo of the Day: {props.date}</H2>
      <H1>{props.title}</H1>
    </>
  );
};

export default Title;
