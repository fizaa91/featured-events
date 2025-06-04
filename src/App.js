import events from './eventsData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light navbar-green">
  <div className="container">
    <a className="navbar-brand" href="/">
      EventFinder
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#events">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      <section className="text-center p-5 bg-light shadow-sm rounded mb-4">
      <motion.h1
  style={{ color: '#0b5d45' }}  
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Discover Events Near You
</motion.h1>

  <p className="lead text-secondary">Find the most exciting local events happening around you.</p>
</section>


      <section className="container my-5 text-center p-5 bg-light shadow-sm rounded mb-4">
        <h2 className="mb-4 "style={{ color: '#0b5d45' }}  >Featured Events</h2>
        <div className="mb-4">
  <input
    type="text"
    className="form-control"
    placeholder="Search events by name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

        <div className="row">
        {events
    .filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(event => (
<motion.div
  className="col-md-4 mb-4"
  key={event.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: event.id * 0.1 }}
>
  <div className="card glass-card h-100 border-0">
    {/* Event Image */}
  

    {/* Card Body */}
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{event.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {event.date} at {event.time}
      </h6>
      <p className="card-text">{event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <button className="btn btn-green-outline mt-auto">Register</button>
    </div>
  </div>
</motion.div>


    ))}
</div>

      </section>
    </div>
  );
}

export default App;
