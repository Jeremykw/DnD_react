import React, { Component } from "react";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";
import ListItem from "./ListItem";
import { formatUrl } from "./helpers/regexHelpers";

const ItemContainer = styled.div`
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(auto-fi, minmax(150px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
padding: 50px 
justify-self: center;
@media (min-width: 1200px){
  margin: 100px;
} 
`;

class Src extends Component {
  state = {
    url: "/api",
    data: {},
  };

  componentDidMount() {
    this.getData(this.state.url);
  }

  handleCLick = (event, url) => {
    // fetch API data then setPage
    this.getData(url);
    // prevent page reload
    console.log("URL = ", url);
    console.log("event = ", event);
    // event.preventDefault();
    // get text from form
    // const storeName = this.myInput.current.value;
    // console.log(storeName)
    // cange page to /store/'input'
    this.props.history.push(url);
  };
  getData = (url) => {
    const api = "https://dnd5eapi.co";
    const proxy = "https://secure-ravine-36293.herokuapp.com/";

    console.log("url = ", proxy + api + url);

    fetch(proxy + api + url)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const data = this.parseResults(jsonData);
        this.setState({ data: data, url: data.url });
      })
      .catch((err) =>
        console.log(
          `their was an error with with the network conection: ${err}`
        )
      );
  };

  parseResults = (responce) => {
    // Parse data returned from API and return consistant results
    let dataObject = [];
    // if data is nested in .resutls return results only
    if (responce.results) {
      dataObject = responce.results.map((item) => item);
      return dataObject;
    }
    // convert hash into an array of objets
    dataObject = Object.keys(responce).map((key) => ({
      index: key,
      url: responce[key],
    }));
    return dataObject;
  };



  renderItems = (data) => {
    const items = Object.keys(data).map((key) => {
      return (
        <ListItem
          handleCLick={this.handleCLick}
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
