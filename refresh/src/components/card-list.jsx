import React, { Component } from "react";
import Card from './card'
import styled from "styled-components";

const Div = styled.div`
  padding: 40px 40px 40px 40px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const CardList = props => {
  return (
    <div>
    
      <Div> {props.monster.map(monster => (
          <Card key={monster.id} monster={monster}/>
      ))}</Div>
    </div>
  );
};

export default CardList;
