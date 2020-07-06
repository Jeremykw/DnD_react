import React, { Component } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  border-radius: 10px;
  font-size: 20px;
  background: ${(props) => props.theme.bgColor};
  height: 50px;
  width: 150px;
  margin: 0;
  padding: 0;
  justify-items: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  &:hover {
    background: black;
    transition: background-color 500ms linear;
  }
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class ListItems extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledList onClick={ () => this.props.handleClick(this.props.url) } >
          {this.props.item}
        </StyledList>
      </React.Fragment>
    );
  }
}

export default ListItems;
