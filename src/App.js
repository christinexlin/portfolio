import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import './App.css';
import tamagotchi from './tamagotchi.png';
import Critterpedia from './Projects/Critterpedia.js';
import Bluenotes from './Projects/Bluenotes.js';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <div className="navigation">
                <div className="navigation-sub links">
                    <Link to="/" className="link">PROJECTS</Link>
                    <Link to="/about" className="link">ABOUT</Link>
                </div>
            </div>

            <Route exact path="/" component={Projects} />
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
            <a className="link" href="https://www.linkedin.com/in/christine-lin-01/">LINKEDIN</a>
            <a className="link" href="https://twitter.com/christinexlin">TWITTER</a>
        </div>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
