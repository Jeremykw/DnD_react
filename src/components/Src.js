import React, { Component } from "react";
import Theme from "./styles/Theme";
import styled from "styled-components";

import ListItem from "./ListItem";
import { getData } from "./helpers/helpers";

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 50px;
  @media (min-width: 1200px) {
    margin: 0 100px;
  }
`;

class Src extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    getData(this.props.match.url).then((data) => {
      this.setState({ data: data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      getData(this.props.match.url).then((data) => {
        this.setState({ data: data });
      });
    }
  }

  renderItems = (data) => {
    const items = Object.keys(data).map((key) => {
      return (
        <ListItem
          key={data[key].index}
          item={data[key].index}
          url={data[key].url}
        />
      );
    });
    return items;
  };

  render() {
    const data = this.state.data;
    return (
      <React.Fragment>
        <ItemContainer>{this.renderItems(data)}</ItemContainer>
      </React.Fragment>
    );
  }
}

export default Src;
