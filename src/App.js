import React from 'react';

import { HashRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Preview } from './preview/preview';
import { Root } from './root';


function App() {
	return (
		<Router>
			<Switch>
				<Route path="/preview/:component" children={<Preview />} />
				<Route path="/">
					<div className="container-fluid">
					<Root/>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
