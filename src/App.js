import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'; 
import Projects from './projects.jsx'; 
import Strengths from './strengths.jsx';
import About from './about.jsx'; 
import Home from './home.jsx';
import './App.scss';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Nicholas Boyce Logo" />
          <div className="navigation-sub">
                                          
            <Link to="/projects" className="item" name="projects">Projects</Link>
            <Link to="/strengths" className="item" name="strengths">Strengths</Link>
            <Link to="/about" className="item" name="about">About</Link>
  
          </div>
        </div>

          <Route exact path="/projects" component={Projects} />
          <Route exact path="/strengths" component={Strengths} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
    
  );
}
 
export default App;