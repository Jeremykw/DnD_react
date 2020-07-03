import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";
import Home from "./Home";
import Src from "./Src";
import Details from "./Details";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <Head />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/src" exact component={Src} />
          <Route path="/src/ability-scores" exact component={Details} />
          <Route path="/src/:category" component={Src} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </BrowserRouter>
);

export default Router;
