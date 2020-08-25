import React, { Component } from "react";
import styled from "styled-components";
import DetailsLanguage from "./DetailsLanguage";
import DetailsSkillRelatedAbility from "./DetailsSkillRelatedAbility";

const DetailsStyles = styled.div`
  display: grid;
  grid-gap: 20px;
  text-align: left;
  grid-template-areas:
    "desc desc list"
    "desc desc list"
    "skill skill skill";
`;

const Desc = styled.div`
  grid-area: desc;
  min-width: 350px;
`;

const List = styled.div`
  grid-area: list;
  padding-left: 10px;
  text-align: right;
  border-left: 2px solid black;
`;

const SkillPreview = styled.div`
  padding: 20px;
  grid-area: skill;
  border-top: 2px solid black;
`;

const SkillsLink = styled.div`
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
  handleClickSkill = (url) => {
    this.props.getDataSetState(url, "skillData");
  };

  renderSkills = (skills) => {
    if (!skills || !Object.keys(skills).length > 0) return;
    return (
      <List>
        <h3>Related Skills</h3>
        {this.addSkills(skills)}
      </List>
    );
  };

  addSkills = (skills) => {
    if (!skills) return;
    const skillList = skills.map((skill) => {
      return (
        <SkillsLink
          key={skill.name}
          onClick={() => this.handleClickSkill(skill.url)}
        >
          {skill.name}
        </SkillsLink>
      );
    });
    return skillList;
  };

  renderSkill = (skill) => {
    if (!Object.keys(skill).length > 0 || !skill) return;
    return (
      <SkillPreview>
        <h3>{skill.name}</h3>
        {skill.desc}
      </SkillPreview>
    );
  };
  renderDesc = (desc) => {
    if (!desc) return;
    if (!Array.isArray(desc)) return <div>{desc}</div>;
    const info = desc.map((desc) => {
      return <div key={desc}>{desc}</div>;
    });
    return info;
  };

  render() {
    const details = this.props.details;
    console.log('details info = ', details);
    if (!details.desc && !details.typical_speakers) {
      return <span>loading</span>;
    }
    return (
      <DetailsStyles>
        <Desc>{this.renderDesc(details.desc)}</Desc>
        <DetailsLanguage details={details} />
        <DetailsSkillRelatedAbility
          details={details}
        />
        {this.renderSkills(details.skills)}
        {this.renderSkill(this.props.skillData)}
        {this.renderRelatedAbility}
      </DetailsStyles>
    );
  }
}

export default DetailsInfo;
