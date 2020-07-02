import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App";
import Src from "./Src";
import Details from "./Details";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/src" exact component={Src} />
      <Route path="/src/ability-scores" exact component={Details} />
      <Route path="/src/:category" component={Src} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
