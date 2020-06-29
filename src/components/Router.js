import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import Src from './Src';
import Categories from './Categories';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={App} />
			<Route path="/src" exact component={Src} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;