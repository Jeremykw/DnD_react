import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatUrl } from "./helpers/regexHelpers";
import styled from "styled-components";

const Item = styled.div`
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
`;

const StyledLink = styled(Link)`
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
      <StyledLink to={formatUrl(this.props.url)}>
        <Item
          data={this.props.data}
          onClick={() => this.props.getData(this.props.url)}
        >
          {this.props.item}
        </Item>
      </StyledLink>
    );
  }
}

export default ListItems;
