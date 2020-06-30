import React, { Component } from "react";
import { Route } from "react-router-dom";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";
import ListItem from "./ListItem";
import { apiUrl, parseResults } from "./helpers/helpers";

const ItemContainer = styled.div`
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(auto-fi, minmax(150px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
padding: 50px 
justify-self: center;
@media (min-width: 1200px){
  margin: 0 100px;
} 
`;

class Src extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      fetching: false,
    };
  }

  componentDidMount(prevProps, prevState) {
    this.getData(this.props.match.url);
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props !== prevProps) {
      this.getData(this.props.match.url);
    }
  }

  getData = (url, modate) => {
    fetch(apiUrl(url))
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const data = parseResults(jsonData);
        this.setState({ data: data, url: data.url });
      })
      .catch((err) =>
        console.log(
          `their was an error with with the network conection: ${err}`
        )
      );
  };

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
    console.log("data = ", data);
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <Head />
          <Nav />
          <ItemContainer>{this.renderItems(data)}</ItemContainer>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Src;
