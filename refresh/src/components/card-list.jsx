import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const CardList = props => {
  return (
    <div>
      <Div>{props.children}</Div>
    </div>
  );
};

export default CardList;
