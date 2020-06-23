import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {};

class App extends React.Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={theme}>
        <p>This is a DND app</p>
      </ThemeProvider>
    );
  }
}

export default App;
