import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './projects.jsx'; 
import Strengths from './strengths.jsx';
import About from './about.jsx'; 
import './App.scss';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Nicholas Boyce Logo" />
          <div className="navigation-sub">
                                          
            <Link to="/" className="item">Projects</Link>
            <Link to="/strengths" className="item">Strengths</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
  
        <Route exact path="/" component={Projects} />
        <Route exact path="/strengths" component={Strengths} />
        <Route path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}
 
export default App;