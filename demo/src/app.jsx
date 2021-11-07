// Import External Dependencies
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Breadcrumb } from 'react-breadcrumb-router';
import Friends from './friends.jsx'
import Events from './events.jsx'
import Locations from './locations.jsx'

// Load Styling
import '../../src/style.css';
import './app.css';

// Create and export the component
export default class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <Breadcrumbs className="demo__crumbs" separator=" > " />
        <main className="demo__main">
          <h1>Breadcrumbs Demo</h1>
          <p>Use the links below to jump around the site and watch the breadcrumbs update...</p>
          <ul className="demo__links">
            <li><NavLink to="/friends">Friends</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/locations">Locations</NavLink></li>
          </ul>

          <div className="demo__content">
            <Breadcrumb title="Home" path="/" />

            <Routes>
              <Route index element={<span>Home content...</span>} />
              <Route title="Friends" path="/friends/*" element={<Friends/>} />
              <Route title="Events" path="/events/*" element={<Events/>} />
              <Route title="Locations" path="/locations/*" element={<Locations/>} />
              <Route title="404 Not Found" path="*" element={<span>Page not found...</span>} />
            </Routes>
          </div>
        </main>
      </div>
    )
  }
}
