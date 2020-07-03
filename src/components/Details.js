import React, { Component } from "react";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Head from "./Head";
import Nav from "./Nav";
import ListItems from "./ListItem";

class Details extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <Head />
          <Nav />
          {/* <ListItems key={data.index} data={data} /> */}
          details
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Details;
