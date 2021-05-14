import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'
import { Register } from './component/Register'

import { Login } from './component/Login'

import './App.css'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header"></div>
      git 
      <NavLink  to="/login">login</NavLink>
      <NavLink  to="/register">Register</NavLink>
      <div className="content">
        <Switch>
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
