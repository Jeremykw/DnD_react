import React, { Component } from "react";
import styled from "styled-components";

const LanguageDetails = styled.div`
  grid-area: skill;
`;

class DetailsLanguage extends Component {
  renderTypicalSpeakers = (speakers) => {
    const length = speakers.length;
    let count = 0;
    return speakers.map((race) => {
        count ++;
        return (
        <span>
          {race}
          {(length > 1 && count < length) ? ', ' : ''}
        </span>
      );
    });
  };
  render() {
    const details = this.props.details;
    if (!details.typical_speakers) return <div></div>;
    return (
      <LanguageDetails>
        <div>
          <strong>Script: </strong>
          {details.script || "There is no written version of this language"}
        </div>
        <div>
          <strong>Type: </strong>
          {details.type || "There is no type of this language"}
        </div>
        <div>
          <strong>Typically Spoken By: </strong>
          {this.renderTypicalSpeakers(details.typical_speakers)}
        </div>
      </LanguageDetails>
    );
  }
}

export default DetailsLanguage;
