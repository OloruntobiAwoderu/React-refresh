import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Card = props => {
  return (
    <Div>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />

      <h1>{props.monster.name}</h1>
      <h2>
        <p>{props.monster.email}</p>
      </h2>
    </Div>
  );
};

export default Card;
