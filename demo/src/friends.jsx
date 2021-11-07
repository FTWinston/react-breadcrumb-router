// Import External Dependencies
import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'

// Import Components
import { Breadcrumb } from 'react-breadcrumb-router';

// Define a small friend page
const Friend = props => (
	<div className="friend">
		<Breadcrumb title={props.name} />
		<h3>{ props.name }</h3>
		<p>More information about { props.name }...</p>
	</div>
)

// Create and export the component
export default () => (
	<div className="friends">
		<Breadcrumb title="Friends" />

		<h2>Your Friends</h2>
		<p>Here are your friends...</p>
		<ul>
			<li><NavLink to="alice">Alice</NavLink></li>
			<li><NavLink to="frank">Frank</NavLink></li>
			<li><NavLink to="jane">Jane</NavLink></li>
			<li><NavLink to="matt">Matt</NavLink></li>
		</ul>

		<Routes>
			<Route title="Alice" path="alice" element={<Friend name="Alice" />} />
			<Route title="Frank" path="frank" element={<Friend name="Frank" />} />
			<Route title="Jane" path="jane" element={<Friend name="Jane" />} />
			<Route title="Matt" path="matt" element={<Friend name="Matt" />} />
		</Routes>
	</div>
)