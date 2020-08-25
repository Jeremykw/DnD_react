import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Src from "./Src";
import Details from "./Details";
import NotFound from "./NotFound";

const detailPages = [
  '/src/ability-scores/', 
  '/src/skills/',
  '/src/conditions/',
  '/src/damage-types/',
  '/src/languages/',
  '/src/starting-equipment/',
  '/src/traits/',
  '/src/races/',
]

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/src" exact component={Src} />
    <Route path={detailPages} exact component={Details} />
    <Route path="/src/:category" component={Src} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
