import React, { Component } from "react";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Head from "./Head";
import Nav from "./Nav";

class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <Nav />
        Details
      </React.Fragment>
    );
  }
}

export default Details;
