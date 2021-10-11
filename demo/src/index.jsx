// Import External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import App from './app.jsx';
import { BreadcrumbRouter } from 'react-breadcrumb-router';

// Define element and render method
let element = document.getElementById('app'),
	render = Root => {
		ReactDOM.render((
			<BreadcrumbRouter>
				<Root />
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