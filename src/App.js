import React from 'react';
import { BrowserRouter, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';
import tamagotchi from './tamagotchi.png';
import Critterpedia from './Projects/Critterpedia.js';
import Bluenotes from './Projects/Bluenotes.js';
import Experiments from './Experiments/Experiments.js';




function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <div className='navigation'>
                <div className="navigation-sub links">
                    <NavLink exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
                    <NavLink  to="/experiments" className="link" activeClassName="selected">EXPERIMENTS</NavLink>
                    <NavLink exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
                </div>
            </div>

            <Route exact path="/" component={Projects} />
            <Route path="/experiments" component={Experiments} />
            <Route path="/about" component={About} />
            <Route path="/critterpedia" component={Critterpedia} />
            <Route path="/bluenotes" component={Bluenotes} />


        </div>
        <div className="footer container-fluid">
        <div className="row">
        <div>
        <p>LINKS AND THINGS <img className="tamagotchi" src={tamagotchi}/></p>
        </div>
<div>
            <a className="link" href="mailto: chin_hsuen_lin@brown.edu">EMAIL</a>
            <a className="link" href="https://github.com/christinexlin">GITHUB</a>
            <a className="link" href="https://www.linkedin.com/in/christine-lin-01/">LINKEDIN</a>
            <a className="link" href="https://twitter.com/christinexlin">TWITTER</a>
        </div>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
