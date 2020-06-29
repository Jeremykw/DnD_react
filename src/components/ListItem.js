import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatUrl } from "./helpers/helpers";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: grid;
  border-radius: 10px;
  font-size: 30px;
  background: ${(props) => props.theme.bgColor};
  height: 150px;
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
    console.log(this);
    return (
      <StyledLink
        to={formatUrl(this.props.url)}
        onClick={() => this.setState({ url: this.props.url })}
      >
        {this.props.item}
      </StyledLink>
    );
  }
}

export default ListItems;
