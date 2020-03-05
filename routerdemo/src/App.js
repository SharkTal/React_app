import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Welcome to React Router Demo
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>{''}
            </li>
            <li>
              <Link to="/about">About</Link>{''}
            </li>
            <li>
              <Link to="/contact">Contact</Link>{''}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
