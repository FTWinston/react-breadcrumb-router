// Import External Dependencies
import React from 'react'
import {  Route, Routes, NavLink } from 'react-router-dom'

// Import Components
import { Breadcrumb } from 'react-breadcrumb-router';

// Define a small event page
const Location = props => (
	<div className="location">
		<Breadcrumb title={props.name} />
		<h3>{ props.name }</h3>
		<p>More information about { props.name }...</p>
	</div>
)

// Create and export the component
export default () => (
	<div className="friends">
		<Breadcrumb title="Locations" />

		<h2>Locations</h2>
		<p>Some locations...</p>
		<ul>
			<li><NavLink to="mexico">Mexico</NavLink></li>
			<li><NavLink to="china">China</NavLink></li>
		</ul>

		<Routes>
			<Route path="mexico" element={<Location name="Mexico" />} />
			<Route path="china" element={<Location name="China" />} />
		</Routes>
	</div>
)