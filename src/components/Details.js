import React, { Component } from "react";
import styled from "styled-components";
import { getData } from "./helpers/helpers";
import DetailsList from "./DetailsList";
import DetailsInfo from "./DetailsInfo";

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const ListStyles = styled.div`
  display: grid;
  grid-gap: 10px;

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
    };
  }

  componentDidMount() {
    getData(this.props.match.url).then((data) => {
      this.setState({ listData: data });
      
    });
    getData("/api/ability-scores/wis").then((data) => {
      this.setState({ detailsData: data });
      console.log(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      getData(this.props.match.url).then((data) => {
        this.setState({ data: data });
      });
    }
  }

  handleClick = (url) => {
    getData(url).then((data) => {
      this.setState({ detailsData: data });
      console.log(this.state.detailsData);
    });
  };

  render() {
    const list = this.state.listData;
    const details = this.state.detailsData;
    return (
      <React.Fragment>
        <DetailContainer>
          <ListStyles>
            {Object.keys(list).map((key) => (
              <DetailsList
                key={list[key].index}
                item={list[key].index}
                url={list[key].url}
                handleClick={this.handleClick}
              />
            ))}
          </ListStyles>
          <DetailStyles>
            <h2>{details.full_name}</h2>
            <DetailsInfo details={details} />
          </DetailStyles>
        </DetailContainer>
      </React.Fragment>
    );
  }
}

export default Details;
