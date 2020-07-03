import React, { Component } from "react";
import { formatUrl } from "./helpers/helpers";
import { Link } from "react-router-dom";
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
    return (
      <React.Fragment>
        <StyledLink to={formatUrl(this.props.url)} >
          <div data={this.props}>{this.props.item}</div>
        </StyledLink>
      </React.Fragment>
    );
  }
}

export default ListItems;
