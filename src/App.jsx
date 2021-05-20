import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    </div>
  );
}

export default App;