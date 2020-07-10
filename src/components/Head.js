import React, { Component } from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.03);
  text-align: center;
  color: ${(props) => props.theme.white} 
  a {
    color: ${(props) => props.theme.white} 
    text-decoration: none;
    cursor: pointer;
    font-size: 50px;
  }
 
  p {
    margin: 0;
    font-size: 28px;
  }
`;

class Head extends Component {
  render() {
    return (
      <Title>
        <Link to="/">
          Source Reference Tool
        </Link>
        <p>For 5th addition Dungeons and Dragons</p>
      </Title>
    );
  }
}

export default Head;
