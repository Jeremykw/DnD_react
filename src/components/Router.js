import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import Src from './Src';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/src" component={Src} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;