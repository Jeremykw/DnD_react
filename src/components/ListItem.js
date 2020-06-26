import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";


const Item = styled.div`
  display: grid;
  border-radius: 10px;
  font-size: 30px;
  background: ${props => props.theme.bgColor};;
  height: 150px;
  text-align: center;
  justify-items: center;
  align-items: center;
  color: ${props => props.theme.white};
  &:hover {
    background: black;
    transition: background-color 500ms linear;
  }
`;

class ListItem extends Component {
  // url = this.props.url;
  // item = this.props.item;

  render() {
    return (
      <div>
        <Item>{this.props.item}</Item>;
      </div>
    );
  }
}

export default ListItem;
