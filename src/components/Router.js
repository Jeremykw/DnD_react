import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App";
import Src from "./Src";
import Details from "./Details";

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={App} />
        <Route path="/src" exact component={Src} />
        <Route path="/src/ability-scores" exact component={Details} />
        <Route path="/src/:category" component={Src} />
        <Route component={NotFound} />
      </React.Fragment>
    );
  }
}

export default Router;
