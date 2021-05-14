import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import './App.css'
import { Dashboard } from './components/Dashboard'
import { Home } from './components/Home'
import { Login } from './components/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header"></div>
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/login">Login</NavLink>
      <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
