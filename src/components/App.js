import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";
import Router from "./Router";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <Head />
        <Nav />
        <Router />
      </React.Fragment>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
