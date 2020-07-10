import React, { Component } from "react";
import styled from "styled-components";
import { getData, randomPage } from "./helpers/helpers";
import DetailsList from "./DetailsList";
import DetailsInfo from "./DetailsInfo";

const DetailContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const ListStyles = styled.div`
  display: grid;

  grid-gap: 10px;
  max-height: 350px;
  padding: 10px;
  justify-content: center;
  border-right: 2px solid black;
`;

const DetailStyles = styled.div`
  border-radius: 10px;
  margin: 0 40px 0 40px;
  padding: 10px;
  background: ${(props) => props.theme.bgColor};
`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: {},
      detailsData: {},
      skillData: {},
    };
  }

  getDataSetState = (url, stateProp) => {
    getData(url).then((data) => {
      const stateObject = {};
      stateObject[stateProp] = data;
      this.setState(stateObject);
    });
  };

  componentDidMount() {
    const url = this.props.match.url;
    this.getDataSetState(url, "listData");

    this.getDataSetState(randomPage(url), "detailsData");
  }

  handleListClick = (url) => {
    // CHange details view
    this.getDataSetState(url, "detailsData");
    this.setState({ skillData: {} });
  };

  render() {
    const list = this.state.listData;
    const details = this.state.detailsData;
    return (
      <React.Fragment>
        <DetailContainerStyles>
          <ListStyles>
            {Object.keys(list).map((key) => (
              <DetailsList
                key={list[key].index}
                item={list[key].index}
                url={list[key].url}
                handleListClick={this.handleListClick}
              />
            ))}
          </ListStyles>
          <DetailStyles>
            <h2>{details.full_name || details.name}</h2>
            <DetailsInfo
              details={details}
              getDataSetState={this.getDataSetState}
              skillData={this.state.skillData}
            />
          </DetailStyles>
        </DetailContainerStyles>
      </React.Fragment>
    );
  }
}

export default Details;
