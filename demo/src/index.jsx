// Import External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import App from './app.jsx';
import { BreadcrumbRoute, BreadcrumbRouter } from '../../src/index.js';

// Define element and render method
let element = document.getElementById('app'),
	render = Root => {
		ReactDOM.render((
			<BreadcrumbRouter>
				<BreadcrumbRoute title="Home" path="/" component={ Root } />
			</BreadcrumbRouter>
		), element);
	}

// Initial render
render(App)

// Subsequent HMR renders
if ( module.hot ) {
	module.hot.accept('./app.jsx', () => {
		render(App)
	})
}