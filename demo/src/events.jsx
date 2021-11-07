// Import External Dependencies
import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'

// Import Components
import { Breadcrumb } from 'react-breadcrumb-router';

// Define a small event page
const Event = props => (
	<div className="event">
		<Breadcrumb title={props.name} />
		<h3>{ props.name }</h3>
		<p>More information about the { props.name }...</p>
	</div>
)

// Create and export the component
export default () => (
	<div className="friends">
		<Breadcrumb title="Events" />
		
		<h2>Upcoming Events</h2>
		<p>These events are coming up soon...</p>
		<ul>
			<li><NavLink to="dance">Dance</NavLink></li>
			<li><NavLink to="cookout">Cookout</NavLink></li>
		</ul>

		<Routes>
			<Route path="dance" element={<Event name="Dance" />} />
			<Route path="cookout" element={<Event name="Cookout" />} />
		</Routes>
	</div>
)