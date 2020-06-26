import React, { Component } from "react";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";
import ListItem from "./ListItem";

const ItemContainer = styled.div`
  max-width: 1000px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  padding: 50px
  justify-self: center:
`;
class Src extends Component {
  state = {
    url: "/",
    data: {},
  };

  componentDidMount() {
    const api = "https://dnd5eapi.co/api";
    const proxy = "https://secure-ravine-36293.herokuapp.com/";

    fetch(proxy + api + this.state.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) =>
        console.log(
          `their was an error with with the network conection: ${err}`
        )
      );
  }

  render() {
    const data = this.state.data;
    console.log(data);
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <Head />
          <Nav />
          <ItemContainer>
            {Object.keys(data).map((key) => {
              return <ListItem key={key} item={key} url={data[key]} />;
            })}
          </ItemContainer>
          <div>src</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Src;
