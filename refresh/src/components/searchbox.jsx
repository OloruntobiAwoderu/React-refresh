import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
-webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const searchBox = ({ placeholder, handleChange }) => 
  (<Input type="search" placeholder={placeholder} onChange={handleChange} />
);


