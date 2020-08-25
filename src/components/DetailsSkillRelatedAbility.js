import React, { Component } from "react";
import styled from "styled-components";
import { getData } from "./helpers/helpers";

const RelatedAbilityStyle = styled.div`
  grid-area: skill;
  border-top: 2px solid black;
  padding-top: 10px
`;

class DetailsSkillRelatedAbility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedAbility: {},
    };
  }

  componentDidMount() {
    if (!this.props.details.ability_score) return;
    getData(this.props.details.ability_score.url).then((data) => {
      this.setState({
        relatedAbility: data,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.details.ability_score) return;
    if (this.props === prevProps) return;
    getData(this.props.details.ability_score.url).then((data) => {
      this.setState({
        relatedAbility: data,
      });
    });
  }


  render() {
    const details = this.props.details;
    if (!details.ability_score) return <div></div>;
    return (
      <RelatedAbilityStyle>
        <h4>{this.state.relatedAbility.full_name}</h4>
        {this.state.relatedAbility.desc} 
        
      </RelatedAbilityStyle>
    );
  }
}

export default DetailsSkillRelatedAbility;
