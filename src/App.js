import React, {Component} from 'react';
import { HashRouter, BrowserRouter, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';
import tamagotchi from './tamagotchi.png';
import Critterpedia from './Projects/Critterpedia.js';
import Bluenotes from './Projects/Bluenotes.js';
import Experiments from './Experiments/Experiments.js';
import ScrollToTop from './ScrollToTop.js';

class App extends Component {

    render() {
        return (
          <BrowserRouter basename="/">
          <ScrollToTop />
              <div className="App">
                  <div className='navigation'>
                      <div className="navigation-sub links">
                          <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
                          <NavLink  basename={process.env.PUBLIC_URL} to="/experiments" className="link" activeClassName="selected">EXPERIMENTS</NavLink>
                          <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
                      </div>
                  </div>

                  <Route exact basename={process.env.PUBLIC_URL} path="/" component={Projects} />
                  <Route basename={process.env.PUBLIC_URL} path="/experiments" component={Experiments} />
                  <Route basename={process.env.PUBLIC_URL} path="/about" component={About} />
                  <Route basename={process.env.PUBLIC_URL} path="/critterpedia" component={Critterpedia} />
                  <Route basename={process.env.PUBLIC_URL} path="/bluenotes" component={Bluenotes} />


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
}

export default App;
