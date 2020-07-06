import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatUrl } from "./helpers/helpers";

const DetailsStyles = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 20px;
  text-align: left;
  grid-template-areas:
    "desc1 desc1 list"
    "desc2 desc2 list";
`;

const Desc1 = styled.div`
  grid-area: desc1;
`;
const Desc2 = styled.div`
  grid-area: desc2;
`;
const List = styled.div`
  grid-area: list;
  padding-left: 10px;
  border-left: 2px solid black;
`;

const SkillsLink = styled.span`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.btnText};
  &:hover {
    color: black;
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
class DetailsInfo extends Component {
  handleClick = () => {console.log('clickity click')};

  render() {
    if (!this.props.details.desc) {
      return <span>loading</span>;
    }
    const details = this.props.details;
    return (
      <DetailsStyles>
        <Desc1>{details.desc[0]}</Desc1>
        <Desc2>{details.desc[1]}</Desc2>
        <List>
          <h3>Related Skills</h3>
          {details.skills.map((skill) => {
            return (
              <SkillsLink key={skill.name} onClick={()=>this.handleClick()}>
                <div>{skill.name}</div>
              </SkillsLink>
            );
          })}
        </List>
      </DetailsStyles>
    );
  }
}

export default DetailsInfo;
