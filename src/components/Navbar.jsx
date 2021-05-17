import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const Navbar = () => {
    return (
            <div>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
   <li><Link to="/create">Create</Link></li>
   <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
    )
}